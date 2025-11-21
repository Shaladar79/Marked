// scripts/config.mjs

// Single config object for The Marked System
export const MarkedConfig = {};

// Core attribute groups (you can expand this later if you want)
MarkedConfig.attributes = {
  body: { label: "Body" },
  mind: { label: "Mind" },
  soul: { label: "Soul" }
};

// Rank list (Option A)
// Keys are capitalized so they match your current default "Normal"
// stored at system.details.rank in template.json
export const MarkedConfig = {};

export const MarkedConfig = {};

MarkedConfig.ranks = {
  normal:   { label: "Normal" },
  quartz:   { label: "Quartz" },
  topaz:    { label: "Topaz" },
  garnet:   { label: "Garnet" },
  emerald:  { label: "Emerald" },
  sapphire: { label: "Sapphire" },
  ruby:     { label: "Ruby" },
  diamond:  { label: "Diamond" },
  mythrite: { label: "Mythrite" },
  celestite:{ label: "Celestite" }
};


// Later we can add:
// MarkedConfig.races = { ... }
// MarkedConfig.backgrounds = { ... }
// MarkedConfig.marks = { ... }
