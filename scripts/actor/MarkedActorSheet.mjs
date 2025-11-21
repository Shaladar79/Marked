// scripts/actor/MarkedActorSheet.mjs

import { MarkedConfig } from "../config.mjs";

export class MarkedActorSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["marked", "sheet", "actor"],
      template: "systems/the-marked-system/templates/actors/actor-sheet.hbs",
      width: 900,
      height: 700,

      // 🔹 TWO TAB GROUPS
      tabs: [
        // TOP-LEVEL: Attributes & Status / Abilities
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "attrStatus"
        },
        // SUBTABS: Attributes / Status (only active inside attrStatus)
        {
          navSelector: ".sheet-subtabs",
          contentSelector: ".attributes-status-body",
          initial: "attributes"
        }
      ],

      submitOnChange: true,
      submitOnClose: true
    });
  }

  getData(options) {
    const context = super.getData(options);

    // ⬅️ Foundry V13: place system data where the template expects it
    context.system = context.data.system;

    // Expose config to templates
    context.config = MarkedConfig;

    return context;
  }

  activateListeners(html) {
    super.activateListeners(html);

    // ---------- RACE-DEPENDENT FIELDS ----------
    const raceSelect = html.find('select[name="system.details.race"]');
    const tribeField = html.find('.tribe-field'); // must exist in header.hbs
    const clanField = html.find('.clan-field');   // must exist in header.hbs

    const updateRaceDependentFields = () => {
      const race = raceSelect.val();

      // Mythrian → show tribe field
      if (race === "mythrian") {
        tribeField.show();
      } else {
        tribeField.hide();
        this.object.update({ "system.details.tribe": "" });
      }

      // Draconian → show clan field
      if (race === "draconian") {
        clanField.show();
      } else {
        clanField.hide();
        this.object.update({ "system.details.clan": "" });
      }
    };

    // Initial update when sheet opens
    updateRaceDependentFields();

    // Update live when race changes
    raceSelect.on("change", () => updateRaceDependentFields());
  }
}
