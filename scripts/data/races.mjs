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

 draconian: {
  label: "Draconian",
  img: "systems/the-marked-system/assets/races/draconian.webp",
  description: `
<h2>Draconian</h2>

<h3>Physical Appearance</h3>
<p>
Draconians are towering, formidable beings—typically standing between 
<strong>7 and 9 feet</strong> tall once they reach adulthood at around 200 years. Their bodies 
are sheathed in scale-plates whose colors and patterns reflect their ancestral lineage. 
These scales shimmer like polished stone, volcanic glass, glacial ice, or living forest bark, 
depending on their clan. Their eyes glow with a primal inner fire, radiant and piercing, 
as if holding the memory of ancient dragons.
</p>

<h3>Lifespan & Growth</h3>
<p>
A Draconian matures slowly compared to other races, reaching full physical and magical 
development only at <strong>200 years</strong>. Their lives may span <strong>up to 600 years</strong>, granting 
them centuries of mastery over the disciplines, traditions, and power systems of their clan. 
This longevity supports a culture deeply rooted in heritage, patience, and accumulated wisdom.
</p>

<h3>Clans & World Lineage</h3>
<p>
Draconians organize their society into powerful 
<strong>World Clans</strong>—lineages defined not by elemental affinity, but by the terrain and 
environments from which their ancient progenitors emerged. These clans embody the raw power 
of Mezoria itself, shaped by stone, storms, tides, forests, and fire.
</p>

<h4>Mountain Clan</h4>
<p>
Stalwart and immovable, the Mountain Clan embodies the unyielding strength of the peaks.  
Their scales resemble granite, obsidian, or slate, granting them natural resilience.  
They value endurance, discipline, and unshakeable resolve.
</p>

<h4>Sea Clan</h4>
<p>
Graceful and adaptive, the Sea Clan draws power from currents, tides, and the deep.  
Their colors evoke coral reefs, ocean depths, or shimmering surf.  
They are intuitive, strategic thinkers, capable of fluid motion and swift adaptation.
</p>

<h4>Forest Clan</h4>
<p>
Connected to the pulse of living nature, the Forest Clan displays organic patterns 
resembling bark, leaves, or moss. They excel in stealth, harmony, and survival, often 
serving as scouts, trackers, and lore-keepers.
</p>

<h4>Desert Clan</h4>
<p>
Hardened by harsh sun and shifting sands, the Desert Clan embodies endurance through adversity.  
Their scales resemble sandstone, sun-bleached bone, or golden dunes.  
They possess unparalleled stamina, cunning, and heat resistance.
</p>

<h4>Volcano Clan</h4>
<p>
Fierce and relentless, the Volcano Clan channels the destructive and creative force of magma.  
Their scales glow with ember-bright cracks or resemble cooled volcanic glass.  
They are passionate warriors, artisans, and wielders of explosive physical might.
</p>

<h3>Lost Clans</h3>
<p>
Ancient Draconian lore whispers of <strong>World Clans long faded</strong>—those shaped by 
forgotten regions: colossal canyons, deep caverns, arctic wastes, storm plateaus, 
or even now-vanished landscapes. These myths speak of powers untapped and bloodlines hidden, 
fueling endless speculation among scholars and wanderers.
</p>

<h3>Role in Mezoria</h3>
<p>
Respected and feared in equal measure, Draconians stand as one of Mezoria’s most influential 
peoples. Though their clans often hold differing philosophies, they share a powerful bond of 
heritage and unity in times of need. Their presence shifts the balance of any conflict, and 
their wisdom shapes the political, martial, and cultural fabric of the world.
</p>
    `
},

  embergiest:  { name: "Embergiest",  description: "" },
  earthen:     { name: "Earthen",     description: "" },
  prismatic:   { name: "Prismatic",   description: "" }
};
