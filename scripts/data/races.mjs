// scripts/data/races.mjs

// Central store for long-form race lore / info.
// Keys MUST match the race keys in MarkedConfig.races
//   (e.g. "anthozoan", "human", "draconian", etc.)

export const MarkedRaceDescriptions = {
  anthozoan: {
    name: "Anthozoan",
    description: `
<strong>Physical Attributes</strong><br>
Anthozoans are not just remarkable for their stunning appearance; their physical form is a marvel of natural mimicry and adaptation.
Their skin is tough yet flexible, resembling the calcium carbonate structures of coral, providing both protection and a canvas for the vibrant hues
and patterns that signal mood, health, or even social status. These patterns can range from the bright, warning colors of toxic corals to the subtle,
soothing shades of deep-water species.<br><br>
Their "hair" isn't merely decorative; it serves as a sensory organ, detecting changes in water current, temperature, and even the electrical fields
of nearby creatures, making them exceptionally aware of their surroundings.<br><br>

<strong>Culture and Society</strong><br>
Anthozoans have a deeply communal and cooperative society, mirroring the symbiotic relationships found within coral reefs. Their communities, known as
"groves," are built around the core principles of mutual aid and environmental stewardship. Art, architecture, and daily practices are all influenced
by their connection to the sea, with structures that are grown from living coral and designed to blend seamlessly into the marine landscape.<br><br>
Music and storytelling play a vital role in their culture, with ancient tales and songs passed down through generations, telling of the ocean's mysteries
and the history of their people.
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
};

  draconian:   { name: "Draconian",   description: "" },
  embergiest:  { name: "Embergiest",  description: "" },
  earthen:     { name: "Earthen",     description: "" },
  prismatic:   { name: "Prismatic",   description: "" }
};
