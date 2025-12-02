// scripts/actor/MarkedActorSheet.mjs

import { MarkedConfig } from "../config.mjs";

export class MarkedActorSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["marked", "sheet", "actor"],
      template: "systems/the-marked-system/templates/actors/actor-sheet.hbs",
      width: 900,
      height: 700,

      tabs: [
        // TOP-LEVEL TABS (Information / Attributes & Status / Abilities / Skills)
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "attr-status"
        },

        // SUBTABS: Attributes & Status
        {
          navSelector: ".sub-tabs",
          contentSelector: ".sub-body",
          initial: "attributes"
        },

        // SUBTABS: Abilities (Marks, later more)
        {
          navSelector: ".abilities-subtabs",
          contentSelector: ".abilities-subbody",
          initial: "marks"
        },

        // SUBTABS: Skills (Body / Mind / Soul)
        {
          navSelector: ".skills-sub-tabs",
          contentSelector: ".skills-sub-body",
          initial: "body-skills"
        }
      ],

      submitOnChange: true,
      submitOnClose: true
    });
  }

  getData(options = {}) {
    const data = super.getData(options);

    // Foundry v10/11 compatibility: some versions use data.data.system
    data.system = data.data?.system ?? data.system;
    data.config = MarkedConfig;

    return data;
  }

  /* -------------------------------------------- */
  /*  Listeners                                   */
  /* -------------------------------------------- */

  activateListeners(html) {
    super.activateListeners(html);

    // ============================
//  UNIVERSAL ROLL HANDLER
// ============================
html.on("click", ".roll-any", ev => {
  ev.preventDefault();

  const button = ev.currentTarget;

  const rollType = button.dataset.rolltype;     // "attribute" or "skill"
  const path     = button.dataset.path;         // e.g. "body.might" or "skills.might.athletics"

  let target = 0;

  // -------------------------
  // Determine target number
  // -------------------------
  if (rollType === "attribute") {
    target = foundry.utils.getProperty(this.actor.system.attributes, path)?.value ?? 0;
  }
  else if (rollType === "skill") {
    target = foundry.utils.getProperty(this.actor.system.skills, path)?.total ?? 0;
  }

  // -------------------------
  // Perform the d100 roll
  // -------------------------
  const roll = new Roll("1d100").roll({async:false});
  const value = roll.total;

  // -------------------------
  // Calculate DOS
  // -------------------------
  let DOS = 0;

  // Critical fail / fail
  if (value >= 95) {
    DOS = 0;
  }
  else if (value <= 5) {
    DOS = 4; // crit success = +4 successes
  }
  else if (value <= target) {
    DOS = 1;
    const margin = target - value;
    DOS += Math.floor(margin / 15);
  }

  // -------------------------
  // STORE THE RESULT
  // -------------------------
  this.actor.update({ "system.details.lastDOS": DOS });

  // -------------------------
  // CHAT MESSAGE
  // -------------------------
  roll.toMessage({
    speaker: ChatMessage.getSpeaker({ actor: this.actor }),
    flavor: `
      <b>${rollType === "attribute" ? "Attribute Roll" : "Skill Roll"}</b><br>
      Target: ${target}<br>
      Roll: ${value}<br>
      <b>DOS: ${DOS}</b>
    `
  });
});

    // --------------------------------
    // RACE-DEPENDENT EXTRA DROPDOWNS
    // --------------------------------
    const raceSelect = html.find('select[name="system.details.race"]');
    const tribeField = html.find(".tribe-field");
    const clanField  = html.find(".clan-field");

    const updateRaceDependentFields = () => {
      const raceKey = raceSelect.val();

      // Mythrian → show Tribe
      if (raceKey === "mythrian") {
        tribeField.show();
      } else {
        tribeField.hide();
        this.object.update({ "system.details.tribe": "" });
      }

      // Draconian → show Clan
      if (raceKey === "draconian") {
        clanField.show();
      } else {
        clanField.hide();
        this.object.update({ "system.details.clan": "" });
      }
    };

    const applyRaceData = () => {
      const raceKey = raceSelect.val();
      if (!raceKey) return;

      // e.g. "human" → "Human"
      const raceLabel = MarkedConfig.races?.[raceKey] ?? raceKey;

      const raceStatus     = MarkedConfig.raceStatus?.[raceLabel];
      const raceAttributes = MarkedConfig.raceAttributes?.[raceLabel];

      const update = {};

      // 1) STATUS: copy racial status into system.status.*
      if (raceStatus?.status) {
        for (const [path, value] of Object.entries(raceStatus.status)) {
          update[`system.status.${path}`] = value;
        }

        // Optionally set current = max for V/M/S
        if (raceStatus.status["vitality.max"] !== undefined) {
          update["system.status.vitality.value"] = raceStatus.status["vitality.max"];
        }
        if (raceStatus.status["mana.max"] !== undefined) {
          update["system.status.mana.value"] = raceStatus.status["mana.max"];
        }
        if (raceStatus.status["stamina.max"] !== undefined) {
          update["system.status.stamina.value"] = raceStatus.status["stamina.max"];
        }
      }

      // 2) ATTRIBUTES: apply racial modifiers to sub-attributes
      if (raceAttributes) {
        for (const [path, bonus] of Object.entries(raceAttributes)) {
          // path like "body.might" → system.attributes.body.might.value
          const attrPath = `system.attributes.${path}.value`;
          const current  = foundry.utils.getProperty(this.actor.system, attrPath) ?? 0;
          update[attrPath] = Number(current) + Number(bonus);
        }
      }

      update["system.details.race"] = raceKey;

      if (Object.keys(update).length > 0) {
        this.object.update(update);
      }
    };

    // Initial state
    updateRaceDependentFields();

    // When race changes
    raceSelect.on("change", () => {
      updateRaceDependentFields();
      applyRaceData();
    });

    // --------------------------------
    // ATTRIBUTE ROLLS (group + sub)
    // --------------------------------
    html.on("click", ".roll-attribute", this._onAttributeRoll.bind(this));
    html.on("click", ".roll-subattribute", this._onSubattributeRoll.bind(this));
  }

  /* -------------------------------------------- */
  /*  Roll Helpers                                */
  /* -------------------------------------------- */

  /**
   * Core percent-check logic:
   * - target = attribute value
   * - success on roll <= target
   * - +1 success per full 15 under
   * - 1–5 = crit success: +4 successes
   * - 95–100 = auto-fail
   */
  async _percentCheck(target, label, groupLabel = "") {
    const tgt = Number(target ?? 0) || 0;

    const roll = await new Roll("1d100").evaluate({ async: true });
    const r = roll.total;

    let successes = 0;
    let outcome   = "Failure";

    if (r >= 95) {
      outcome = "Catastrophic Failure";
      successes = 0;
    } else {
      const diff = tgt - r;
      if (diff >= 0) {
        successes = 1 + Math.floor(diff / 15);

        if (r <= 5) {
          successes += 4;
          outcome = "Critical Success";
        } else {
          outcome = "Success";
        }
      } else {
        outcome = "Failure";
      }
    }

    const speaker = ChatMessage.getSpeaker({ actor: this.actor });

    const flavorParts = [];
    if (groupLabel) flavorParts.push(`<strong>${groupLabel}</strong>`);
    if (label)      flavorParts.push(`<span>${label}</span>`);

    const flavor = flavorParts.join(" – ");

    const content = `
      <div class="marked-roll-card">
        <h3>${flavor}</h3>
        <p><strong>Target:</strong> ${tgt}%</p>
        <p><strong>Roll:</strong> ${r}</p>
        <p><strong>Outcome:</strong> ${outcome}</p>
        <p><strong>Successes:</strong> ${successes}</p>
      </div>
    `;

    await ChatMessage.create({
      speaker,
      flavor: "Attribute Check",
      content,
      rolls: [roll]
    });
  }

  /* -------------------------------------------- */

  async _onAttributeRoll(event) {
    event.preventDefault();
    const button  = event.currentTarget;
    const groupKey = button.dataset.attr; // "body" | "mind" | "soul"

    if (!groupKey) return;

    const attrs = this.actor.system.attributes?.[groupKey];
    if (!attrs) return;

    const target = attrs.value ?? 0;
    const label  = `${attrs.label ?? groupKey} AVG`;

    return this._percentCheck(target, label, "Attribute Group");
  }

  async _onSubattributeRoll(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const path   = button.dataset.subattr; // e.g. "body.might"

    if (!path) return;

    const [groupKey, subKey] = path.split(".");
    const group = this.actor.system.attributes?.[groupKey];
    if (!group) return;

    const sub = group[subKey];
    if (!sub) return;

    const target = sub.value ?? 0;
    const label  = sub.label ?? subKey;
    const groupLabel = group.label ?? groupKey;

    return this._percentCheck(target, label, groupLabel);
  }
}
