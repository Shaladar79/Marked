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
        { navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main" }
      ],
      submitOnChange: true,
      submitOnClose: true
    });
  }

  getData(options) {
    const context = super.getData(options);

    // 🔹 This is the important bit:
    // Foundry puts your document data under `data`,
    // so copy `data.system` to top-level `system`
    context.system = context.data.system;

    // You already had this:
    context.config = MarkedConfig;

    return context;
  }

  activateListeners(html) {
    super.activateListeners(html);
  }
}
