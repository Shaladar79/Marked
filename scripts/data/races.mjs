// scripts/data/races.mjs

// Central store for long-form race lore / info.
// Keys MUST match the race keys in MarkedConfig.races
//   (e.g. "anthozoan", "human", "draconian", etc.)

export const MarkedRaceDescriptions = {
 anthozoan: {
  label: "Anthozoan",
  img: "systems/the-marked-system/assets/races/anthozoan.webp",
  description: `
<h2>Anthozoan</h2>

<h3>Physical Attributes</h3>
<p>
Anthozoans are living embodiments of oceanic coral—beautiful, resilient, and deeply 
connected to the rhythms of the sea. Their skin resembles the flexible yet durable 
structure of coral polyps, forming natural patterns and ridges that can range from soft 
pastels to the vibrant warning colors of toxic reef species.
</p>

<p>
Their coloration is not random; the hues that flow across their surface reflect emotional 
states, environmental changes, or even social signals within their communities. The “hair” 
of an Anthozoan is not hair at all, but a mass of sensory tendrils capable of detecting 
currents, temperature shifts, and even faint electrical fields produced by nearby creatures. 
These tendrils move like strands of drifting seaweed and offer Anthozoans unparalleled 
awareness beneath the waves.
</p>

<h3>Culture & Society</h3>
<p>
Anthozoan society is built around the concept of harmony, both environmentally and socially. 
Their communities—called <strong>Groves</strong>—are made up of individuals who grow, shape, 
and maintain coral structures as naturally as other races build cities.
</p>

<p>
Every Anthozoan contributes to the ecosystem they inhabit, mirroring the intricate symbiosis 
of real coral reefs. Art, music, and storytelling reflect oceanic themes, with tales passed 
down through mesmerizing bioluminescent displays and rhythmic, flowing songs that mimic 
the natural movement of underwater life.
</p>

<p>
Their architecture is grown rather than built, shaped from living coral formations that 
blend seamlessly with the surrounding reef. They value cooperation, balance, and 
environmental stewardship, believing that the health of the sea and the health of 
their people are inseparable.
</p>
    `
},


  // 🔹 Placeholders for other races you’ll add later:
  human:       { name: "Human",       description: "" },
  etherean:    { name: "Etherean",    description: "" },
  mythrian:    { name: "Mythrian",    description: "" },
  sylvan:      { name: "Sylvan",      description: "" },
  sprite:      { name: "Sprite",      description: "" },
  auramine: {
    label: "Auramine",
    img: "systems/the-marked-system/assets/races/auramine.webp",
    description: `
<h2>Auramine</h2>

<h3>Appearance</h3>
<p>
The Aurumine are a majestic and enigmatic race whose appearance mirrors the very essence 
of the cosmos. Their skin carries a natural metallic sheen, ranging from pale, starlit 
alabaster to deep, rich bronzes and obsidians. Under sunlight, their skin reflects a soft 
celestial glow; under moonlight, they gleam like figures carved from the night sky itself.
</p>

<p>
Their hair flows like liquid metal—golden, silver, coppery, or shimmering blends that ripple 
with reflected light. At night, their hair takes on an ethereal luminescence, faintly 
mirroring constellations or drifting in gleams like falling star-dust.
Their eyes are deep wells of cosmic color, swirling with metallic depth, 
as if containing their own starlight.
</p>

<h3>Culture & Society</h3>
<p>
Aurumine culture is built on the foundations of arcane scholarship and celestial reverence. 
They believe their souls are tied to the cosmic order, and thus they strive to embody harmony, 
discipline, and an unending pursuit of knowledge.
</p>

<p>
Their cities and sanctuaries are architectural marvels aligned to celestial bodies—places 
where starlight is captured, reflected, and channeled into ritual magic. Leaders among the 
Aurumine are chosen not by birthright but by wisdom and mastery over cosmic forces. 
Many Aurumine dedicate themselves to artistry, crafting tools and relics inscribed 
with intricate glyphs and symbols that channel astral and arcane energies.
</p>

<p>
To the Aurumine, beauty and purpose are inseparable. Every craft, structure, and ritual 
is both a work of art and a conduit of their connection to the celestial realms.
</p>
    `
  },

  draconian:   { name: "Draconian",   description: "" },
  embergiest:  { name: "Embergiest",  description: "" },
  earthen:     { name: "Earthen",     description: "" },
  prismatic:   { name: "Prismatic",   description: "" }
};
