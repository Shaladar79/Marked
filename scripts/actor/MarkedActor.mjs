// scripts/actor/MarkedActor.mjs

export class MarkedActor extends Actor {
  prepareDerivedData() {
    super.prepareDerivedData();

    // System data shortcut
    const system = this.system;

    // Ensure details exists
    if (!system.details) system.details = {};
    const details = system.details;

    // ==================================
    // SPIRIT ECONOMY
    // Total Spirit = Current + Spent
    // ==================================
    const current = Number(details.currentSpirit ?? 0) || 0;
    const spent   = Number(details.spentSpirit ?? 0) || 0;

    // Derived field: how much Spirit has ever been awarded
    details.totalSpirit = current + spent;

    // =============================
    // ATTRIBUTE GROUP AVERAGES
    // =============================
    const attrs = system.attributes ?? {};

    // Body = average of (Might, Swiftness, Endurance)
    if (attrs.body) {
      const b = attrs.body;
      const values = [
        b.might?.value,
        b.swiftness?.value,
        b.endurance?.value
      ].map(v => Number(v ?? 0));

      const sum   = values.reduce((a, v) => a + v, 0);
      const count = values.length || 1;
      b.value = Math.round(sum / count);
    }

    // Mind = average of (Insight, Quickness, Willpower)
    if (attrs.mind) {
      const m = attrs.mind;
      const values = [
        m.insight?.value,
        m.quickness?.value,
        m.willpower?.value
      ].map(v => Number(v ?? 0));

      const sum   = values.reduce((a, v) => a + v, 0);
      const count = values.length || 1;
      m.value = Math.round(sum / count);
    }

    // Soul = average of (Presence, Grace, Resolve)
    if (attrs.soul) {
      const s = attrs.soul;
      const values = [
        s.presence?.value,
        s.grace?.value,
        s.resolve?.value
      ].map(v => Number(v ?? 0));

      const sum   = values.reduce((a, v) => a + v, 0);
      const count = values.length || 1;
      s.value = Math.round(sum / count);
    }

    // =============================
    // SKILL TOTALS
    // (for now: total = parent attribute avg)
    // =============================
    const skills = system.skills ?? {};

    const setSkillTotals = (groupSkills, attrValue) => {
      if (!groupSkills) return;
      const base = Number(attrValue ?? 0) || 0;

      for (const [key, skillData] of Object.entries(groupSkills)) {
        if (key === "expertise") continue; // skip flag
        if (!skillData || typeof skillData !== "object") continue;

        // Skill node should have a 'total' field
        skillData.total = base;
      }
    };

    // BODY → Might / Swiftness / Endurance
    if (skills.body && attrs.body) {
      setSkillTotals(skills.body.might,     attrs.body.might?.value);
      setSkillTotals(skills.body.swiftness, attrs.body.swiftness?.value);
      setSkillTotals(skills.body.endurance, attrs.body.endurance?.value);
    }

    // MIND → Insight / Quickness / Willpower
    if (skills.mind && attrs.mind) {
      setSkillTotals(skills.mind.insight,   attrs.mind.insight?.value);
      setSkillTotals(skills.mind.quickness, attrs.mind.quickness?.value);
      setSkillTotals(skills.mind.willpower, attrs.mind.willpower?.value);
    }

    // Later: SOUL skills (Presence / Grace / Resolve) once defined in template.json

    // Later: compute Parry, Toughness, Essence slots, Mark effects, etc.
  }
}
