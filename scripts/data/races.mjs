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
  auramine:    { name: "Auramine",    description: "" },
  draconian:   { name: "Draconian",   description: "" },
  embergiest:  { name: "Embergiest",  description: "" },
  earthen:     { name: "Earthen",     description: "" },
  prismatic:   { name: "Prismatic",   description: "" }
};
