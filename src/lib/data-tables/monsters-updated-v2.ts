export type Stats = {
	hp: number;
	armor: number;
	str: number;
	dex: number;
	wil: number;
	attack: string;
};

export type MonsterV2 = {
	id: string;
	title: string;
	stats: Stats;
	details: string[];
	environments: string[];
};

export const monsterListV2: MonsterV2[] = [
	{
		title: 'Acolyte',
		stats: {
			hp: 4,
			armor: 1,
			str: 8,
			dex: 11,
			wil: 14,
			attack: 'ceremonial dagger (d6)'
		},
		details: [
			'Holy servants bound to a particular deity. Typically travel in groups of four or more.',
			'Carries a holy symbol (<em>Ward</em> once per day).'
		],
		environments: ['Barrens', 'Forest', 'Mountain'],
		id: 'b689a8dd-4c2e-4eab-8318-49a793847d1a'
	},
	{
		title: 'Air Elemental',
		stats: { hp: 16, armor: 0, str: 11, dex: 15, wil: 8, attack: 'detachment' },
		details: [
			'Living vortexes of whirling air and gas. Lighter creatures are swept away by their mere presence.',
			'<strong>Whirlwind</strong>: All nearby targets that fail a STR save are blown away.'
		],
		environments: ['Clear Grass Lands', 'Mountain', 'Skys'],
		id: '34ba9e3d-66d3-4284-93f8-3c03332de00a'
	},
	{
		title: 'Aranea',
		stats: { hp: 6, armor: 0, str: 13, dex: 12, wil: 15, attack: 'bite (d8)' },
		details: [
			'Enormous spiders with greenish-black skin and large brains. Can shapeshift into human form at will.',
			'Conduct their magical research in dark, web-filled caverns. Carry the <em>Charm</em> and <em>Command</em> spellbooks at all times.',
			'Fire damage against Aranea is <em>enhanced</em>.'
		],
		environments: ['Swamp', 'Mountain', 'Cave', 'AncientGraveyard'],
		id: 'c38c2ee0-0fc7-4b53-855f-43d4f50d3644'
	},
	{
		title: 'Bandit',
		stats: {
			hp: 4,
			armor: 1,
			str: 12,
			dex: 12,
			wil: 9,
			attack: 'shortsword (d6) or short bow (d6)'
		},
		details: [
			'Outlaws who raid settlements, attack ships, or ambush travelers. Groups of four or more are a <em>detachment</em>.',
			'A detachment always travels with one leader wearing chainmail or similar (2 Armor) and a long sword (d10) or crossbow (d8).',
			'<strong>Loyal</strong>: When testing Morale, save using the leader’s WIL (13). If the leader dies, the others will flee.'
		],
		environments: [
			'Forest',
			'Clear Grass Lands',
			'Desert',
			'LakeRiver',
			'Ocean',
			'Skys',
			'AncientGraveyard',
			'Temple'
		],
		id: '1b29bf9d-68d8-4502-abeb-3a04e196c906'
	},
	{
		title: 'Banshee',
		stats: {
			hp: 8,
			armor: 0,
			str: 6,
			dex: 12,
			wil: 15,
			attack: 'ghostly touch (d8)'
		},
		details: [
			'Incorporeal spirits that linger long after death to haunt the living.',
			'Unharmed by cold, heat, or the elements. Iron weapon damage is <em>Enhanced</em>.',
			'<strong>Wail</strong>: Anyone in earshot must makes a WIL save or be fall unconscious.'
		],
		environments: [
			'Mines',
			'Cave',
			'Temple',
			'Abandoned Manor',
			'Ancient Graveyard',
			'Ruined Castle',
			'Forgotten Battlefield',
			'Cursed Woods',
			'Secluded Crypts',
			'Desolate Moor',
			'Cliffside by the Sea',
			'Ruins of a Monastery',
			'Mage’s Tower'
		],
		id: 'fcf9e044-6888-461c-99c8-73188c2cfdad'
	},
	{
		title: 'Basilisk',
		stats: {
			hp: 10,
			armor: 1,
			str: 12,
			dex: 13,
			wil: 13,
			attack: 'bite (d10)'
		},
		details: [
			'Long, serpentine lizards that nest deep below the earth or in brambles just underfoot.',
			'Fighting a <strong>Basilisk</strong> without meeting its gaze is difficult (attacks facing it are <em>impaired</em>).',
			'<strong>Gaze</strong>: A target facing the Basilisk is slowly petrified, from the bottom up, completely frozen after three rounds. An antidote can be brewed from the Basilisk’s gizzards. The creature’s reflection is harmless.'
		],
		environments: ['Barrens', 'Forest', 'Cave'],
		id: '6cc144c9-b6be-41ec-b033-ee4b8e7f02ea'
	},
	{
		title: 'Berserker',
		stats: {
			hp: 10,
			armor: 1,
			str: 14,
			dex: 13,
			wil: 15,
			attack: 'twin axes (d8+d8)'
		},
		details: [
			'Ruthless warriors that derive their power from the skins they wear: bears, wolves, boars, etc.',
			'Ignore the <strong>Morale</strong> rule and are never treated as part of a <em>detachment</em>.',
			'<strong>Rage</strong>: A Berserker’s first attack has both the <em>enhanced</em> and <em>blast</em> qualities.'
		],
		environments: ['Swamp', 'LakeRiver', 'Clear Grass Lands'],
		id: 'e131a526-70de-497c-8eda-15a9f30f5f0c'
	},
	{
		title: 'Black Bear',
		stats: {
			hp: 6,
			armor: 0,
			str: 14,
			dex: 12,
			wil: 6,
			attack: 'claws (d6+d6)'
		},
		details: [
			'Waist-high bears that subsist mostly on berries and roots. Drawn to campsites in search of food.',
			'Aggressive if cornered or feel that their young are threatened.',
			'<strong>Critical Damage</strong>: A large chunk of flesh is bitten off (d6 STR damage).'
		],
		environments: ['Forest'],
		id: '00e3ad11-d2ca-4c7e-853f-204799448e3b'
	},
	{
		title: 'Black Dragon',
		stats: {
			hp: 16,
			armor: 1,
			str: 13,
			dex: 18,
			wil: 14,
			attack: 'detachment'
		},
		details: [
			'Amphibious dragons with glossy black scales and thick hides. Dwell in swamps or similarly dangerous and flooded environments.',
			'Cruel and prone to violence. Make use of the dark and their surprising agility to separate their victims and kill them one by one.'
		],
		environments: [
			'Mountain',
			'Skys',
			'Cave',
			'Sunken Ruins of an Ancient City',
			'Corrupted Swamp with Acidic Pools',
			'Decayed Forest Overrun by Blight',
			'Abandoned Castle Shrouded in Dark Magic',
			'Deep Caverns Beneath a Dead Mountain',
			'Marshland Fortress Wrapped in Mists',
			'Ruined Temple Sunk Beneath Murky Waters'
		],
		id: '0dbab2c6-7452-477e-a11a-f08be6db459a'
	},
	{
		title: 'Black Pudding',
		stats: {
			hp: 12,
			armor: 0,
			str: 11,
			dex: 5,
			wil: 3,
			attack: 'devouring touch (d8)'
		},
		details: [
			'Giant, brainless blobs of black jelly driven only by their insatiable hunger.',
			'Moves along walls and across ceilings. Squeeze through holes and cracks with ease.',
			'Immune to mundane attacks, save fire. Normal attacks splits the Black Pudding. creating two Puddings that share HP and STR.',
			'<strong>Critical Damage</strong>: Targets wearing non-metallic armor lose 1 point of Armor, and any STR loss to unarmored targets is <em>permanent</em>.'
		],
		environments: [
			'Abandoned Mine Shafts',
			'Underground Sewer Systems',
			'Ancient Ruined Catacombs',
			'Dank Dungeons Beneath Old Castles',
			'Natural Caves Filled with Stalactites and Stalagmites',
			'Derelict Ships Sunk in Dark Waters',
			'Forgotten Subterranean Temples',
			'Deep Chasms in the Earth',
			'Haunted Forest',
			'Lost City'
		],
		id: '689c433e-17a6-43eb-a02e-ece4628dbcdc'
	},
	{
		title: 'Blink Dog',
		stats: { hp: 5, armor: 0, str: 11, dex: 14, wil: 5, attack: 'bite (d6)' },
		details: [
			'Teleporting canines in service of a powerful master.',
			'Can phase out of reality at will. Melee attacks against them are <em>impaired</em>.'
		],
		environments: ['Clear Grass Lands'],
		id: '4138755e-d40e-49fe-913b-842bec7696ba'
	},
	{
		title: 'Blood Elk',
		stats: { hp: 4, armor: 0, str: 12, dex: 13, wil: 5, attack: 'horns (d8)' },
		details: [
			'Born from violence resulting from a greedy or selfish act.',
			'Kills its victims for sustenance, but gains no succor. It is always hungry.',
			'<strong>Critical Damage</strong>: gores its victims by ripping out their entrails.'
		],
		environments: [
			'Forest',
			'Enchanted Glade Cursed by a Covetous King',
			'Ancient Grove Where a Treacherous Deal Was Struck',
			'Sacred Pool Tainted by Thieves’ Blood',
			'Ruins of a Temple Defiled by Greed',
			'Ghostly Forest, Site of a Massacre Over Forgotten Gold',
			'Mountain Pass Guarded by Spirits of Fallen Nature Protectors',
			'Crystal Lake Reflecting the Greed of Those Who Gaze Upon It',
			'Valley of Whispering Winds, Where Echoes Speak of Betrayal',
			'Misty Highlands Shrouded in the Sorrow of a Greedy Clan’s Demise',
			'Blighted Orchard That Once Flourished Until Stricken by Avarice'
		],
		id: '8ff986c5-902e-4cc8-b8d6-471dc9a41cf5'
	},
	{
		title: 'Blue Dragon',
		stats: {
			hp: 14,
			armor: 3,
			str: 14,
			dex: 16,
			wil: 15,
			attack: 'detachment'
		},
		details: [
			'Enormous, centipede-like reptilian creatures that dwells in deserts and rocky drylands.',
			'Proud and vain, they often keep victims as slaves. The more prestigious the better.',
			'<strong>Thunderclap</strong>: Deals 4 STR damage against a single target. Targets wearing metal armor take double damage.'
		],
		environments: [
			'Desert',
			'Cave',
			'Ancient Desert Palace Buried by Sand',
			'Rocky Plateau Overlooking Vast Drylands',
			'Grand Canyon with Hidden Caves and Passages',
			'Ruined Fortress in a Desert Oasis, Now Dry',
			'Sphinx-guarded Tomb in the Heart of the Desert',
			'Cliffside Aerie in a Barren Mountain Range',
			'Abandoned City at the Edge of a Desert, Taken Over by Sand',
			'Massive, Petrified Forest in a Desert, Home to Lost Treasures',
			'Deep Chasm in a Dry Riverbed, Concealing an Underground Palace',
			"Dried-up Lakebed, with the Dragon's Lair in the Ancient Lake's Depths"
		],
		id: '30e05ec4-c6ac-4deb-ab29-35171cfbfc90'
	},
	{
		title: 'Boar',
		stats: { hp: 3, armor: 0, str: 12, dex: 9, wil: 6, attack: 'tusks (d6)' },
		details: [
			'Omnivorous wild boars that dwell primarily in forests.',
			'Not naturally aggressive, but dangerous if disturbed.',
			'<strong>Critical Damage</strong>: Gores its victims, who bleed out very quickly.'
		],
		environments: [
			'Forest',
			'Muddy Riverbanks Rich in Vegetation',
			'Overgrown Ruins Reclaimed by Nature',
			'Mystical Glades with Magical Properties',
			'Foothills Leading to Mountainous Terrains',
			'Borderlands Between Civilized Farms and Wild Woods',
			'Ancient Druid Groves Sacred to Nature Deities',
			'Swamps with Dense Canopies and Sunlight Patches',
			'Bramble-Thicketed Clearings in Deep Woods',
			'Abandoned Orchards Gone Wild and Overgrown'
		],
		id: '5f0714c3-7907-4b66-8144-d3af9d7165f8'
	},
	{
		title: 'Boggart',
		stats: { hp: 3, armor: 0, str: 4, dex: 17, wil: 13, attack: '' },
		details: [
			'A wild, hairy trickster that prizes shiny trinkets above coin.',
			'Boggarts have true names that describe their true nature. Knowing these names gives a person control over them.',
			'<strong>Magic</strong>: The Boggart can <em>bring objects to life</em>, <em>sow confusion</em>, <em>create magical disguises</em>, use <em>telekinesis</em>, and <em>teleport</em>.'
		],
		environments: [
			'Swamp',
			'Forest',
			'Abandoned Jewelry Maker’s Shop, cluttered with trinkets and baubles',
			'Overgrown Hedge Maze with hidden treasures and traps',
			'Old, Forgotten Wells, rumored to be filled with wishes and coins',
			'Dilapidated Mansions, where generations of hidden wealth lie scattered',
			'Ruined Castles with treasure vaults that have been long since looted',
			'Enchanted Forest Clearings, known for strange and luminous objects',
			'Ancient Crossroads, where travelers have lost precious items',
			'Cave Systems beneath Old Market Towns, littered with lost possessions',
			'Attics of Haunted Houses, where forgotten heirlooms gather dust',
			'The Wreckage of Sunken Ships, where the boggarts collect drowned treasures'
		],
		id: 'd40870a0-efe5-4228-9aa1-bdd7ecf0ab6a'
	},
	{
		title: 'Bone Construct',
		stats: {
			hp: 8,
			armor: 3,
			str: 15,
			dex: 5,
			wil: 3,
			attack: 'sharpened arms (d8+d8), detachment'
		},
		details: [
			'Gigantic, four-armed constructs made of bone and sorcery.',
			'Mindless guardians that stand ready to attack any creature other than their creator.'
		],
		environments: [
			"Necromancer's Tower, hidden deep within a cursed forest",
			'Ancient Crypts beneath a long-forgotten battlefield',
			'Ruined Temples dedicated to gods of death and the underworld',
			'Forbidden Libraries containing dark magical tomes',
			"Sorcerer's Laboratory, where arcane experiments went awry",
			'Catacombs under an ancient city, lined with the bones of the past',
			'Dark Mausoleums in a graveyard where the veil is thin',
			'Abandoned Castles where dark rituals were once performed',
			'Desecrated Shrines once sacred, now home to dark forces',
			'Lost Dungeons beneath a cursed land, forgotten by time'
		],
		id: '6bb701f3-500f-4bd6-8e9a-0cd37ce94507'
	},
	{
		title: 'Bronze Construct',
		stats: {
			hp: 3,
			armor: 3,
			str: 18,
			dex: 6,
			wil: 0,
			attack: 'fists (d10+d10), detachment'
		},
		details: [
			'Towering humanoid constructs made of pure bronze. Resemble old men with long beards and hair, and emanate a strong heat.',
			'Immune to fire and heat.',
			'If punctured, spurts a burning hot liquid dealing d6 STR damage to anyone nearby.'
		],
		environments: [],
		id: 'ddf94029-65f5-4a85-b7d1-ed60af2c5dcb'
	},
	{
		title: 'Bugbear',
		stats: { hp: 8, armor: 1, str: 14, dex: 12, wil: 11, attack: 'club (d8)' },
		details: [
			'Large, goblin-like creatures covered in fur.',
			'Prefers stealth and trickery to gain an advantage.',
			'Often command parties of like creatures (typically goblins).'
		],
		environments: [],
		id: '4941ebf1-c2b6-4a47-9d88-9e7f9fcc930b'
	},
	{
		title: 'Burrowing Horror',
		stats: { hp: 6, armor: 1, str: 16, dex: 11, wil: 4, attack: 'blast)' },
		details: [
			'Huge insectoids with multiple legs and shiny black eyes. Subsists from dirt, roots, and flesh.',
			'Burrows just beneath the surfaces to ambush unsuspecting creatures.',
			'<strong>Critical Damage</strong>: Target loses a body part. Roll 1d6. 1: Head, 2-4: Leg, 5-6: Arm.'
		],
		environments: [
			'Fallow Fields - Once fertile farmland, now abandoned and full of easy prey for the horror.',
			'Ancient Battlefields - Rich in the remains of fallen warriors, providing both cover and sustenance.',
			'Decayed Forests - Where thick roots provide nourishment and the dense canopy helps conceal movements.',
			'Ruined Outposts - Areas where civilization once encroached upon nature, now a hunting ground.',
			'Deserted Quarries - Deep pits and loose soil make for perfect burrowing terrain.',
			'Eroded Canyons - The layered earth of these regions allows for complex tunneling.',
			'Marshlands - Soft ground and abundant life make these areas ideal for lurking horrors.',
			'Old Graveyards - Rich in decomposed matter, providing both a hunting ground and camouflage.',
			'Collapsed Mines - Offering a network of pre-dug tunnels to expand and hunt within.',
			'Forsaken Villages - Abandoned places where these horrors can roam freely beneath the unkempt grounds.'
		],
		id: '2737dccc-2b4b-4e7e-bbc0-582a23186f9a'
	},
	{
		title: 'Camel',
		stats: {
			hp: 3,
			armor: 0,
			str: 14,
			dex: 13,
			wil: 4,
			attack: 'bite or kick (d6)'
		},
		details: [
			'Beasts of burden native to dry, arid lands.',
			'Can survive without water for weeks at a time.',
			'Moves through sand and broken ground without difficulty.'
		],
		environments: ['Desert'],
		id: '54365099-2ba7-4842-8e39-ccec4796dcbb'
	},
	{
		title: 'Catoblepas',
		stats: { hp: 7, armor: 1, str: 16, dex: 9, wil: 13, attack: 'tail (d8)' },
		details: [
			'A chimeric monstrosity bearing traits of buffalo, lizard, and boar. Its enormous head is always pointing towards the ground.',
			'<strong>Paralyze</strong>: A single target is turned to stone. Moonlight reverses the effect.'
		],
		environments: [
			'Barrens',
			'Murky Swamplands - Dense fog and thick vegetation obscure the creature, making its deadly gaze a surprise.',
			"Petrified Forests - Trees turned to stone hint at the catoblepas's presence, a grim warning for travelers.",
			"Cursed Marshes - Lands blighted by dark magic, where the catoblepas's paralyzing gaze adds to the desolation.",
			'Ancient Ruins by Water - Structures half-sunken into swamps or lakes, where catoblepas lurk, blending history with horror.',
			'Fetid Lagoons - Stagnant, poison-filled waters that are home to these monstrosities, deterring most life forms.',
			'Blighted Farmland - Once fertile lands, now withered and dying, patrolled by a catoblepas feeding on the decay.',
			'Forsaken Graveyards - Where the thin veil between life and death attracts the catoblepas, a guardian of the dead.',
			"Mystical Glades - Rare, hidden places where moonlight has strong magical properties, offering a cure to the catoblepas's stone curse.",
			'Boundary of Realms - Regions where the material plane brushes against darker worlds, a catoblepas guarding the threshold.',
			'The Bog of Eternal Stench - A place so vile and odorous that only creatures like the catoblepas can endure its fumes.'
		],
		id: 'f264536b-d73b-4ad4-ae35-079f3c73bb94'
	},
	{
		title: 'Cave Locust',
		stats: { hp: 2, armor: 0, str: 6, dex: 12, wil: 3, attack: 'bite (d6)' },
		details: [
			'Giant plant-eating crickets that dwell in caves. Immune to most types of poison.',
			'Their natural coloration allows them to blend in with the stone. They emit loud shrieks when threatened.'
		],
		environments: [
			'Cave',
			'Mines',
			'Limestone Caverns - Vast networks of caves known for their stark, white stone walls, where locusts blend perfectly.',
			'Underground Jungles - Rare ecosystems deep within the earth, where sunlight filters through cracks above, supporting lush plant life.',
			'Fungal Forests - Subterranean areas overrun with giant mushrooms and other fungi, providing ample food for the locusts.',
			'Ancient Dwarven Mines - Abandoned mining tunnels that have been reclaimed by nature, with mosses and lichens covering the walls.',
			'Crystal Caves - Sparkling caves filled with quartz and other minerals, where locusts’ coloration mimics the reflective surfaces.',
			'Druidic Sanctuaries - Sacred places below the earth where magic promotes the growth of plants, attracting hungry locusts.',
			'Ruined Underground Cities - Once bustling settlements now fallen into decay, where overgrown vegetation provides food.',
			'Subterranean Riverbanks - Moist environments where diverse plant life thrives along the water’s edge, ideal for locusts.',
			'Volcanic Vents - Caves warmed by geothermal heat, supporting unique ecosystems where these creatures can find their niche.',
			"Echoing Canyons Below - Deep fissures in the earth that open into wider cave systems, where the locusts' shrieks reverberate."
		],
		id: '21829757-67a3-4c25-a148-062d5a360f26'
	},
	{
		title: 'Centaur',
		stats: {
			hp: 6,
			armor: 1,
			str: 14,
			dex: 12,
			wil: 14,
			attack: 'spear (d8) or short bow (d6)'
		},
		details: [
			'Creatures with the lower body and legs of a horse, but a humanoid upper body.',
			'Rarely found alone, preferring the company of their own.'
		],
		environments: [
			'Verdant Meadows - Expansive grasslands where centaur herds can roam freely and graze.',
			'Sacred Groves - Forested areas considered holy, where centaurs gather for rituals and to commune with nature.',
			'Borderlands - The outskirts of forests and human settlements, where centaurs might interact or conflict with other races.',
			'Ancient Ruins in the Wild - Remnants of old civilizations in natural settings, where centaurs may establish homes or hold gatherings.',
			'Riverbanks and Lakesides - Fertile and water-rich areas that support the flora and fauna centaurs rely on for sustenance.',
			'Hidden Valleys - Secluded and protected by natural formations, these valleys serve as safe havens for centaur tribes.',
			'Mountain Foothills - Regions where the terrain begins to rise, offering strategic locations for centaur outposts or villages.',
			'Mystical Clearings - Places of power within forests or plains, where centaurs perform their rites and celebrate their culture.',
			'Abandoned Vineyards - Once-cultivated lands that have gone wild, where centaurs might find both food and shelter.',
			'Crossroads in the Wilderness - Meeting points for various paths and trails, often used by centaurs as places of trade or parley with other creatures.'
		],
		id: '6aca2851-3633-4d11-aed3-2290a9d2227f'
	},
	{
		title: 'Chimera',
		stats: {
			hp: 10,
			armor: 0,
			str: 14,
			dex: 11,
			wil: 13,
			attack: 'bite (d10)'
		},
		details: [
			'A flying, sorcerous hybrid of lion, goat, and dragon (pick one).',
			'<strong>Dragon’s Breath</strong>: The dragon’s head spits acid, lightning, or fire depending on its type. d8 STR damage.'
		],
		environments: [
			'High Mountain Peaks - Inaccessible except by flight, perfect for a lair and hunting grounds.',
			'Volcanic Caves - Reflecting the fiery aspect of their dragon heritage, with the heat serving as a comfort.',
			'Ruined Castles - Perched atop craggy hills, offering both a panoramic view for hunting and a majestic sense of domain.',
			'Deep Forest Clearings - Hidden away from prying eyes, where all three aspects of the chimera can thrive.',
			"Abandoned Temples - Especially those once dedicated to gods of beasts or war, now desecrated as the chimera's den.",
			'Mystical Ruins - Ancient sites charged with magical energy, attracting the chimera’s sorcerous nature.',
			'Cliffside Nests - Overlooking vast territories, allowing the chimera to survey its realm and spot incoming threats or prey.',
			'Desolate Moorlands - Wide-open spaces that are hard to traverse on foot, giving the chimera an advantage in hunting.',
			'Ancient Dragon Burial Sites - Drawing on the draconic aspect of the chimera, these sites could offer arcane power or treasures.',
			"Stormwracked Islands - Isolated and battered by elements, mirroring the chimera's tumultuous nature."
		],
		id: 'ec112471-f6fd-4edb-bf42-73cda747e475'
	},
	{
		title: 'Cloud Giant',
		stats: {
			hp: 12,
			armor: 1,
			str: 16,
			dex: 12,
			wil: 14,
			attack: 'detachment'
		},
		details: [
			'Towering, white-skinned giants that live in castles high in the mountains.',
			'Missile attacks against them are <em>impaired</em> due to the powerful winds surrounding them.'
		],
		environments: [
			'Skys',
			'Floating Castles - Held aloft by magic, drifting slowly through the clouds and secured against unwelcome visitors by powerful winds.',
			'Mountain Pinnacles - The highest peaks, where the air is thin, and the ground touches the heavens, perfect for giants who wish to look down upon the world.',
			'Skyborne Islands - Mysterious landmasses that float high above the earth, accessible only by those who can fly or know the giants’ secrets.',
			'Enchanted Valleys - Hidden among towering mountains, these valleys are shrouded in mists and perpetual cloud cover, guarded by the giants.',
			'Ancient Pillars of the Sky - Massive stone columns believed to hold up the sky, where cloud giants have carved out their majestic homes.',
			"Giant's Eyrie - High-altitude nests, similar to those of the largest birds of prey, but scaled to the immense size of cloud giants.",
			'Celestial Bridges - Arcing constructs that span the highest mountain ranges, serving as pathways between the realms of cloud giants.',
			'Aeries in the Mist - Platforms or small fortresses that cling to the sides of cliffs, enveloped in the dense clouds that cloud giants call home.',
			'Storm Palaces - Grand edifices that exist within the heart of perpetual storms, controlled and calmed at the whim of their cloud giant masters.',
			'Heavenly Gardens - Lush, verdant expanses that exist at high altitudes, where cloud giants cultivate rare plants and magical herbs.'
		],
		id: '34557df5-5033-4b65-9e9e-aa6a2a0e0dfb'
	},
	{
		title: 'Cobblehounds',
		stats: { hp: 12, armor: 2, str: 14, dex: 1, wil: 8, attack: 'bite (d10)' },
		details: [
			'Immobile constructs typically used as guardians to great tombs or artifacts.',
			'Unaffected by mundane persuasion techniques, but love a good bone.'
		],
		environments: [
			'Ancient Crypt Entrances - Guarding the sacred resting places of heroes or kings.',
			'Vaults Containing Magical Artifacts - Where powerful items are stored and protected.',
			'Doorways to Hidden Libraries - Holding ancient knowledge and forbidden lore.',
			'Entrances to Abandoned Temples - Once centers of worship, now left in ruins.',
			'Gateways to Mystic Realms - Portals located in secluded or hard-to-reach areas.',
			"Ruined Castles' Treasuries - Guarding the last remnants of fallen kingdoms.",
			'Underground Bunkers of Ancient Civilizations - Containing technological marvels lost to time.',
			'Sacred Groves - Entrances to natural spaces imbued with powerful magic.',
			'Sealed Caverns - Hiding rare minerals or the entrance to the Underdark.',
			'Tombs of Forgotten Deities - Where the remains of once-worshipped gods lie.'
		],
		id: '2e813af4-0cde-4343-bb12-a4e012ea34b4'
	},
	{
		title: 'Cockatrice',
		stats: { hp: 5, armor: 0, str: 8, dex: 14, wil: 4, attack: 'beak (d6)' },
		details: [
			'Small, agile creatures resembling chickens with reptilian features.',
			'<strong>Critical Damage</strong>: The target’s injured area is covered in stone, which spreads to the rest of their body within three rounds. The stone can be chipped off.'
		],
		environments: [
			'Overgrown Ruins - Where nature has reclaimed once-busy marketplaces or residential areas, perfect for ambushes.',
			'Petrified Forests - Filled with the stone remnants of their previous victims, adding a level of caution for adventurers.',
			'Abandoned Farms - Once thriving with livestock, now left desolate with only the cockatrice stalking the fields.',
			'Cursed Graveyards - Where the dead rest uneasily, and the cockatrice adds to the dread with its presence.',
			'Forsaken Quarries - Offering plenty of hiding spots and a fitting environment for their petrifying abilities.',
			"Dense Jungles - The thick foliage and shadows allow them to stalk prey undetected until it's too late.",
			'Old Battlefields - The scattered armor and weapons of fallen soldiers provide a grim setting for an encounter.',
			'Mystical Grottos - Hidden away and imbued with ancient magic that may have given rise to such creatures.',
			'Haunted Villages - Deserted by humans due to curses or plagues, now roamed by cockatrices among the ruins.',
			'Ancient Temples - Whose lost treasures are guarded by these creatures, using their petrifying ability as the ultimate defense.'
		],
		id: '63d64f56-18b7-4b34-9f76-036ae8d3e2e5'
	},
	{
		title: 'Couatl',
		stats: { hp: 9, armor: 0, str: 6, dex: 12, wil: 15, attack: 'bite (d6)' },
		details: [
			'Long, feathered serpents with colorful wings. Live in hot jungles, and are considered divine by some civilizations.',
			'Highly intelligent and magical, they are capable of speaking any language.',
			'Can shapechange into the form of a person or small animal.'
		],
		environments: [
			'Sacred Groves - Deep within the jungle, where ancient magics are strongest and the veil between worlds is thin.',
			'Hidden Temples - Dedicated to or protected by the Couatl, filled with puzzles and traps to test the worthy.',
			'Ruined Cities - Overgrown by the jungle, where the Couatl watches over lost knowledge and forgotten treasures.',
			'Crystal Caves - Radiating magical energy, serving as a nexus for ley lines and a haven for meditation and healing.',
			'High Plateaus - Surrounded by steep cliffs, accessible only by flight, where Couatls convene and council.',
			'Ancient Obelisks - Erected in their honor, marking the boundaries of their territories and places of power.',
			'Waterfall Sanctuaries - Hidden behind cascades, these serene locations are perfect for a Couatl seeking solitude or reflection.',
			'Abandoned Astronomical Observatories - Where they study the stars and celestial events, pondering the mysteries of the universe.',
			'Magical Springs - Whose waters are imbued with healing properties, guarded by the Couatl against those who would misuse them.',
			'Enchanted Isles - In the heart of vast lakes, shrouded in mist and accessible only to those led by fate or the Couatl itself.'
		],
		id: '75ea220b-a4f8-4732-8fa0-e2f0d2581259'
	},
	{
		title: 'Creeping Vines',
		stats: {
			hp: 8,
			armor: 0,
			str: 10,
			dex: 12,
			wil: 2,
			attack: 'vines (d4, blast)'
		},
		details: [
			'Appears as an inert, typical vine. Attacks passing creatures to use their corpses as fertilizer.',
			'<strong>Critical Damage</strong>: Target is pulled into the air where they asphyxiate within a few minutes.'
		],
		environments: [
			'Overgrown Ruins - Where civilization has been reclaimed by nature, perfect for vines to hide and hunt.',
			'Dense Forests - Particularly in areas with thick underbrush and a canopy that blocks most of the sunlight.',
			'Walled Gardens - Abandoned and unkempt, with the vines posing as decorative plants gone wild.',
			"Jungle Pathways - Where the thick vegetation on either side is indistinguishable until it's too late.",
			'Swamp Edges - The border areas where land meets water, allowing vines to use both environments for camouflage.',
			'Old Greenhouses - Glass structures overrun by what was once cultivated vegetation, now turned deadly.',
			'Village Outskirts - Areas where the wilderness begins to encroach on human settlements.',
			'Ancient Battlegrounds - Where the nutrients from fallen soldiers have fed the vines for centuries.',
			"Riverbanks - Especially in areas where the vines can hang from overhanging trees to snatch prey from the water's edge.",
			'Mountain Passes - In regions where the vines can grow along the rocky walls, blending in with the natural moss and foliage.'
		],
		id: '3346a3fe-d8f3-4a1c-a753-c1544f5399bf'
	},
	{
		title: 'Crypt Guardian',
		stats: {
			hp: 12,
			armor: 0,
			str: 12,
			dex: 11,
			wil: 14,
			attack: 'ethereal claws (d8+d8)'
		},
		details: [
			'An animated skeleton clothed in billowing robes. Its eye sockets are hypnotically red. Defends crypts &amp; tombs, but will not attack if left undisturbed.',
			'Non-magical attacks against it are <em>impaired</em>.',
			'Can teleport any target in eyesight to a random room nearby.'
		],
		environments: [],
		id: 'a44182f6-f3a8-4873-a671-02f92ae65911'
	},
	{
		title: 'Cyclops',
		stats: { hp: 9, armor: 0, str: 18, dex: 8, wil: 6, attack: 'club (d10)' },
		details: [
			'Giant humanoids with a single large eye centered on the face. Dwell in caves and herd small animals.',
			'Slow-witted and easily fooled.'
		],
		environments: [
			'Desert',
			'Ancient Mausoleums - Housing the remains of long-forgotten nobles, each room protected by its own guardian.',
			'Underground Catacombs - A labyrinth of burial chambers beneath a city, where guardians ensure the peace of the interred.',
			'Sealed Tomb Chambers - Hidden within pyramids or burial mounds, where treasures and mummies lie undisturbed.',
			'Sacred Temples - Converted into crypts for fallen priests and clerics, protected by guardians to maintain sanctity.',
			'Haunted Graveyards - Where the guardians patrol at night, ensuring no grave is desecrated by thieves or necromancers.',
			'Forgotten Crypts - Beneath ruined castles or manors, where the last members of once-great families are interred.',
			'Cursed Burial Sites - Places struck by plagues or disasters, guarded to contain the malevolence within.',
			'Warriors’ Halls - Tombs dedicated to legendary heroes, their remains guarded by skeletal sentinels of equal valor.',
			'Vaults of the Occult - Containing dangerous artifacts along with the bodies of their owners, under strict watch.',
			'Mystical Shrines - Deep in the wilderness, marking the resting places of druids or shamans with guardians to deter the unwary.'
		],
		id: '345579ad-4280-4a01-9d0b-ed9c97e0367a'
	},
	{
		title: 'Deep One',
		stats: {
			hp: 6,
			armor: 0,
			str: 14,
			dex: 16,
			wil: 12,
			attack: 'trident (d8)'
		},
		details: [
			'Amphibious, fish-like humanoids that live in the deep sea. Highly resistant to magical effects.',
			'Occasionally surface to trade with coastal settlements. On land their movement is slowed by half.',
			'Can only reproduce with land-dwelling humanoids.'
		],
		environments: [],
		id: '2c53c7e0-54cc-4d92-bc71-679a95d8a2e1'
	},
	{
		title: 'Devil Swine',
		stats: {
			hp: 9,
			armor: 0,
			str: 16,
			dex: 8,
			wil: 13,
			attack: 'gore (d6+d6)'
		},
		details: [
			'Obese humanoids that transform into massive porcine monstrosities to feast on human flesh.',
			'Prefer to hunt in isolated settlements close forests and wetlands. Can only shapeshift at night.',
			'<strong>Charm</strong>: Target obey’s the swine’s every command until it is killed. WIL save once per round to break free.'
		],
		environments: [
			'forest',
			'wetlands',
			'Sunken Cities - Ancient metropolises that have slipped beneath the waves, where Deep Ones now dwell among the ruins.',
			'Underwater Caverns - Accessible from the sea but close to the shore, serving as gateways for Deep Ones to enter the land.',
			'Coastal Trade Ports - Where Deep Ones might clandestinely surface under the cover of night to barter with select humans.',
			'Secluded Coastal Villages - Known for ancient pacts with the sea, where the lines between human and Deep One blur.',
			'Mysterious Lighthouses - Situated on rocky outcrops far from shore, rumored to be meeting points for Deep Ones and surface dwellers.',
			'Flooded Temples - Partially submerged structures dedicated to forgotten sea gods, now home to Deep One cults.',
			'Ship Graveyards - Regions of treacherous waters where sunken ships are said to be looted by Deep Ones.',
			'Isolated Islands - With hidden underwater access points, allowing Deep Ones to emerge far from the prying eyes of larger settlements.',
			'Coral Reefs - Teeming with life and color, masking the presence of Deep One scouts observing surface activity.',
			'Estuaries and River Mouths - Where fresh water meets the sea, Deep Ones may venture to explore or make contact with the land.'
		],
		id: '64664acd-1787-4390-b7ec-50bea1df6151'
	},
	{
		title: 'Dire Wolf',
		stats: { hp: 8, armor: 0, str: 14, dex: 12, wil: 8, attack: 'bite (d10)' },
		details: [
			'Horse-sized, semi-intelligent wolves that roam the forests and mountains. Highly territorial.',
			'Can be trained as pets if captured young.'
		],
		environments: [
			'Barrens',
			'Forest',
			'Dense, Old-Growth Forests - Where the thick canopy obscures their movements and provides cover for ambushes.',
			'Snow-Capped Mountain Ranges - Offering harsh conditions that dire wolves are well adapted to survive.',
			'Fog-Enshrouded Moors - Vast, open lands where their howls echo, warning intruders of their territory.',
			'Great Northern Tundras - Cold, expansive plains where dire wolves hunt in packs to bring down large prey.',
			'Borderlands Between Kingdoms - Often overlooked by humans, these areas offer dire wolves ample game and minimal human contact.',
			'Deep Valleys - Hidden from the sight of most travelers, providing a secluded environment for packs to thrive.',
			'Abandoned Fortresses - Taken over by dire wolf packs as dens, the ruins offer shelter and strategic defensive positions.',
			"Icy Caverns - Within the mountains, where dire wolves retreat during the worst of winter's fury.",
			'Rugged Highlands - Offering a variety of terrain for the wolves to hunt and roam, far from most human settlements.',
			"Thick Brushlands - Where undergrowth provides cover and the wolves' coloring helps them blend into the shadows."
		],
		id: '5e2f200d-f532-4a3b-85a6-82547ee5de69'
	},
	{
		title: 'Djinn',
		stats: {
			hp: 15,
			armor: 0,
			str: 16,
			dex: 16,
			wil: 18,
			attack: 'elemental fists (d10+d10), detachment'
		},
		details: [
			'Magical, intelligent extraplanar beings. Can take any form, or none at all.',
			'Can conjure mundane objects, sounds, and visions from nothing.',
			'<strong>Whirlwind</strong>: Transforms into a building-sized vortex, destroying anything in its path (DEX save or take d12 STR damage).'
		],
		environments: [
			'Ancient Desert Oasis - A magical spring in the heart of the desert, hidden from the uninitiated by illusions.',
			'High Mountain Peaks - Where the air is thin, and the world seems close enough to touch the sky, a realm akin to their own.',
			'Enchanted Bazaars - Mystical marketplaces that appear at certain times, selling wares from across the planes.',
			'Ruins of Elemental Temples - Dedicated to the forces of air, where djinn may be found as guardians or seekers of knowledge.',
			'Stormwracked Islands - Places where natural storms rage eternally, drawing djinn to their raw power.',
			'City of Brass on the Elemental Plane of Fire - A legendary metropolis ruled by efreeti, but where djinn also scheme and trade.',
			'Floating Castles - Kept aloft by magic in remote locations, accessible only to those who can fly or know the right spells.',
			'Crossroads of the Winds - Mystical locations where powerful air currents from the material plane touch the Elemental Plane of Air.',
			'Ancient Libraries of Magic - Holding secrets of elemental magic and summoning, places of study for the magically inclined djinn.',
			'Caves of Echoing Whispers - Where voices carried by the wind tell secrets from distant lands and times, attracting djinn with tales of old.'
		],
		id: '89f05733-b41d-4c4f-9330-e965f95b1b99'
	},
	{
		title: 'Draugr',
		stats: {
			hp: 12,
			armor: 2,
			str: 15,
			dex: 9,
			wil: 13,
			attack: 'rusty broadsword (d8)'
		},
		details: [
			'Undead horror made of withered flesh. Rises from those killed in battle and left to rot.',
			'<strong>Critical Damage</strong>: target is instantly killed, only to rise later as a Thrall.'
		],
		environments: [
			'Swamp',
			'Ancient Battlefields - Where countless warriors fell and were left unburied, now a cursed land where Draugr rise.',
			'Desecrated Tombs - Once sacred resting places that have been violated, leading the restless dead to walk again.',
			'Forsaken Graveyards - Overgrown and forgotten, where the Draugr emerge at night to haunt the living.',
			'Ruined Fortresses - Their halls once echoed with the sounds of battle, now home only to the Draugr.',
			'Shipwrecks - Particularly those resulting from pirate attacks or battles at sea, now underwater crypts for Draugr sailors.',
			'Barrows and Burial Mounds - Ancient resting places for warriors, kings, and heroes, now disturbed by dark forces.',
			'Haunted Villages - Abandoned after devastating raids, where the slain villagers rise again as Draugr.',
			'Frozen Caverns - Hidden beneath the ice, where fallen explorers and adventurers are doomed to undeath.',
			'Cursed Forests - Where battles have spilled into the woods, leaving behind the dead who rise as Draugr.',
			'Viking Longhouses - Ruins of homes where the fallen were honored, but due to neglect, have become a haven for the undead.'
		],
		id: 'ca7a2d33-6709-4497-b383-f683e53eb3b7'
	},
	{
		title: 'Driver Ant',
		stats: { hp: 3, armor: 0, str: 4, dex: 12, wil: 1, attack: 'bite (d6)' },
		details: [
			'Giant, omnivorous black ants that build colonies deep underground.',
			'Consume any edible object in their path.',
			'Often act as a hive mind. Two or more Driver Ants together is a <em>detachment</em>.'
		],
		environments: ['Desert'],
		id: '50755789-28c8-40f7-8ad8-8ae61a049af4'
	},
	{
		title: 'Dryad',
		stats: {
			hp: 4,
			armor: 0,
			str: 8,
			dex: 12,
			wil: 14,
			attack: 'knotted arms (d6)'
		},
		details: [
			'Shy, protective tree spirits that manifest as beautiful, green-skinned humanoids.',
			'Unable to travel far from the tree they are bound to, and perish themselves if it is destroyed.',
			'<strong>Befuddle</strong>: Target becomes confused, gradually moving further and further away from the host tree. WIL save once per round to break free.'
		],
		environments: [],
		id: '27e1913b-52d5-4938-b026-634a59f70439'
	},
	{
		title: 'Dwarf',
		stats: { hp: 4, armor: 2, str: 14, dex: 6, wil: 13, attack: 'hammer (d8)' },
		details: [
			'Short, humanoids with skin as tough as stone. Dwell in mountains and underground.',
			'Highly resistant to poison and disease.'
		],
		environments: [],
		id: '7fb8bf56-59a0-49ca-b3ca-b0e2157d13ad'
	},
	{
		title: 'Earth Elemental',
		stats: {
			hp: 12,
			armor: 3,
			str: 16,
			dex: 6,
			wil: 5,
			attack: 'dirt clods (d10)'
		},
		details: [
			'Enormous humanoid-shaped beings made of earth and stone.',
			'Can move through the ground as if it were water.',
			'<strong>Mudcannon</strong>: A wall of earth is raised and then quickly lowered beneath a target, dealing d8 STR damage.'
		],
		environments: [],
		id: '2056892e-b24c-45f1-8b3c-4e5ffdb7a197'
	},
	{
		title: 'Elephant',
		stats: { hp: 9, armor: 0, str: 16, dex: 6, wil: 11, attack: 'tusks (d10)' },
		details: [
			'Large, intelligent animals that dwell in deserts and plains, usually in herds.',
			'Their tusks are worth 1000gp to the right buyer. There are some who consider taking the tusks as immoral.',
			'<strong>Charge</strong>: Nearby targets must make a DEX save or be trampled underfoot (d12 STR damage, ignoring armor).'
		],
		environments: [],
		id: 'f4fead13-23bd-45b2-9893-df5763722b1d'
	},
	{
		title: 'Elf',
		stats: {
			hp: 4,
			armor: 1,
			str: 8,
			dex: 12,
			wil: 14,
			attack: 'shortsword (d6) or longbow (d8)'
		},
		details: [
			'Long-lived, slender Fae with pointed ears preferring to live in harmony with nature.',
			'Highly resistant to charming and mind-controlling effects.',
			'Can cast the following spells at will: <em>Charm</em>, <em>Pacify</em>, <em>Telepathy</em>.'
		],
		environments: [],
		id: 'b680a71c-fed7-4f55-8fee-2e7f03702b9e'
	},
	{
		title: 'Estrie',
		stats: {
			hp: 10,
			armor: 0,
			str: 11,
			dex: 15,
			wil: 14,
			attack: 'draining hair (d8)'
		},
		details: [
			'Appears as a woman with long dark hair that extends all the way to her feet.',
			'Can transform into owls, but only at night. Binding their hair prevents transformation.',
			'Drinks the blood of small animals and sleeping travelers, who dream of feathers and the moon.',
			'If killed they resurrect at the next full moon. This can be stopped by burying the head under ground and filling the mouth with sand.',
			'<strong>Critical Damage</strong>: target falls unconscious for 1d6 hours.'
		],
		environments: [],
		id: 'bd5377bf-990a-4c32-ae30-37d9b9168e76'
	},
	{
		title: 'Ettin',
		stats: { hp: 10, armor: 0, str: 16, dex: 8, wil: 6, attack: 'club (d10)' },
		details: [
			'The two-headed kin of giants. Prefer caves and underground hovels.',
			'Cannot be surprised.'
		],
		environments: [],
		id: '184f76fa-6eee-44ef-a36a-ea643cd8b806'
	},
	{
		title: 'Eye of Terror',
		stats: { hp: 15, armor: 0, str: 9, dex: 8, wil: 16, attack: 'bite (d8)' },
		details: [
			'Floating spheres with large mouths, enormous eyes, and several small eyes set atop long stalks.',
			'They are highly intelligent, intensely greedy, and completely insane.',
			'Can cast the following spells at will: <em>Charm, Phobia, Telekinesis, Sleep, Shuffle, Vision</em>. Magic used against them requires a WIL save or fizzle out.'
		],
		environments: [],
		id: '0ddd7db1-769c-4a1c-965e-f1364017bbfc'
	},
	{
		title: 'False Dragon',
		stats: { hp: 4, armor: 0, str: 8, dex: 14, wil: 12, attack: 'sting (d6)' },
		details: [
			'Tiny winged draconic creatures with a sting-tipped tail and reddish scales. Commonly found in forests and caverns.',
			'Can communicate telepathically with nearby creatures.',
			'<strong>Critical Damage</strong>: Target is <em>deprived</em> for d6 days, unless purged of the sting’s toxins.'
		],
		environments: [],
		id: 'c4e7c836-9bd1-4a7a-813d-857f60d7f914'
	},
	{
		title: 'Fire Beetle',
		stats: { hp: 2, armor: 1, str: 4, dex: 14, wil: 3, attack: 'bite (d6)' },
		details: [
			'Dog-sized beetles that make their home deep underground.',
			'Their organs produce a brilliant slime that glows for several days, making them highly valuable to alchemists and artists alike.'
		],
		environments: ['Barrens', 'Desert'],
		id: '7cd387d0-680c-4c40-944c-2bbe0360af51'
	},
	{
		title: 'Fire Elemental',
		stats: { hp: 16, armor: 0, str: 8, dex: 12, wil: 14, attack: 'detachment' },
		details: [
			'Living columns of pure flame capable of changing shape at will.',
			'Mundane attacks are ineffective, but water deals d12 STR damage upon contact.',
			'<strong>Critical Damage</strong>: The target and all their non-metallic belongings are burnt to a crisp.'
		],
		environments: ['Desert'],
		id: '23cee08b-f377-4564-9787-267d5e1f419e'
	},
	{
		title: 'Fire Giant',
		stats: {
			hp: 13,
			armor: 3,
			str: 17,
			dex: 8,
			wil: 5,
			attack: 'greatsword (d10)'
		},
		details: [
			'Colossal, red-haired humanoids build their fortresses in or near volcanoes. They are immune to fire and heat.',
			'They forge heavy armor made of brass, bronze, or copper and are masters of their craft.'
		],
		environments: [],
		id: '4db3f543-9290-4f0e-9f98-7a479cec650a'
	},
	{
		title: 'Flesh Construct',
		stats: { hp: 9, armor: 1, str: 15, dex: 8, wil: 8, attack: 'fists (d10+d10), detachment' },
		details: [
			'Tall, bloated humanoid abominations made of stitched together flesh.',
			'If destroyed, the construct slowly reassembles using parts from nearby corpses.'
		],
		environments: [],
		id: 'f5f0d20f-de50-429c-b23f-89efb15e002e'
	},
	{
		title: 'Foxwoman',
		stats: {
			hp: 8,
			armor: 0,
			str: 12,
			dex: 14,
			wil: 15,
			attack: 'claws or hands (d8+d8)'
		},
		details: [
			'Can take the form of a fox, or a woman with a single, hidden fox leg.',
			'Immune to attacks from metal weapons.',
			'<strong>Critical damage</strong>: Victim is choked unconscious.'
		],
		environments: ['Clear Grass Lands'],
		id: '20db3805-56da-4d07-acae-33e54d6c8a7f'
	},
	{
		title: 'Frost Elf',
		stats: {
			hp: 14,
			armor: 1,
			str: 8,
			dex: 13,
			wil: 14,
			attack: 'icicle dagger (d6)'
		},
		details: [
			'Beautiful, amoral, and long-lived.',
			'Resistant to most forms of magic.',
			'Can cast the following spells at will: <em>Sleep</em>, <em>Teleport</em>, <em>Detect Magic</em>'
		],
		environments: [],
		id: 'a48da570-5124-4720-9bf8-d22eb037dd81'
	},
	{
		title: 'Frost Giant',
		stats: {
			hp: 14,
			armor: 2,
			str: 18,
			dex: 9,
			wil: 12,
			attack: 'great axe (d12) or longbow (d8)'
		},
		details: [
			'Colossal, pale-haired humanoids with blueish skin and pale hair. Unharmed by cold and ice.',
			'Excellent trackers, they are often accompanied by dire wolves.'
		],
		environments: [],
		id: '58b03625-3bb3-401e-a816-44939c35cdb6'
	},
	{
		title: 'Gargoyle',
		stats: {
			hp: 8,
			armor: 3,
			str: 14,
			dex: 4,
			wil: 12,
			attack: 'claws (d8+d8)'
		},
		details: [
			'Magical, slow-moving statues of monstrous winged creatures, typically employed as guards or watchdogs.',
			'Prowls at nights but fears the day, where the sun’s light freezes them in place.',
			'Immune to charms and magical sleep.'
		],
		environments: [],
		id: 'e2281fba-950e-449b-aace-61f32a1cdfb1'
	},
	{
		title: 'Gastropod Warrior',
		stats: {
			hp: 4,
			armor: 2,
			str: 14,
			dex: 6,
			wil: 3,
			attack: 'tentacles (d8+d8)'
		},
		details: [
			'Giant armored snails with heavy, club-like tentacles.',
			'Some have colorful shells that reflects magic back towards their origin.'
		],
		environments: [],
		id: '34c8faec-ad64-4ba7-b79f-a74589c083b8'
	},
	{
		title: 'Gelatinous Ooze',
		stats: {
			hp: 8,
			armor: 1,
			str: 15,
			dex: 6,
			wil: 3,
			attack: 'devouring touch (d8)'
		},
		details: [
			'Large shapeless masses of transparent jelly. Mindlessly hunts for food in dungeons and underground caverns.',
			'<strong>Critical Damage</strong>: The target is engulfed, losing d6 STR damage per round until they are consumed.'
		],
		environments: [],
		id: 'f48de5e5-44da-4870-887a-576b6ed5a49b'
	},
	{
		title: 'Ghost',
		stats: {
			hp: 8,
			armor: 0,
			str: 14,
			dex: 12,
			wil: 15,
			attack: 'life drain (d6)'
		},
		details: [
			'Incorporeal spirits of the restless dead, vulnerable only to magic and specific anointed rites.',
			'<strong>Critical Damage</strong>: Target must save WIL or is possessed, acting only on behalf of the ghost’s whims.'
		],
		environments: [],
		id: '856b5433-0933-426a-b6a7-7266d0fcde6c'
	},
	{
		title: 'Ghoul',
		stats: {
			hp: 6,
			armor: 0,
			str: 14,
			dex: 8,
			wil: 3,
			attack: 'elongated claws (d6+d6)'
		},
		details: [
			'Grey-skinned man-things wearing shredded clothes that crave only the flesh of the living.',
			'<strong>Critical Damage</strong>: Target is <em>deprived</em> from their necrotic wound, dying in d4 days unless treated by a priest or skilled healer. If the body is not burned it later rises as a Ghoul as well.'
		],
		environments: [],
		id: '4b8f8334-b26a-444c-9dce-454704a51fcd'
	},
	{
		title: 'Giant Aquatic Spider',
		stats: { hp: 4, armor: 0, str: 13, dex: 8, wil: 4, attack: 'bite (d8)' },
		details: [
			'Enormous spiders that dwell in large bodies of fresh water, building air-filled nests in the aquatic vegetation.',
			'Lurk just below the water’s surface, waiting to surprise their victims.',
			'<strong>Critical Damage</strong>: Paralyzes their target, dealing an additional d4 DEX damage.'
		],
		environments: ['LakeRiver'],
		id: '37dcb50b-50c9-4be7-b4eb-7db904f6f690'
	},
	{
		title: 'Giant Centipede',
		stats: { hp: 5, armor: 0, str: 6, dex: 13, wil: 3, attack: 'sting (d6)' },
		details: [
			'Dog-sized centipedes that live in damp, underground places. They prefer to avoid combat if possible.',
			'<strong>Critical Damage</strong>: Venom renders the target <em>deprived</em>. Save STR once per day to recover.'
		],
		environments: [],
		id: '372b1283-9d83-4d9e-8890-c3c9e0347eb0'
	},
	{
		title: 'Giant Crab',
		stats: {
			hp: 6,
			armor: 3,
			str: 14,
			dex: 3,
			wil: 8,
			attack: 'pincers (d8+d8)'
		},
		details: [
			'Huge crustaceans that live in coastal areas.',
			'Their pincers ignore non-metallic armor completely.'
		],
		environments: [],
		id: '1d0ced03-057b-426e-a60c-b3ff59808077'
	},
	{
		title: 'Giant Crocodile',
		stats: { hp: 15, armor: 3, str: 16, dex: 6, wil: 5, attack: 'detachment' },
		details: [
			'Rare, gigantic reptiles from ancient times.',
			'Natural hunters, they are attracted to the scent of blood in the water, even at great distances.'
		],
		environments: ['LakeRiver'],
		id: 'acf755e1-1fe3-4f04-8216-6302b917fa1f'
	},
	{
		title: 'Giant Mantis',
		stats: {
			hp: 10,
			armor: 1,
			str: 12,
			dex: 14,
			wil: 12,
			attack: 'forelegs (d8+d8)'
		},
		details: [
			'Cow-sized insects with sharp forelimbs and slicing mandibles. Dwell in tropical forests and jungles.',
			'Relies on its dark green coloration to camouflage in foliage and attack unsuspecting prey.',
			'<strong>Critical Damage</strong>: Target loses a body part. Roll 1d6. 1: Head, 2-4: Leg, 5-6: Arm.'
		],
		environments: ['Forest'],
		id: '28ede998-422f-4320-8033-b4032e9f824c'
	},
	{
		title: 'Giant Phase Spider',
		stats: { hp: 6, armor: 0, str: 13, dex: 14, wil: 12, attack: 'detachment' },
		details: [
			'8’ long, black spiders that have the ability to become intangible. Dwell in web-filled lairs and sometimes prey on humans.',
			'Can freely shift in and out of its current plane, phasing back to attack. It cannot phase out again until its next turn.',
			'<strong>Critical Damage</strong>: Without specialist healing the target begins to slowly phase out of reality over 1d6 days.'
		],
		environments: ['Forest'],
		id: '313cb744-5485-4c76-8048-7cd39a55dc8a'
	},
	{
		title: 'Giant Scorpion',
		stats: {
			hp: 8,
			armor: 1,
			str: 11,
			dex: 12,
			wil: 4,
			attack: 'claws (d10+d10)'
		},
		details: [
			'Horse-sized arachnides commonly found in dry terrain or caverns.',
			'<strong>Critical Damage</strong>: The stinger’s poison liquifies the target’s insides for an additional d8 STR damage. The STR loss is permanent.'
		],
		environments: ['Desert'],
		id: 'bfb74a91-0e0d-4f88-975f-91a43cf2f717'
	},
	{
		title: 'Giant Draco',
		stats: { hp: 6, armor: 0, str: 14, dex: 14, wil: 5, attack: 'bite (d10)' },
		details: [
			'Tall, carnivorous lizards that glide in the air on flaps of skin.',
			'Wait atop tall natural formations to swing down and surprise their unsuspecting targets.'
		],
		environments: [],
		id: 'cb91cdbb-42c8-4791-9aba-d8cf2e3d1fca'
	},
	{
		title: 'Gnoll',
		stats: { hp: 6, armor: 1, str: 12, dex: 14, wil: 8, attack: 'spear (d8)' },
		details: [
			'Ferocious humanoid hyenas spawned from arcame experiments long ago.',
			'Deadly warriors, they attack as a pack (as <em>detachment</em>) or on their own.'
		],
		environments: [],
		id: 'a75aee2d-5b09-4572-be46-8cf7fc9c2784'
	},
	{
		title: 'Gnome',
		stats: { hp: 4, armor: 0, str: 8, dex: 12, wil: 14, attack: 'bulky)' },
		details: [
			'Short humanoids with long noses and ears. Live underground or deep in forests.',
			'Intelligent tinkers, love messing with any kind of mechanism. Can easily be convinced by the promise of something novel or uncommon.',
			'Can understand and communicate with small mammals like moles or squirrels.'
		],
		environments: [],
		id: '3fe4fe79-d72c-4771-b98f-95df7f9a70a0'
	},
	{
		title: 'Goblin',
		stats: {
			hp: 4,
			armor: 0,
			str: 8,
			dex: 12,
			wil: 8,
			attack: 'dagger (d6) or sling (d6)'
		},
		details: [
			'Small, grotesque humanoids with skin in earthly tones of green, brown, and grey.',
			'Avoid combat, only attacking when advantageous, using hit-and-run tactics.',
			'Sometimes are found using dire wolves as mounts.'
		],
		environments: [],
		id: '4129dc48-bdee-44ab-8f53-4f9d79c888fb'
	},
	{
		title: 'Golem',
		stats: { hp: 12, armor: 3, str: 18, dex: 6, wil: 0, attack: 'detachment' },
		details: [
			'Immune to mental attacks. Damage from fire is <em>enhanced</em>.',
			'Scratching off the first letter on its forehead or performing in reverse the ritual that created it reduces the Golem to mud.'
		],
		environments: [],
		id: 'a8603db0-f806-42cb-abbe-861b7df1ffe8'
	},
	{
		title: 'Gorilla',
		stats: {
			hp: 3,
			armor: 0,
			str: 14,
			dex: 14,
			wil: 9,
			attack: 'fists (d8+d8)'
		},
		details: [
			'Large, muscular apes that dwell in hot jungles. Highly territorial.',
			'<strong>Critical Damage</strong>: Breaks a limb, dealing 1d4 extra STR damage.'
		],
		environments: [],
		id: '738f7bb0-4671-44e6-8c92-0ff568c60898'
	},
	{
		title: 'Great White Shark',
		stats: { hp: 8, armor: 0, str: 14, dex: 14, wil: 6, attack: 'bite (d12)' },
		details: [
			'Enormous grey sharks that dwell in warm water, sometimes attacking smaller boats.',
			'Can detect the smell of blood from many miles away.'
		],
		environments: [],
		id: '16c9050d-03d8-4925-9351-a078d9eb85e5'
	},
	{
		title: 'Green Dragon',
		stats: {
			hp: 12,
			armor: 2,
			str: 14,
			dex: 15,
			wil: 18,
			attack: 'detachment'
		},
		details: [
			'Forest-dwelling snake topped with tall green scales. Collect great hoards of treasure.',
			'Uses intelligence and cunning to manipulate the weak into its service.',
			'<strong>Chlorine Gas</strong>: Anyone nearby must make a DEX save to escape its reach, or lose 1d4 STR and becomes <em>deprived</em>.'
		],
		environments: [],
		id: '11c01197-e7ed-446d-a9fc-b8fe606a0b11'
	},
	{
		title: 'Green Slime',
		stats: {
			hp: 3,
			armor: 0,
			str: 18,
			dex: 6,
			wil: 3,
			attack: 'acidic touch (d10)'
		},
		details: [
			'Large blobs of green slime that stick to walls and ceiling. Immune to all damage except fire.',
			'<strong>Drop Attack</strong>: As trap. Deals 1d6 STR damage per round, corroding metal, wood, and flesh. Flesh consumed in this way becomes more Green Slime.'
		],
		environments: [],
		id: '23ef4233-e0a7-4b87-b7cd-69b977ccdcba'
	},
	{
		title: 'Griffon',
		stats: { hp: 7, armor: 0, str: 14, dex: 15, wil: 12, attack: 'detachment' },
		details: [
			'Ravenous hybrids, with the head and wings of an eagle and the lower body of a lion.',
			'Can be used as a mount if taken young and properly trained.',
			'Flies and attacks at astonishing speeds, diving in scoop up its prey.',
			'<strong>Critical Damage</strong>: Tears flesh and bone from its victim with its razor-sharp beak.'
		],
		environments: ['Clear Grass Lands'],
		id: 'a0e2e882-f6aa-4e65-9af0-74a477e29e1d'
	},
	{
		title: 'Grizzly Bear',
		stats: {
			hp: 6,
			armor: 0,
			str: 15,
			dex: 13,
			wil: 5,
			attack: 'claws (d8+d8)'
		},
		details: [
			'Reddish-brown bears commonly found in mountains, woodlands, and prairies.',
			'Prefer to eat fish and meat, and will attack the rare unfortunate who crosses their path.',
			'<strong>Critical Damage</strong>: Their bite does 1d6 additional STR damage. The target bleeds out very quickly.'
		],
		environments: [],
		id: 'fd0a9033-e4f0-48bd-b142-53d08861f04e'
	},
	{
		title: 'Halfling',
		stats: {
			hp: 4,
			armor: 0,
			str: 8,
			dex: 14,
			wil: 14,
			attack: 'shortsword (d6)'
		},
		details: [
			'Small humanoids with hairy feet live in small settlements. Highly resistant to mental attacks.'
		],
		environments: [],
		id: 'c663ff40-6a7f-49c2-9208-ad0202be4d30'
	},
	{
		title: 'Harpy',
		stats: {
			hp: 8,
			armor: 0,
			str: 7,
			dex: 12,
			wil: 14,
			attack: 'claws (d6+d6)'
		},
		details: [
			'Hideous monstrosities with the body of a giant eagle and a humanoid head.',
			'Its movements and flight are clumsy due to its unproportional size. Rely on charmed victims to do anything of note.',
			'<strong>Song</strong>: Anyone nearby must save WIL or be charmed by its voice, following the harpy and defending it from any threat.'
		],
		environments: [],
		id: 'c0849989-5307-40da-b27d-8c368a31d877'
	},
	{
		title: 'Hellhound',
		stats: { hp: 8, armor: 0, str: 12, dex: 15, wil: 9, attack: 'blast)' },
		details: [
			'Monstrous, intelligent dogs that dwell near volcanoes.',
			'Immune to fire and heat damage. Hot enough to melt iron by simply biting it.'
		],
		environments: [],
		id: '59566fd6-68a0-441c-9145-f59d0b7f9824'
	},
	{
		title: 'Hobgoblin',
		stats: { hp: 6, armor: 2, str: 14, dex: 8, wil: 11, attack: 'mace (d8)' },
		details: [
			'Large and burly relatives of goblins. Dwell in underground fortresses until called for war.',
			'Automatically succeed in Morale Saves if a commander is present.',
			'Trained to fight together. Damage dealt is <em>enhanced</em> if an ally is also engaged with the same enemy.'
		],
		environments: [],
		id: '8c1b68fb-953e-4981-a9eb-dcedef31631c'
	},
	{
		title: 'Hooded Men',
		stats: {
			hp: 12,
			armor: 0,
			str: 9,
			dex: 12,
			wil: 14,
			attack: 'leystaff (d8)'
		},
		details: [
			'The Watchers of the Wood; a cult that derive their power from leylines, rune stones, and the like.',
			'<strong>Critical Dmage</strong>: Leech a part of the victim’s soul (1d4 WIL damage).',
			'Carries two of the following Spellbooks: <em>Charm, Hypnotize, Push/Pull, Shield</em>.'
		],
		environments: ['Forest'],
		id: '50939ce4-023f-443e-9a28-902477c01a92'
	},
	{
		title: 'Hunting Dog',
		stats: { hp: 3, armor: 0, str: 4, dex: 12, wil: 8, attack: 'bite (d6)' },
		details: [
			'Domestic canines shaped into ferocious hunters, attacking only at their owner’s command.',
			'Track by scent, relentlessly following their target.'
		],
		environments: [],
		id: 'b0d39694-512a-4b97-bca9-cdafd9cc2231'
	},
	{
		title: 'Hydra',
		stats: { hp: 12, armor: 2, str: 13, dex: 7, wil: 12, attack: 'detachment' },
		details: [
			'Large reptilians with nine serpentine heads. Very difficult to throw off once their quarry is detected.',
			'On taking <strong>Critical Damage</strong>, the hydra loses one head. It then continues fighting until no heads remains.'
		],
		environments: [],
		id: 'c87b7487-be5d-4e79-8a00-78d061f3be99'
	},
	{
		title: 'Ifrit',
		stats: {
			hp: 10,
			armor: 0,
			str: 11,
			dex: 13,
			wil: 14,
			attack: 'flaming sword (d10)'
		},
		details: [
			'Clever, djinn-like beings from the elemental plane of fire. Appear as giant humanoids. Wet weapons deal <em>enhanced</em> damage against them.',
			'Often summoned through powerful magic in service to a wizard, but will subvert their orders whenever possible.',
			'<strong>Pillar of Flame</strong>: Creates a column of flame as tall as a building, dealing d12 STR damage to all it touches. It can only do this once per day.'
		],
		environments: [],
		id: 'fb5c9cf9-6b53-4d3f-8997-a43f7e5c3d1c'
	},
	{
		title: 'Invisible Stalker',
		stats: {
			hp: 8,
			armor: 0,
			str: 12,
			dex: 12,
			wil: 15,
			attack: 'fists (d4+d4)'
		},
		details: [
			'Intelligent beings shaped into reality by a powerful wizard. Completely invisible and silent.',
			'Attacks deal direct STR damage (subtracting Armor).'
		],
		environments: [],
		id: 'e06d66d3-3eed-4116-b1af-5e8f5d01853b'
	},
	{
		title: 'Iron Construct',
		stats: {
			hp: 8,
			armor: 3,
			str: 15,
			dex: 5,
			wil: 8,
			attack: 'giant sword (d12)'
		},
		details: [
			'Tall, humanoid statues forged of metal, fire, and magic. Wield massive swords of iron.',
			'Immune to mundane attacks, electricity, and cold. Fire damage is absorbed and heals any lost STR.'
		],
		environments: [],
		id: 'f974b776-97d3-4612-84b2-75da96444ef8'
	},
	{
		title: 'Killer Bees',
		stats: { hp: 6, armor: 0, str: 6, dex: 14, wil: 8, attack: 'detachment' },
		details: [
			'Oversized bees that build underground hives. Hyper aggressive, attack anything that comes near.',
			'Produce special honey that heals 1d6 STR. 3 uses.',
			'When the bees cause STR damage, the stingers are lodged into the target, dealing d4 damage each round until removed.'
		],
		environments: [],
		id: 'c437b2ec-e8ce-4794-93a2-ba0f2d4e81b6'
	},
	{
		title: 'Kobold',
		stats: { hp: 3, armor: 0, str: 8, dex: 13, wil: 4, attack: 'spear (d8)' },
		details: [
			'Hairless humanoids with canine-like features and scaly skin. Can see perfectly in the dark, but are harmed by direct sunlight.',
			'Use traps and ambush to defeat opponents. Often act in service of a more powerful creatures.'
		],
		environments: [],
		id: '9f4697aa-be3c-4d09-8f36-a44bd1eb803a'
	},
	{
		title: 'Kraken',
		stats: { hp: 16, armor: 0, str: 15, dex: 13, wil: 8, attack: 'blast)' },
		details: [
			'Titanic, eight-armed saltwater monstrosities that build enormous “castles” deep below the ocean.',
			'Terrorize ships and coastal cities alike in their obsessive search for building materials.'
		],
		environments: [],
		id: '6a85d40d-155f-4a8a-b03d-3bca61bcf57c'
	},
	{
		title: 'Lamia',
		stats: {
			hp: 6,
			armor: 0,
			str: 11,
			dex: 12,
			wil: 16,
			attack: 'toothy bite (d8)'
		},
		details: [
			'Centaur-like creatures that prey on the life force of others, seducing their victims through heightened charm and intelligence. Their upper bodies are typically humanoid, the lower half any number of animal hybrids.',
			'Inherently magical. Can create illusions, charm, and disguise themselves at will.',
			'<strong>Critical Damage</strong>: The target takes d6 WIL damage as their spirit is slowly sapped away. They then become enthralled to the Lamia, obeying its every command while in its presence.'
		],
		environments: ['Desert'],
		id: 'e2ff22e8-08f7-475f-98d4-24a1b97b7433'
	},
	{
		title: 'Lich',
		stats: {
			hp: 14,
			armor: 1,
			str: 8,
			dex: 8,
			wil: 18,
			attack: 'soul dagger (d8)'
		},
		details: [
			'Powerful sorcerers that paid the ultimate price for immortality: their own life. Now, their thirst for power knows no bounds.',
			'Maintains unlife by binding themselves to an earthly artifact, which is typically protected by at least d6 other undead servants.',
			'Carries up to six of the following spellbooks: <em>Animate Object</em>, <em>Arcane Eye</em>, <em>Deafen</em>, <em>Disassemble</em>, <em>Elemental Wall</em>, <em>Frenzy</em>, <em>Gate</em>, <em>Hover</em>, <em>Hatred</em>, <em>Identify Owner</em>, <em>Knock</em>, <em>Pacify</em>, <em>Raise Dead</em>, <em>Raise Spirit</em>, <em>Shield</em>, <em>Sleep</em>, <em>Smoke Form</em>, <em>Telekinesis</em>, <em>Telepathy</em>, <em>Teleport</em>, <em>Vision</em>, <em>Wizard Mark</em>.'
		],
		environments: [],
		id: '758af441-2670-4edb-ab68-74f31face94c'
	},
	{
		title: 'Lion',
		stats: {
			hp: 5,
			armor: 0,
			str: 12,
			dex: 12,
			wil: 11,
			attack: 'claws (d6+d6)'
		},
		details: [
			'Carnivorous hunters that live in the savannah or other similarly dry lands.',
			'Can follow the scent of blood over great distances.',
			'<strong>Critical Damage</strong>: Delivers a killing bite to the throat (d6 STR damage).'
		],
		environments: [],
		id: '4dfac407-fe02-403f-9212-8e60b2d744ec'
	},
	{
		title: 'Manticore',
		stats: {
			hp: 6,
			armor: 0,
			str: 15,
			dex: 14,
			wil: 12,
			attack: 'claws (d6+d6) or tail spike (d6)'
		},
		details: [
			'Spiteful monstrosities that wear a humanoid face, a lion’s body, wings of a bat, and a scorpion’s tail. Dwell in mountainous regions, abandoned castles, and forgotten dungeons.',
			'Tail spikes act like darts, regrowing after a few days. A single spike is worth 150gp to a collector.',
			'<strong>Critical Damage</strong>: Target is <em>deprived</em> until they get a good night’s sleep. Until then they act boorish, selfish, and cruel (or more so, if that already is their nature).'
		],
		environments: ['Barrens'],
		id: '20ee5401-4ec3-4dca-9fd4-cf48c121320b'
	},
	{
		title: 'Medusa',
		stats: {
			hp: 10,
			armor: 0,
			str: 8,
			dex: 12,
			wil: 16,
			attack: 'snake bite (d8)'
		},
		details: [
			'Magical creatures that resemble humanoid women, but have snakes in place of hair. Proud and territorial.',
			'<strong>Gaze</strong>: Those who look into the eyes of the Medusa are quickly turned to stone (its reflection is harmless). Attacks against it are almost normally <em>impaired</em>.',
			'If severed, a Medusa’s head maintains its powers for a full day.'
		],
		environments: [],
		id: '6c441730-d75e-48ec-990a-dad6d78f7d9d'
	},
	{
		title: 'Mimic',
		stats: { hp: 9, armor: 2, str: 13, dex: 6, wil: 12, attack: 'bite (d8)' },
		details: [
			'Malicious shapeshifters that take on the form of inanimate objects commonly found in dungeons.',
			'Remain motionless (typically in the form of a chest or door), surprising anyone that comes near.',
			'The mimic’s saliva is extremely sticky and difficult to remove. Alchemists will pay up to 150gp for even the smallest vial.'
		],
		environments: [],
		id: '28549b86-f526-4e6a-a9dd-0d3842af6c0d'
	},
	{
		title: 'Mind Lasher',
		stats: { hp: 12, armor: 0, str: 8, dex: 12, wil: 18, attack: 'blast)' },
		details: [
			'Humanoid creatures with purple skin and an squid-like heads. Dwell deep underground or in spacefaring vessels. Feed on the brains of other humanoids, absorbing their memories and life essence. Highly intelligent, but evil beyond belief.',
			'<strong>Mind Blast</strong>: Nearby targets must save WIL or lose 1d4 WIL and become paralyzed.',
			'<strong>Critical Damage</strong>: A tentacle rips the victim’s brain out of their skull.'
		],
		environments: [],
		id: '4d2e6338-39d5-407e-9a04-b742715e97c9'
	},
	{
		title: 'Minotaur',
		stats: {
			hp: 12,
			armor: 1,
			str: 16,
			dex: 12,
			wil: 8,
			attack: 'two-handed axe (d10) or charge (d12)'
		},
		details: [
			'A large humanoid (typically male) with the head of a bull. Dwell in mazes or dungeons.',
			'Extraordinary trackers with an excellent sense of smell and navigation skills.'
		],
		environments: [],
		id: 'd800041c-b02d-4f46-86ef-14e2e9b237e2'
	},
	{
		title: 'Mummy',
		stats: {
			hp: 6,
			armor: 0,
			str: 12,
			dex: 8,
			wil: 6,
			attack: 'necrotic touch (d10)'
		},
		details: [
			'Undead humanoids wrapped in funerary cloth. Found in pyramids, ruins, temples, and tombs.',
			'<strong>Critical Damage</strong>: Target is infected with mummy rot, and is unable to recover STR until they are cured by a specialist healer. The target is also <em>deprived</em>.'
		],
		environments: [],
		id: '4e38c068-c51b-4123-b96d-53903e80ec23'
	},
	{
		title: 'Naga',
		stats: { hp: 6, armor: 1, str: 14, dex: 12, wil: 14, attack: 'bite (d10)' },
		details: [
			'Humanoids with the lower body, tail, and neck snakes. Dwell in hot jungles and temples lost to time.',
			'Use cunning and hypnosis to capture other creatures to be enslaved by their cruel masters.',
			'<strong>Gaze</strong>: A target facing the Naga is hypnotized, falling under its will. Its victims cannot be compelled to violence.'
		],
		environments: [],
		id: 'f46e1107-b38e-4779-bae0-2a74de371341'
	},
	{
		title: 'Night Hag',
		stats: {
			hp: 8,
			armor: 0,
			str: 9,
			dex: 11,
			wil: 16,
			attack: 'talons (d8+d8)'
		},
		details: [
			'Hideous old women that dwell in dead forests, swamps, and bogs.',
			'Carries three of the following spellbooks: <em>Arcane Eye</em>, <em>Disguise</em>, <em>Fog Cloud</em>, <em>Identify Owner</em>, <em>Smoke Form</em>.'
		],
		environments: [],
		id: '5d12adcd-ea96-4cf8-91f0-8b6e23aa99ab'
	},
	{
		title: 'Nightmare',
		stats: {
			hp: 8,
			armor: 0,
			str: 15,
			dex: 12,
			wil: 8,
			attack: 'flaming hooves (d8+d8)'
		},
		details: [
			'Intelligent, demonic horses with eyes like burning coals, smoldering nostrils, and flaming hooves.',
			'Melee attacks against the Nightmare are <em>impaired</em> due to the thick clouds of smoke it produces.'
		],
		environments: [],
		id: '6a7f3856-6671-4972-8113-00ab332abf33'
	},
	{
		title: 'Ogre',
		stats: { hp: 6, armor: 1, str: 16, dex: 8, wil: 6, attack: 'club (d10)' },
		details: [
			'Massive, gluttonous brutes of ill-spirit and low intelligence.',
			'Easily impressed by shiny materials, keeping sacks of gold and treasure in its lairs.'
		],
		environments: ['Barrens'],
		id: '08378d47-f689-4a10-b657-21a922c4ee0d'
	},
	{
		title: 'Owlbear',
		stats: {
			hp: 9,
			armor: 0,
			str: 16,
			dex: 12,
			wil: 5,
			attack: 'beak (d10) or claws (d8+d8)'
		},
		details: [
			'Bear-like carnivores with the face of an owl. Found in dense forests. Rumored spawns of a magical mishap.',
			'<strong>Critical Damage</strong>: A piece of armor is pierced and destroyed.'
		],
		environments: [],
		id: 'ad0917a8-bcd3-4a40-b833-5ceb554c5727'
	},
	{
		title: 'Panther',
		stats: {
			hp: 4,
			armor: 0,
			str: 11,
			dex: 14,
			wil: 8,
			attack: 'claws (d6+d6)'
		},
		details: [
			'Dark-furred cats that live in forests and plains. Hunt animals of almost any size, pouncing on unsuspecting targets from on high.',
			'<strong>Critical Damage</strong>: Delivers a killing bite to the target’s throat, dealing an extra d4 STR damage.'
		],
		environments: [],
		id: '1d1b6bdb-88b8-40c6-9f8a-e7915454f624'
	},
	{
		title: 'Phoenix',
		stats: {
			hp: 4,
			armor: 0,
			str: 15,
			dex: 13,
			wil: 12,
			attack: 'talons (d10+d10)'
		},
		details: [
			'Intelligent, hawk-like spirits of pure flame, found in isolated deserts and high mountains.',
			'If killed, the phoenix explodes in a burst of flames. Is reborn 1d3 days later from the ashes.',
			'Its feathers are highly-sought after for their healing properties.'
		],
		environments: [],
		id: '8774c078-efb3-4cee-a4df-28ae429256f2'
	},
	{
		title: 'Pixie',
		stats: { hp: 3, armor: 0, str: 3, dex: 15, wil: 13, attack: '' },
		details: [
			'Tiny humanoids with insectoid wings. Naturally invisible.',
			'Can cast <em>Sleep</em> and <em>Masquerade</em> at will.'
		],
		environments: [],
		id: 'd0077331-9004-44fc-8c37-3b20f6991774'
	},
	{
		title: 'Pseudodragon',
		stats: { hp: 4, armor: 0, str: 6, dex: 14, wil: 13, attack: 'bite (d6)' },
		details: [
			'Winged, cat-sized reptiles capable of flight, speech, and high intelligence. Commonly found acting as familiars and spies.',
			'Love treats, rubs, and good stories.'
		],
		environments: [],
		id: '2b9d3d82-e3c0-4017-af15-b8e43cc5dba6'
	},
	{
		title: 'Purple Worm',
		stats: { hp: 18, armor: 1, str: 18, dex: 8, wil: 6, attack: 'detachment' },
		details: [
			'Gargantuan worms that lair in enormous burrows deep underground, only coming to the surface to eat. Found in high deserts and hot tundra.',
			'<strong>Critical Damage</strong>: The target is devoured, taking d8 STR damage from the acid in the worm’s stomach.'
		],
		environments: [],
		id: 'f24f1293-0624-45c8-afb1-45f5896fce72'
	},
	{
		title: 'Red Cap',
		stats: {
			hp: 6,
			armor: 0,
			str: 6,
			dex: 12,
			wil: 8,
			attack: 'dual sickles (d6+d6)'
		},
		details: [
			'Borne from blood left to rot in the land of Fairy. Their hats are a deep red from the blood they bathe in.',
			'Ignore those with little to live for, as there is no pleasure in their murder.',
			'<strong>Critical Damage</strong>: Target is eviscerated, the spray of their blood restoring STR loss suffered by the Red Cap.'
		],
		environments: [],
		id: '60337d5c-ae5d-43f3-b754-e838da092028'
	},
	{
		title: 'Red Dragon',
		stats: {
			hp: 18,
			armor: 3,
			str: 18,
			dex: 12,
			wil: 16,
			attack: 'detachment'
		},
		details: [
			'Flaming titans of smoke and fire, boasting a greater wingspan than any of their brethren. Lair close to volcanos and lava flows.',
			'Immune to fire damage of any kind. Ice and water evaporate on contact.',
			'<strong>Fire Breath</strong>: Deals 8 STR damage to anyone nearby, destroying all mundane armor it touches in the process.'
		],
		environments: [],
		id: 'aade45c5-e921-4b81-b661-850cfb38b482'
	},
	{
		title: 'Reptilian',
		stats: {
			hp: 5,
			armor: 1,
			str: 14,
			dex: 12,
			wil: 5,
			attack: 'bone spear (d8)'
		},
		details: [
			'Amphibian humanoids that live in large tribes near swamps and jungles.',
			'Craft their armor and weapons from the bones of their prey. They will eat anything, including humanoids.'
		],
		environments: [],
		id: '10a173f1-9e14-4c8b-a65f-668456852f98'
	},
	{
		title: 'Roc',
		stats: {
			hp: 15,
			armor: 0,
			str: 16,
			dex: 14,
			wil: 12,
			attack: 'detachment'
		},
		details: [
			'Gargantuan birds of prey that roost in high plateau and distant mountain peaks. Powerful hunters, they will defend a clutch of eggs to the death.',
			'<strong>Grab</strong>: Their powerful talons can scoop up entire groups of people (targets must all make a DEX save to escape). Victims are carried back to the nest to be eaten alive.',
			'<strong>Critical Damage</strong>: Target is pierced through their middle, dying instantly.'
		],
		environments: ['Barrens'],
		id: '78f8ba45-d0ce-4253-b027-5f51e21f9e09'
	},
	{
		title: 'Root Goblin',
		stats: { hp: 4, armor: 0, str: 8, dex: 14, wil: 8, attack: 'spear (d6)' },
		details: [
			'Avoid combat unless they have the advantage (such as greater numbers).',
			'Guard their stolen goods to the death.',
			'Root Golbins prize Spellbooks and are always willing to trade.'
		],
		environments: [],
		id: 'eaa28b99-b130-4d86-8245-e9d61278a370'
	},
	{
		title: 'Root Witch',
		stats: {
			hp: 8,
			armor: 0,
			str: 9,
			dex: 16,
			wil: 14,
			attack: 'tuber-fingers (d6)'
		},
		details: [
			'Excellent tunneler that hides underground near water. Wiggles tiny fronds into the air as lures.',
			'Above-ground, appears vaguely humanoid with the face of a rotted tree stump.',
			'Will exchange rare minerals for a “fresh corpse” of any kind.'
		],
		environments: ['Swamp'],
		id: 'b1b0c0d5-d8e2-49e3-af4c-d026bfe9ae47'
	},
	{
		title: 'Rust Monster',
		stats: { hp: 5, armor: 0, str: 16, dex: 13, wil: 5, attack: 'bite (d6)' },
		details: [
			'Armadillo-like creatures with club-like tails and long antennae. Feed on iron and rusted metal.',
			'Any mundane metals its antennae touch instantly become rust. Can smell metal from a long distance away.',
			'<strong>Critical Damage</strong>: Metal armor rusts into useless weight.'
		],
		environments: [],
		id: 'e7b315b1-00d2-4d08-b0a9-fa30f4571b6b'
	},
	{
		title: 'Sabre-Toothed Cat',
		stats: {
			hp: 8,
			armor: 0,
			str: 15,
			dex: 14,
			wil: 3,
			attack: 'claws (d8+d8)'
		},
		details: [
			'Huge, primeval cats with enormous fangs. Extremely rare, generally found in regions untouched by civilization.',
			'<strong>Critical Damage</strong>: Punctures the flesh of its victim (d6 STR damage), resulting in extreme blood loss.'
		],
		environments: [],
		id: '31a716f8-980c-47d0-a18c-fd48a94f64dd'
	},
	{
		title: 'Satyr',
		stats: { hp: 6, armor: 0, str: 11, dex: 14, wil: 16, attack: 'horns (d6)' },
		details: [
			'Mythical humanoids with legs and horns of a goat that love to dance and drink. Found in deep forests. Immune to mind-altering magic.',
			'<strong>Pipes</strong>: Anyone in earshot of their music must save WIL or fall asleep.'
		],
		environments: [],
		id: 'de515504-5326-4810-8bfc-45ca2d589ab8'
	},
	{
		title: 'Sea Hag',
		stats: {
			hp: 6,
			armor: 0,
			str: 11,
			dex: 15,
			wil: 14,
			attack: 'long claws (d6+d6)'
		},
		details: [
			'Ghostly, green-skinned hags that dwell in seaweed forests and warm shallow waters.',
			'Immune to magic from spellbooks.',
			'<strong>Hideous Gaze</strong>: A target is overcome with fear (HP drops to 0). WIL save each round to break the spell.'
		],
		environments: ['LakeRiver', 'Swamp'],
		id: '0c080e38-f2b7-4fe4-b92c-8c3fae2dcc50'
	},
	{
		title: 'Shadow',
		stats: {
			hp: 14,
			armor: 0,
			str: 1,
			dex: 18,
			wil: 14,
			attack: 'ignores armor)'
		},
		details: [
			'Incorporeal monsters that look like animated shadows. Unharmed by mundane attacks, sleep or mind control.',
			'<strong>Critical Damage</strong>: Target loses d4 STR. If reduced to 0 STR they become a shadow as well.'
		],
		environments: [],
		id: '30e799cc-c0f7-4ec6-aace-f9dca1f30d7a'
	},
	{
		title: 'Shambling Mound',
		stats: { hp: 9, armor: 0, str: 15, dex: 6, wil: 8, attack: 'detachment' },
		details: [
			'Tall humanoids made of slimy vegetation. Dwell in dark swamps and damp undergrounds.',
			'<strong>Critical Damage</strong>: Target is swallowed whole and dragged away.'
		],
		environments: ['Swamp'],
		id: 'c1b9396a-8ed0-49fb-8e02-88027216299d'
	},
	{
		title: 'Skeleton',
		stats: {
			hp: 5,
			armor: 1,
			str: 8,
			dex: 13,
			wil: 0,
			attack: 'rusty sword (d6) or bow (d6)'
		},
		details: [
			'Frequently found serving a master or necromancer, often in groups of 3 or more.',
			'Found wearing whatever was on them at the time of their death.',
			'If a skeleton is killed and its bones are not scattered, it reforms.'
		],
		environments: [],
		id: 'f350835c-6e05-4b3c-92c0-2d2809290a05'
	},
	{
		title: 'Sphinx',
		stats: { hp: 18, armor: 0, str: 12, dex: 13, wil: 18, attack: '' },
		details: [
			'Mythical beasts with the upper body and head of a human, the wings of an eagle, and the body of a lion. Immune to magic of any kind.',
			'Enjoy riddles, and will pose at least one to anyone they meet. Failure to answer correctly is usually met with death. They know almost everything worth knowing.',
			'<strong>Roar</strong>: Anyone in earshot must save WIL or flee in fear.'
		],
		environments: [],
		id: '82af0be5-f89c-478f-97e6-96de7a1dd104'
	},
	{
		title: 'Storm Giant',
		stats: {
			hp: 18,
			armor: 2,
			str: 18,
			dex: 16,
			wil: 18,
			attack: 'detachment'
		},
		details: [
			'Building-sized humanoids with bronze-hued skin and light-colored hair. Live on the highest mountain peaks and rockiest coastlines.',
			'Unharmed by lightning, can summon storm clouds at their will. Can fly with the wind as a their chariot.',
			'<strong>Thunderclap</strong>: Deals 4 STR damage against a single target. Targets wearing metal armor take double damage.'
		],
		environments: [],
		id: '63b5e85a-1b8e-4af1-8370-848158b7109d'
	},
	{
		title: 'Tiger',
		stats: {
			hp: 6,
			armor: 0,
			str: 14,
			dex: 14,
			wil: 6,
			attack: 'claws (d8+d8)'
		},
		details: [
			'Striped, solitary felines found in temperate regions.',
			'Use camouflage and stealth to surprise their prey. Drag away their victims for later consumption.',
			'<strong>Critical Damage</strong>: Bites through flesh an bone alike (d6 STR damage).'
		],
		environments: [],
		id: '05221a84-62e0-4014-bb62-121f716609de'
	},
	{
		title: 'Titan',
		stats: {
			hp: 18,
			armor: 3,
			str: 16,
			dex: 15,
			wil: 18,
			attack: 'detachment'
		},
		details: [
			'Mythical, humanoid giants of radiant beauty and powerfully athletic bodies. Beneficent of character, but prone to megalomania.',
			'Natives of other planes of existence, but sometimes have strongholds in the mortal world.',
			'Can levitate, shapeshift, and sculpt elements at will.'
		],
		environments: [],
		id: '737258e9-1072-4da2-ab6a-62c1e8e156ce'
	},
	{
		title: 'Treant',
		stats: { hp: 10, armor: 3, str: 15, dex: 3, wil: 12, attack: 'blast)' },
		details: [
			'A sentient, bipedal tree with a vaguely humanoid face on its trunk. Found in the deepest part of the wood.',
			'Speaks slowly and ponderously, with a deep voice. Timeless, living for thousands of years.'
		],
		environments: [],
		id: 'b30dceea-d12d-4c10-9c62-98d4b65e4495'
	},
	{
		title: 'Triton',
		stats: {
			hp: 6,
			armor: 0,
			str: 12,
			dex: 15,
			wil: 12,
			attack: 'trident (d8)'
		},
		details: [
			'Aquatic humanoids with silvery skin, blue-green hair, and scaled legs ending in fins. Dwell in warmer waters close to land.',
			'Lair in beautiful castles sculpted from sea rock and coral. Command vast schools of fish for both protection and food.'
		],
		environments: [],
		id: 'f22618a1-f07d-44bc-929d-8d9ae174c78d'
	},
	{
		title: 'Tyrannosaurus',
		stats: { hp: 15, armor: 1, str: 18, dex: 12, wil: 8, attack: 'detachment' },
		details: [
			'Massive, two-legged, predatory reptiles with huge jaws.',
			'Ferocious hunters, attacking the most threatening foe first.'
		],
		environments: [],
		id: '35299604-dcc1-49a5-b649-96a818b69d52'
	},
	{
		title: 'Unicorn',
		stats: {
			hp: 6,
			armor: 0,
			str: 14,
			dex: 12,
			wil: 14,
			attack: 'ignores armor)'
		},
		details: [
			'Magical horses with a single long horn on its forehead. Timid, but proud and wilful, are seen as divine beings.',
			'Its hairs are worth small fortunes due to their powerful healing properties.'
		],
		environments: [],
		id: '4f1ae9be-0dd1-4c77-a70e-063ffa93c21e'
	},
	{
		title: 'Vampire',
		stats: {
			hp: 12,
			armor: 1,
			str: 14,
			dex: 12,
			wil: 16,
			attack: 'bite (d10)'
		},
		details: [
			'Charming, undead creatures that drink the blood of mortals. Act at night and sleep in a coffin during the day. Can change its form to the one of a bat.',
			'<strong>Regeneration</strong>: A damaged vampire regains 6 HP when it bites a target that has blood. If killed, it becomes a cloud of gas and retreats to its coffin, reforming at the next nightfall. Can only be killed if exposed to sunlight or if the coffin is destroyed.',
			'<strong>Critical Damage</strong>: The vampire drains the target’s essence, dealing d12 damage to WIL. If the target reaches 0 WIL this way, it dies and is raised as a thrall of the vampire'
		],
		environments: [],
		id: '8bbdf256-816a-4e81-bcd9-02ff21a86512'
	},
	{
		title: 'Vampire Bat',
		stats: { hp: 3, armor: 0, str: 6, dex: 14, wil: 3, attack: 'bite (d8)' },
		details: [
			'Large, nocturnal mammals that feed on live blood.',
			'Use echolocation to navigate. Fear loud noises.',
			'<strong>Critical Damage</strong>: Target is infected by disease and are <em>deprived</em> without specialist healing.'
		],
		environments: [],
		id: '31ec8282-cb49-409b-8e33-2e39ec48d5d4'
	},
	{
		title: 'Viper',
		stats: { hp: 3, armor: 0, str: 5, dex: 12, wil: 3, attack: 'bite (d6)' },
		details: [
			'Poisonous snakes often found in caves, pits, and other dark places. An antitoxin can be made from their poison sacs.',
			'Does not rely on vision, using heat and smell to track its victims.',
			'<strong>Critical Damage</strong>: Target is poisoned, dying in 1d12 hours without a cure.'
		],
		environments: [],
		id: 'f61dd658-2316-491d-841c-68417c08025b'
	},
	{
		title: 'Warp Panther',
		stats: { hp: 8, armor: 0, str: 13, dex: 16, wil: 12, attack: 'bite (d10)' },
		details: [
			'Grotesque panther-like predators with long razored tentacles growing out of their backs.',
			'Resistant to magical attacks. Caster must make a WIL save for the intended effect to succeed.',
			'Can teleport a short distance away at will. Hate Blink Dogs.'
		],
		environments: [],
		id: 'b7af7ca0-b469-47f7-88d0-acbc3b9d2a9c'
	},
	{
		title: 'Water Elemental',
		stats: { hp: 14, armor: 0, str: 15, dex: 16, wil: 4, attack: 'spray (d8)' },
		details: [
			'Rare spirits of lakes, rivers, and seas.',
			'Mundane attacks against the Water Elemental are <em>impaired</em>.',
			'<strong>Critical Damage</strong>: Target is enveloped by the water and drowns in three rounds.'
		],
		environments: ['LakeRiver', 'Swamp'],
		id: 'b967a2eb-7199-4124-8269-bf0ee8997f95'
	},
	{
		title: 'Werewolf',
		stats: {
			hp: 8,
			armor: 0,
			str: 15,
			dex: 14,
			wil: 6,
			attack: 'claws (d6+d6) or bite (d8)'
		},
		details: [
			'A ferocious lycanthrope that can transform into a wolf-shape at will.',
			'Mundane attacks are <em>impaired</em> against the werewolf, but weapons made of silver are <em>enhanced</em>.',
			'<strong>Critical Damage</strong>: Target becomes infected with lycanthropy, transforming into a werewolf by the next full moon.'
		],
		environments: [],
		id: 'f2f0ad90-a419-44cc-b579-a1e6980d2813'
	},
	{
		title: 'White Ape',
		stats: { hp: 6, armor: 0, str: 14, dex: 15, wil: 12, attack: 'blast)' },
		details: [
			'Nocturnal gorillas covered in snow-white hair.',
			'Defend their territory with threatening gestures followed by sudden violence.'
		],
		environments: [],
		id: '32f41405-4b3c-46cb-840b-efd282d4148d'
	},
	{
		title: 'White Dragon',
		stats: {
			hp: 16,
			armor: 1,
			str: 16,
			dex: 16,
			wil: 12,
			attack: 'detachment'
		},
		details: [
			'A massive winged creature of frost that lairs comfortably in only the coldest regions.',
			'Perpetually accompanied by a storm of ice and wind, the White Dragon is a manifestation of winter itself.',
			'<strong>Frost Breath</strong>: Nearby targets must make a DEX save or are frozen solid, their breath turned to icicles in their lungs.'
		],
		environments: [],
		id: '276b660f-3a63-49ff-af58-2c5a698db306'
	},
	{
		title: 'Wight',
		stats: {
			hp: 12,
			armor: 3,
			str: 16,
			dex: 8,
			wil: 12,
			attack: 'longsword (d10)'
		},
		details: [
			'Grotesque, fallen warriors, raised from death for ill purpose. Often bestrode an equally nightmarish steeds, leading lesser undead creatures into battle.',
			'<strong>Critical Damage</strong>: On a fail, any STR loss is permanent.'
		],
		environments: [],
		id: 'cea89a91-703c-4418-a77f-53d841280590'
	},
	{
		title: 'Wolf',
		stats: { hp: 6, armor: 0, str: 12, dex: 14, wil: 8, attack: 'bite (d8)' },
		details: [
			'Large canines that dwell primarily in forest or tundra.',
			'Can be trained with effort if captured at a young age.'
		],
		environments: [],
		id: 'e4c7015c-99e9-4057-a598-091af2a668a0'
	},
	{
		title: 'Troll',
		stats: { hp: 14, armor: 1, str: 14, dex: 12, wil: 4, attack: 'club (d10)' },
		details: [
			'Giant, warty humanoids of flesh and bark. Dwell underground or in deep forests, as well as the ruined homes of their former victims. Carnivorous.',
			'When taking <strong>Critical Damage</strong> a Troll will continue fighting, despite loss of flesh and limb. Only when their STR is 0 are they truly killed. Unless their heads are bathed in acid, fire, or powerful magic they will fully regenerate within 1d4 days.'
		],
		environments: ['Clear Grass Lands'],
		id: '29abbd93-b745-4ed0-91d5-e21af739c269'
	},
	{
		title: 'Wood Troll',
		stats: { hp: 10, armor: 0, str: 15, dex: 12, wil: 7, attack: 'blast)' },
		details: [
			'Large humanoids with elongated arms made of bark or root. They live in forests, sharing a deep connection with the vegetation around them.',
			'If killed they will slowly regenerate unless their corpse is taken out of the forest, or burned with fire.',
			'<strong>Critical Damage</strong>: Moss and twigs begin growing out of target’s wounds.'
		],
		environments: ['Forest'],
		id: '012e53ca-1d92-4d62-8d10-51af96ab6521'
	},
	{
		title: 'Wyvern',
		stats: {
			hp: 11,
			armor: 0,
			str: 15,
			dex: 14,
			wil: 13,
			attack: 'stinger (d10)'
		},
		details: [
			'Large, intelligent, winged reptiles. Dwell in any terrain, but favor dry cliffs.',
			'Shy away from other creatures, preferring to silently stalk their targets from afar.',
			'<strong>Critical Damage</strong>: The victim is impaled and held in place. The wyvern then bites their head off.'
		],
		environments: [],
		id: 'f0f201af-61bc-46d4-a89a-4114e7e2c108'
	},
	{
		title: 'Zombie',
		stats: {
			hp: 2,
			armor: 0,
			str: 12,
			dex: 6,
			wil: 3,
			attack: 'jagged nails (d6)'
		},
		details: [
			'Re-animated corpse brought back through necromantic ritual or fell influence. Immune to all mind-influencing effects.',
			'If not utterly destroyed (fire, complete dismemberment, etc.), the Zombie will rise again within a few minutes.',
			'<strong>Critical Damage</strong>: Target is infected and becomes <em>deprived</em>. Without the services of a specialist or healer, they will become a zombie in 1d4 days.'
		],
		environments: [],
		id: '0b3f35c6-8fa5-4f00-9eab-333a7088463b'
	}
];
