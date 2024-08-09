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
	environments?: string[];
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
			'Carries a holy symbol (Ward once per day).'
		],
		id: '65e10ead-0fcb-49ab-8d2a-e22fb1ac4868'
	},
	{
		title: 'Air Elemental',
		stats: { hp: 16, armor: 0, str: 11, dex: 15, wil: 8, attack: 'detachment' },
		details: [
			'Living vortexes of whirling air and gas. Lighter creatures are swept away by their mere presence.',
			'Whirlwind: All nearby targets that fail a STR save are blown away.'
		],
		id: '84b72f7f-12a2-433e-967c-27513289ae32'
	},
	{
		title: 'Aranea',
		stats: { hp: 6, armor: 0, str: 13, dex: 12, wil: 15, attack: 'bite (d8)' },
		details: [
			'Enormous spiders with greenish-black skin and large brains. Can shapeshift into human form at will.',
			'Conduct their magical research in dark, web-filled caverns. Carry the Charm and Command spellbooks at all times.',
			'Fire damage against Aranea is enhanced.'
		],
		id: 'dfb75fd6-8595-4d1d-8adc-9fb7cf06ce2b'
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
			'Outlaws who raid settlements, attack ships, or ambush travelers. Groups of four or more are a detachment.',
			'A detachment always travels with one leader wearing chainmail or similar (2 Armor) and a long sword (d10) or crossbow (d8).',
			'Loyal: When testing Morale, save using the leader’s WIL (13). If the leader dies, the others will flee.'
		],
		id: '8343a180-bfc5-4212-924c-d23e0760d653'
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
			'Unharmed by cold, heat, or the elements. Iron weapon damage is Enhanced.',
			'Wail: Anyone in earshot must makes a WIL save or be fall unconscious.'
		],
		id: '5576eba1-25ec-4a13-a944-a320ebba04b3'
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
			'Fighting a Basilisk without meeting its gaze is difficult (attacks facing it are impaired).',
			'Gaze: A target facing the Basilisk is slowly petrified, from the bottom up, completely frozen after three rounds. An antidote can be brewed from the Basilisk’s gizzards. The creature’s reflection is harmless.'
		],
		id: '4dc919b8-b70b-42e6-9a86-4584893b7d50'
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
			'Ignore the Morale rule and are never treated as part of a detachment.',
			'Rage: A Berserker’s first attack has both the enhanced and blast qualities.'
		],
		id: '9c5cb611-8657-4aec-943c-607c60d82bcd'
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
			'Critical Damage: A large chunk of flesh is bitten off (d6 STR damage).'
		],
		id: '7af491a4-5981-4ace-9ea2-6140bd33bcb7'
	},
	{
		title: 'Black Dragon',
		stats: {
			hp: 16,
			armor: 1,
			str: 13,
			dex: 18,
			wil: 14,
			attack: 'bite (d12), claws (d10+d10), detachment'
		},
		details: [
			'Amphibious dragons with glossy black scales and thick hides. Dwell in swamps or similarly dangerous and flooded environments.',
			'Cruel and prone to violence. Make use of the dark and their surprising agility to separate their victims and kill them one by one.'
		],
		id: '95cc48c3-4a0d-422b-9960-a60f924b1513'
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
			'Critical Damage: Targets wearing non-metallic armor lose 1 point of Armor, and any STR loss to unarmored targets is permanent.'
		],
		id: 'dc047873-9b35-46d1-b1a3-cbc87d06afb5'
	},
	{
		title: 'Blink Dog',
		stats: { hp: 5, armor: 0, str: 11, dex: 14, wil: 5, attack: 'bite (d6)' },
		details: [
			'Teleporting canines in service of a powerful master.',
			'Can phase out of reality at will. Melee attacks against them are impaired.'
		],
		id: '19070b7a-114e-4492-ba19-f8be978e49a5'
	},
	{
		title: 'Blood Elk',
		stats: { hp: 4, armor: 0, str: 12, dex: 13, wil: 5, attack: 'horns (d8)' },
		details: [
			'Born from violence resulting from a greedy or selfish act.',
			'Kills its victims for sustenance, but gains no succor. It is always hungry.',
			'Critical Damage: gores its victims by ripping out their entrails.'
		],
		id: 'dd9a200f-8225-46ce-b119-38c45a12c3f8'
	},
	{
		title: 'Blue Dragon',
		stats: {
			hp: 14,
			armor: 3,
			str: 14,
			dex: 16,
			wil: 15,
			attack: 'bite (d12), claws (d10+d10), detachment'
		},
		details: [
			'Enormous, centipede-like reptilian creatures that dwells in deserts and rocky drylands.',
			'Proud and vain, they often keep victims as slaves. The more prestigious the better.',
			'Thunderclap: Deals 4 STR damage against a single target. Targets wearing metal armor take double damage.'
		],
		id: 'ae75ce0b-184d-42d6-81a7-e39cd3518701'
	},
	{
		title: 'Boar',
		stats: { hp: 3, armor: 0, str: 12, dex: 9, wil: 6, attack: 'tusks (d6)' },
		details: [
			'Omnivorous wild boars that dwell primarily in forests.',
			'Not naturally aggressive, but dangerous if disturbed.',
			'Critical Damage: Gores its victims, who bleed out very quickly.'
		],
		id: '2dd98c2f-1a2b-4607-b822-f75e86a765a2'
	},
	{
		title: 'Boggart',
		stats: { hp: 3, armor: 0, str: 4, dex: 17, wil: 13, attack: '' },
		details: [
			'A wild, hairy trickster that prizes shiny trinkets above coin.',
			'Boggarts have true names that describe their true nature. Knowing these names gives a person control over them.',
			'Magic: The Boggart can bring objects to life, sow confusion, create magical disguises, use telekinesis, and teleport.'
		],
		id: 'cdd760a3-2008-47f1-9fc1-8b19268f7ce9'
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
		id: '45c03928-b5cd-4c62-8107-1ab8f6242801'
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
		id: 'fa09fd80-5d9b-4737-916a-5b8473e28d3e'
	},
	{
		title: 'Bugbear',
		stats: { hp: 8, armor: 1, str: 14, dex: 12, wil: 11, attack: 'club (d8)' },
		details: [
			'Large, goblin-like creatures covered in fur.',
			'Prefers stealth and trickery to gain an advantage.',
			'Often command parties of like creatures (typically goblins).'
		],
		id: '96908a29-fabe-482e-9ed3-162d90cfe44e'
	},
	{
		title: 'Burrowing Horror',
		stats: {
			hp: 6,
			armor: 1,
			str: 16,
			dex: 11,
			wil: 4,
			attack: 'bite (d10), acid squirt (d8, blast)'
		},
		details: [
			'Huge insectoids with multiple legs and shiny black eyes. Subsists from dirt, roots, and flesh.',
			'Burrows just beneath the surfaces to ambush unsuspecting creatures.',
			'Critical Damage: Target loses a body part. Roll 1d6. 1: Head, 2-4: Leg, 5-6: Arm.'
		],
		id: 'fe36fb56-29cd-4909-83ad-aabb438fa1e2'
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
		id: '1aef44a2-fc93-4de2-9265-9d635e3f5c13'
	},
	{
		title: 'Catoblepas',
		stats: { hp: 7, armor: 1, str: 16, dex: 9, wil: 13, attack: 'tail (d8)' },
		details: [
			'A chimeric monstrosity bearing traits of buffalo, lizard, and boar. Its enormous head is always pointing towards the ground.',
			'Paralyze: A single target is turned to stone. Moonlight reverses the effect.'
		],
		id: 'b3647101-8aeb-4a0d-9160-d4a739c9b06b'
	},
	{
		title: 'Cave Locust',
		stats: { hp: 2, armor: 0, str: 6, dex: 12, wil: 3, attack: 'bite (d6)' },
		details: [
			'Giant plant-eating crickets that dwell in caves. Immune to most types of poison.',
			'Their natural coloration allows them to blend in with the stone. They emit loud shrieks when threatened.'
		],
		id: 'cb921086-2177-4011-9c7a-340dfe2e7e79'
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
		id: 'ebfed526-efdd-4db2-b1db-13a7c7a08899'
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
			'Dragon’s Breath: The dragon’s head spits acid, lightning, or fire depending on its type. d8 STR damage.'
		],
		id: 'c874bbf1-c62a-478d-952f-dc40f23e9a6e'
	},
	{
		title: 'Cloud Giant',
		stats: {
			hp: 12,
			armor: 1,
			str: 16,
			dex: 12,
			wil: 14,
			attack: 'mace (d10), detachment'
		},
		details: [
			'Towering, white-skinned giants that live in castles high in the mountains.',
			'Missile attacks against them are impaired due to the powerful winds surrounding them.'
		],
		id: '68c40a6b-5823-4dd8-be7b-e7fe7b2a7a72'
	},
	{
		title: 'Cobblehounds',
		stats: { hp: 12, armor: 2, str: 14, dex: 1, wil: 8, attack: 'bite (d10)' },
		details: [
			'Immobile constructs typically used as guardians to great tombs or artifacts.',
			'Unaffected by mundane persuasion techniques, but love a good bone.'
		],
		id: '430d5be4-d516-4433-b4de-a319997f6bf0'
	},
	{
		title: 'Cockatrice',
		stats: { hp: 5, armor: 0, str: 8, dex: 14, wil: 4, attack: 'beak (d6)' },
		details: [
			'Small, agile creatures resembling chickens with reptilian features.',
			'Critical Damage: The target’s injured area is covered in stone, which spreads to the rest of their body within three rounds. The stone can be chipped off.'
		],
		id: '0d8f6fc6-c52a-4a80-83b3-d91c63b1be29'
	},
	{
		title: 'Couatl',
		stats: { hp: 9, armor: 0, str: 6, dex: 12, wil: 15, attack: 'bite (d6)' },
		details: [
			'Long, feathered serpents with colorful wings. Live in hot jungles, and are considered divine by some civilizations.',
			'Highly intelligent and magical, they are capable of speaking any language.',
			'Can shapechange into the form of a person or small animal.'
		],
		id: 'c76d345d-679a-4351-a789-ad65fe41db51'
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
			'Critical Damage: Target is pulled into the air where they asphyxiate within a few minutes.'
		],
		id: '9585e2fd-1c42-43f2-842b-95b4f449b8bc'
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
			'Non-magical attacks against it are impaired.',
			'Can teleport any target in eyesight to a random room nearby.'
		],
		id: 'fe4b6f35-ddaf-48d1-a31b-fde1c3077cf0'
	},
	{
		title: 'Cyclops',
		stats: { hp: 9, armor: 0, str: 18, dex: 8, wil: 6, attack: 'club (d10)' },
		details: [
			'Giant humanoids with a single large eye centered on the face. Dwell in caves and herd small animals.',
			'Slow-witted and easily fooled.'
		],
		id: '2b3100d5-51b6-47e4-a7a4-c442e77e1ced'
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
		id: '21ce55e7-efd1-429f-aba6-ad4b076b9396'
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
			'Charm: Target obey’s the swine’s every command until it is killed. WIL save once per round to break free.'
		],
		id: 'bd866254-c2c1-4ea6-806f-bb0889dcc700'
	},
	{
		title: 'Dire Wolf',
		stats: { hp: 8, armor: 0, str: 14, dex: 12, wil: 8, attack: 'bite (d10)' },
		details: [
			'Horse-sized, semi-intelligent wolves that roam the forests and mountains. Highly territorial.',
			'Can be trained as pets if captured young.'
		],
		id: '560d329f-42ff-42c2-9041-110504a79add'
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
			'Whirlwind: Transforms into a building-sized vortex, destroying anything in its path (DEX save or take d12 STR damage).'
		],
		id: '8e4d4567-a28e-4c22-be58-ae39802088b1'
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
			'Critical Damage: target is instantly killed, only to rise later as a Thrall.'
		],
		id: '6c4b3249-ce2d-4bb3-80ae-65dd8e229314'
	},
	{
		title: 'Driver Ant',
		stats: { hp: 3, armor: 0, str: 4, dex: 12, wil: 1, attack: 'bite (d6)' },
		details: [
			'Giant, omnivorous black ants that build colonies deep underground.',
			'Consume any edible object in their path.',
			'Often act as a hive mind. Two or more Driver Ants together is a detachment.'
		],
		id: 'e94081f7-2eca-4edc-8a4c-e928fb7e6106'
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
			'Befuddle: Target becomes confused, gradually moving further and further away from the host tree. WIL save once per round to break free.'
		],
		id: '9c97d37e-986d-417f-87ba-f69cbd0c80c9'
	},
	{
		title: 'Dwarf',
		stats: { hp: 4, armor: 2, str: 14, dex: 6, wil: 13, attack: 'hammer (d8)' },
		details: [
			'Short, humanoids with skin as tough as stone. Dwell in mountains and underground.',
			'Highly resistant to poison and disease.'
		],
		id: '3089fc84-0091-4b42-b2a7-f0388475efb2'
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
			'Mudcannon: A wall of earth is raised and then quickly lowered beneath a target, dealing d8 STR damage.'
		],
		id: 'c13a7d73-ccc7-470b-9f23-ba3228333e67'
	},
	{
		title: 'Elephant',
		stats: { hp: 9, armor: 0, str: 16, dex: 6, wil: 11, attack: 'tusks (d10)' },
		details: [
			'Large, intelligent animals that dwell in deserts and plains, usually in herds.',
			'Their tusks are worth 1000gp to the right buyer. There are some who consider taking the tusks as immoral.',
			'Charge: Nearby targets must make a DEX save or be trampled underfoot (d12 STR damage, ignoring armor).'
		],
		id: 'f83473a8-8de6-4ecd-8b9d-de39516eb094'
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
			'Can cast the following spells at will: Charm, Pacify, Telepathy.'
		],
		id: '90603d84-1360-4c18-895c-4fafaef40ccf'
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
			'Critical Damage: target falls unconscious for 1d6 hours.'
		],
		id: 'bae82655-2f05-44b9-b172-b2e14303c05e'
	},
	{
		title: 'Ettin',
		stats: { hp: 10, armor: 0, str: 16, dex: 8, wil: 6, attack: 'club (d10)' },
		details: [
			'The two-headed kin of giants. Prefer caves and underground hovels.',
			'Cannot be surprised.'
		],
		id: '9b6760ae-4f46-4432-990d-90ceb0a214e2'
	},
	{
		title: 'Eye of Terror',
		stats: { hp: 15, armor: 0, str: 9, dex: 8, wil: 16, attack: 'bite (d8)' },
		details: [
			'Floating spheres with large mouths, enormous eyes, and several small eyes set atop long stalks.',
			'They are highly intelligent, intensely greedy, and completely insane.',
			'Can cast the following spells at will: Charm, Phobia, Telekinesis, Sleep, Shuffle, Vision. Magic used against them requires a WIL save or fizzle out.'
		],
		id: '7b369080-8939-425d-aedd-bcf50a1c4d80'
	},
	{
		title: 'False Dragon',
		stats: { hp: 4, armor: 0, str: 8, dex: 14, wil: 12, attack: 'sting (d6)' },
		details: [
			'Tiny winged draconic creatures with a sting-tipped tail and reddish scales. Commonly found in forests and caverns.',
			'Can communicate telepathically with nearby creatures.',
			'Critical Damage: Target is deprived for d6 days, unless purged of the sting’s toxins.'
		],
		id: 'd97eedfb-87b9-4d40-92f4-b3dd74e4a296'
	},
	{
		title: 'Fire Beetle',
		stats: { hp: 2, armor: 1, str: 4, dex: 14, wil: 3, attack: 'bite (d6)' },
		details: [
			'Dog-sized beetles that make their home deep underground.',
			'Their organs produce a brilliant slime that glows for several days, making them highly valuable to alchemists and artists alike.'
		],
		id: 'b34a66ae-61dc-4abc-91c9-c837e4855bb0'
	},
	{
		title: 'Fire Elemental',
		stats: {
			hp: 16,
			armor: 0,
			str: 8,
			dex: 12,
			wil: 14,
			attack: 'flare (d10, blast), detachment'
		},
		details: [
			'Living columns of pure flame capable of changing shape at will.',
			'Mundane attacks are ineffective, but water deals d12 STR damage upon contact.',
			'Critical Damage: The target and all their non-metallic belongings are burnt to a crisp.'
		],
		id: 'c6e16e65-023d-4b28-8f84-9a9dc8292a7e'
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
		id: '034c17e5-f171-42d7-ab66-e8b2bfde68a6'
	},
	{
		title: 'Flesh Construct',
		stats: {
			hp: 9,
			armor: 1,
			str: 15,
			dex: 8,
			wil: 8,
			attack: 'fists (d10+d10), detachment'
		},
		details: [
			'Tall, bloated humanoid abominations made of stitched together flesh.',
			'If destroyed, the construct slowly reassembles using parts from nearby corpses.'
		],
		id: 'b5692a44-8246-410d-a24f-4ce9afbb816c'
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
			'Critical damage: Victim is choked unconscious.'
		],
		id: '8562faba-fd1e-45f9-9775-368c0a3d54d9'
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
			'Can cast the following spells at will: Sleep, Teleport, Detect Magic'
		],
		id: 'e5ad875e-90d4-4fad-abf3-ed4f9d499706'
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
		id: '617c4f55-7b6d-427d-821c-ac4aeac64407'
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
		id: 'ed46d624-c3e0-45fd-84bb-aabb090f3af5'
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
		id: '3a19b584-66b0-4b1b-81f5-203d4606c55b'
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
			'Critical Damage: The target is engulfed, losing d6 STR damage per round until they are consumed.'
		],
		id: 'feb18888-0755-4f90-967e-7fb5d881e9b5'
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
			'Critical Damage: Target must save WIL or is possessed, acting only on behalf of the ghost’s whims.'
		],
		id: '74790927-3bf2-4e05-93c2-c0df22a8af94'
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
			'Critical Damage: Target is deprived from their necrotic wound, dying in d4 days unless treated by a priest or skilled healer. If the body is not burned it later rises as a Ghoul as well.'
		],
		id: '256567d4-de46-4fe4-a8d4-53c6070b73f9'
	},
	{
		title: 'Giant Aquatic Spider',
		stats: { hp: 4, armor: 0, str: 13, dex: 8, wil: 4, attack: 'bite (d8)' },
		details: [
			'Enormous spiders that dwell in large bodies of fresh water, building air-filled nests in the aquatic vegetation.',
			'Lurk just below the water’s surface, waiting to surprise their victims.',
			'Critical Damage: Paralyzes their target, dealing an additional d4 DEX damage.'
		],
		id: 'be272ebf-4a54-4300-ae16-bb2b10ff161c'
	},
	{
		title: 'Giant Centipede',
		stats: { hp: 5, armor: 0, str: 6, dex: 13, wil: 3, attack: 'sting (d6)' },
		details: [
			'Dog-sized centipedes that live in damp, underground places. They prefer to avoid combat if possible.',
			'Critical Damage: Venom renders the target deprived. Save STR once per day to recover.'
		],
		id: '9527bb74-3b32-4c66-b9da-d238f612278c'
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
		id: '775ca0d6-754d-4da7-81a1-b5f4288c65fc'
	},
	{
		title: 'Giant Crocodile',
		stats: {
			hp: 15,
			armor: 3,
			str: 16,
			dex: 6,
			wil: 5,
			attack: 'bite (d12), detachment'
		},
		details: [
			'Rare, gigantic reptiles from ancient times.',
			'Natural hunters, they are attracted to the scent of blood in the water, even at great distances.'
		],
		id: 'bc9f65a1-142e-4462-bd50-caf5fc6ba78b'
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
			'Critical Damage: Target loses a body part. Roll 1d6. 1: Head, 2-4: Leg, 5-6: Arm.'
		],
		id: '871286d7-0db8-4e67-b7bb-d12efcdc4f9c'
	},
	{
		title: 'Giant Phase Spider',
		stats: {
			hp: 6,
			armor: 0,
			str: 13,
			dex: 14,
			wil: 12,
			attack: 'bite (d6), detachment'
		},
		details: [
			'8’ long, black spiders that have the ability to become intangible. Dwell in web-filled lairs and sometimes prey on humans.',
			'Can freely shift in and out of its current plane, phasing back to attack. It cannot phase out again until its next turn.',
			'Critical Damage: Without specialist healing the target begins to slowly phase out of reality over 1d6 days.'
		],
		id: '6ce0dbe4-4eef-44cd-96e6-7a53176f71cf'
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
			'Critical Damage: The stinger’s poison liquifies the target’s insides for an additional d8 STR damage. The STR loss is permanent.'
		],
		id: '3295a8cc-fc30-41d5-bdb3-9a600dfaefd2'
	},
	{
		title: 'Giant Draco',
		stats: { hp: 6, armor: 0, str: 14, dex: 14, wil: 5, attack: 'bite (d10)' },
		details: [
			'Tall, carnivorous lizards that glide in the air on flaps of skin.',
			'Wait atop tall natural formations to swing down and surprise their unsuspecting targets.'
		],
		id: '485442c0-7704-4464-8f15-7682817f9d0b'
	},
	{
		title: 'Gnoll',
		stats: { hp: 6, armor: 1, str: 12, dex: 14, wil: 8, attack: 'spear (d8)' },
		details: [
			'Ferocious humanoid hyenas spawned from arcame experiments long ago.',
			'Deadly warriors, they attack as a pack (as detachment) or on their own.'
		],
		id: '1bc3f924-f550-4e7b-9f23-3613bbb5f4ff'
	},
	{
		title: 'Gnome',
		stats: {
			hp: 4,
			armor: 0,
			str: 8,
			dex: 12,
			wil: 14,
			attack: 'crossbow (d8, bulky)'
		},
		details: [
			'Short humanoids with long noses and ears. Live underground or deep in forests.',
			'Intelligent tinkers, love messing with any kind of mechanism. Can easily be convinced by the promise of something novel or uncommon.',
			'Can understand and communicate with small mammals like moles or squirrels.'
		],
		id: 'ccd62be2-7b28-4ab5-b4f2-51fc9febd506'
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
		id: '3c4400d1-d8af-4b90-a074-81b76a1f9c38'
	},
	{
		title: 'Golem',
		stats: {
			hp: 12,
			armor: 3,
			str: 18,
			dex: 6,
			wil: 0,
			attack: 'stone fists (d10+d10), detachment'
		},
		details: [
			'Immune to mental attacks. Damage from fire is enhanced.',
			'Scratching off the first letter on its forehead or performing in reverse the ritual that created it reduces the Golem to mud.'
		],
		id: '4f7b120b-e348-4810-a99e-12b3402740d0'
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
			'Critical Damage: Breaks a limb, dealing 1d4 extra STR damage.'
		],
		id: 'b485f633-f791-449a-b45a-3e2abf6a6707'
	},
	{
		title: 'Great White Shark',
		stats: { hp: 8, armor: 0, str: 14, dex: 14, wil: 6, attack: 'bite (d12)' },
		details: [
			'Enormous grey sharks that dwell in warm water, sometimes attacking smaller boats.',
			'Can detect the smell of blood from many miles away.'
		],
		id: '2278c281-3b8f-4870-9dd8-b3ae060ae9a2'
	},
	{
		title: 'Green Dragon',
		stats: {
			hp: 12,
			armor: 2,
			str: 14,
			dex: 15,
			wil: 18,
			attack: 'bite (d12), detachment'
		},
		details: [
			'Forest-dwelling snake topped with tall green scales. Collect great hoards of treasure.',
			'Uses intelligence and cunning to manipulate the weak into its service.',
			'Chlorine Gas: Anyone nearby must make a DEX save to escape its reach, or lose 1d4 STR and becomes deprived.'
		],
		id: '37d0cad9-bb81-48a5-a319-e7d22bf6b6f7'
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
			'Drop Attack: As trap. Deals 1d6 STR damage per round, corroding metal, wood, and flesh. Flesh consumed in this way becomes more Green Slime.'
		],
		id: 'f45376cf-c1a1-41c6-bf2c-cd2176ee5300'
	},
	{
		title: 'Griffon',
		stats: {
			hp: 7,
			armor: 0,
			str: 14,
			dex: 15,
			wil: 12,
			attack: 'claws (d6+d6), detachment'
		},
		details: [
			'Ravenous hybrids, with the head and wings of an eagle and the lower body of a lion.',
			'Can be used as a mount if taken young and properly trained.',
			'Flies and attacks at astonishing speeds, diving in scoop up its prey.',
			'Critical Damage: Tears flesh and bone from its victim with its razor-sharp beak.'
		],
		id: '7f17a7f9-da05-4ea5-8c00-652c788283c8'
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
			'Critical Damage: Their bite does 1d6 additional STR damage. The target bleeds out very quickly.'
		],
		id: '0d124e6d-d269-46ca-b1eb-4d18cadf3b7b'
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
		id: '2a92fa6f-b666-4133-bc0a-bd92a784ff33'
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
			'Song: Anyone nearby must save WIL or be charmed by its voice, following the harpy and defending it from any threat.'
		],
		id: '9b7ce543-0230-4068-9152-1c8e4b80198f'
	},
	{
		title: 'Hellhound',
		stats: {
			hp: 8,
			armor: 0,
			str: 12,
			dex: 15,
			wil: 9,
			attack: 'bite (d8) or fire breath (d6, blast)'
		},
		details: [
			'Monstrous, intelligent dogs that dwell near volcanoes.',
			'Immune to fire and heat damage. Hot enough to melt iron by simply biting it.'
		],
		id: '94c22151-edbc-4eae-8573-2891e8f9f6f8'
	},
	{
		title: 'Hobgoblin',
		stats: { hp: 6, armor: 2, str: 14, dex: 8, wil: 11, attack: 'mace (d8)' },
		details: [
			'Large and burly relatives of goblins. Dwell in underground fortresses until called for war.',
			'Automatically succeed in Morale Saves if a commander is present.',
			'Trained to fight together. Damage dealt is enhanced if an ally is also engaged with the same enemy.'
		],
		id: '2269edbd-628c-4302-bd2b-c4aa944b272e'
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
			'Critical Dmage: Leech a part of the victim’s soul (1d4 WIL damage).',
			'Carries two of the following Spellbooks: Charm, Hypnotize, Push/Pull, Shield.'
		],
		id: '5a92883a-46b1-47f8-a7d4-6975ecba344c'
	},
	{
		title: 'Hunting Dog',
		stats: { hp: 3, armor: 0, str: 4, dex: 12, wil: 8, attack: 'bite (d6)' },
		details: [
			'Domestic canines shaped into ferocious hunters, attacking only at their owner’s command.',
			'Track by scent, relentlessly following their target.'
		],
		id: 'e0a72fe5-7555-4121-b0a4-0cbce4f76155'
	},
	{
		title: 'Hydra',
		stats: {
			hp: 12,
			armor: 2,
			str: 13,
			dex: 7,
			wil: 12,
			attack: 'bite (d12, blast), detachment'
		},
		details: [
			'Large reptilians with nine serpentine heads. Very difficult to throw off once their quarry is detected.',
			'On taking Critical Damage, the hydra loses one head. It then continues fighting until no heads remains.'
		],
		id: 'df5411b3-9ad5-42d7-b0c0-1ece75be9613'
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
			'Clever, djinn-like beings from the elemental plane of fire. Appear as giant humanoids. Wet weapons deal enhanced damage against them.',
			'Often summoned through powerful magic in service to a wizard, but will subvert their orders whenever possible.',
			'Pillar of Flame: Creates a column of flame as tall as a building, dealing d12 STR damage to all it touches. It can only do this once per day.'
		],
		id: '2164247e-488b-47c8-a142-75990ce8c3d9'
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
		id: 'bfc51b37-a1d3-40aa-aeaf-439f85ebd205'
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
		id: 'f4b15628-2adb-47f9-ae52-8cf9a75a543b'
	},
	{
		title: 'Killer Bees',
		stats: {
			hp: 6,
			armor: 0,
			str: 6,
			dex: 14,
			wil: 8,
			attack: 'sting (d6), detachment'
		},
		details: [
			'Oversized bees that build underground hives. Hyper aggressive, attack anything that comes near.',
			'Produce special honey that heals 1d6 STR. 3 uses.',
			'When the bees cause STR damage, the stingers are lodged into the target, dealing d4 damage each round until removed.'
		],
		id: '4b6cb383-f385-421b-a680-a11e3c333a0c'
	},
	{
		title: 'Kobold',
		stats: {
			hp: 3,
			armor: 0,
			str: 8,
			dex: 13,
			wil: 4,
			attack: 'bite (d6), spear (d8)'
		},
		details: [
			'Hairless humanoids with canine-like features and scaly skin. Can see perfectly in the dark, but are harmed by direct sunlight.',
			'Use traps and ambush to defeat opponents. Often act in service of a more powerful creatures.'
		],
		id: '54f8d729-a11a-4b2e-8556-f681456d51f7'
	},
	{
		title: 'Kraken',
		stats: {
			hp: 16,
			armor: 0,
			str: 15,
			dex: 13,
			wil: 8,
			attack: 'arms (d10, blast)'
		},
		details: [
			'Titanic, eight-armed saltwater monstrosities that build enormous “castles” deep below the ocean.',
			'Terrorize ships and coastal cities alike in their obsessive search for building materials.'
		],
		id: '3d638156-cc2c-451e-bacb-63beb8161c59'
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
			'Critical Damage: The target takes d6 WIL damage as their spirit is slowly sapped away. They then become enthralled to the Lamia, obeying its every command while in its presence.'
		],
		id: 'ae738e6c-c3ad-4215-8e1d-1ee4f1174372'
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
			'Carries up to six of the following spellbooks: Animate Object, Arcane Eye, Deafen, Disassemble, Elemental Wall, Frenzy, Gate, Hover, Hatred, Identify Owner, Knock, Pacify, Raise Dead, Raise Spirit, Shield, Sleep, Smoke Form, Telekinesis, Telepathy, Teleport, Vision, Wizard Mark.'
		],
		id: 'f282a231-047e-4114-9ec5-80121296121e'
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
			'Critical Damage: Delivers a killing bite to the throat (d6 STR damage).'
		],
		id: '1b2e8637-3c35-434b-97d7-5e7ab347390e'
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
			'Critical Damage: Target is deprived until they get a good night’s sleep. Until then they act boorish, selfish, and cruel (or more so, if that already is their nature).'
		],
		id: 'edc37c34-e1f3-45c3-b52d-01f09d8e5072'
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
			'Gaze: Those who look into the eyes of the Medusa are quickly turned to stone (its reflection is harmless). Attacks against it are almost normally impaired.',
			'If severed, a Medusa’s head maintains its powers for a full day.'
		],
		id: '37c0e018-b0fb-413a-b0ac-1aaf5c55ca85'
	},
	{
		title: 'Mimic',
		stats: { hp: 9, armor: 2, str: 13, dex: 6, wil: 12, attack: 'bite (d8)' },
		details: [
			'Malicious shapeshifters that take on the form of inanimate objects commonly found in dungeons.',
			'Remain motionless (typically in the form of a chest or door), surprising anyone that comes near.',
			'The mimic’s saliva is extremely sticky and difficult to remove. Alchemists will pay up to 150gp for even the smallest vial.'
		],
		id: 'c83fb966-e797-4eca-86eb-112b72074397'
	},
	{
		title: 'Mind Lasher',
		stats: {
			hp: 12,
			armor: 0,
			str: 8,
			dex: 12,
			wil: 18,
			attack: 'tentacles (d6, blast)'
		},
		details: [
			'Humanoid creatures with purple skin and an squid-like heads. Dwell deep underground or in spacefaring vessels. Feed on the brains of other humanoids, absorbing their memories and life essence. Highly intelligent, but evil beyond belief.',
			'Mind Blast: Nearby targets must save WIL or lose 1d4 WIL and become paralyzed.',
			'Critical Damage: A tentacle rips the victim’s brain out of their skull.'
		],
		id: '1e3c581b-987a-4c28-997d-b5a8be6858ce'
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
		id: 'c9e3c4cd-144f-491e-817d-304366549240'
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
			'Critical Damage: Target is infected with mummy rot, and is unable to recover STR until they are cured by a specialist healer. The target is also deprived.'
		],
		id: '067f81f6-9bb5-49f6-a6a4-38b758c83a9a'
	},
	{
		title: 'Naga',
		stats: {
			hp: 6,
			armor: 1,
			str: 14,
			dex: 12,
			wil: 14,
			attack: 'sword (d6), bite (d10)'
		},
		details: [
			'Humanoids with the lower body, tail, and neck snakes. Dwell in hot jungles and temples lost to time.',
			'Use cunning and hypnosis to capture other creatures to be enslaved by their cruel masters.',
			'Gaze: A target facing the Naga is hypnotized, falling under its will. Its victims cannot be compelled to violence.'
		],
		id: '9886e6b5-083a-49a4-8f13-6a59773fab42'
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
			'Carries three of the following spellbooks: Arcane Eye, Disguise, Fog Cloud, Identify Owner, Smoke Form.'
		],
		id: '0159c5e9-4b3b-4599-a366-8e6558f818b5'
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
			'Melee attacks against the Nightmare are impaired due to the thick clouds of smoke it produces.'
		],
		id: 'f4d09b44-6f10-4180-a778-3a3996bf1c73'
	},
	{
		title: 'Ogre',
		stats: { hp: 6, armor: 1, str: 16, dex: 8, wil: 6, attack: 'club (d10)' },
		details: [
			'Massive, gluttonous brutes of ill-spirit and low intelligence.',
			'Easily impressed by shiny materials, keeping sacks of gold and treasure in its lairs.'
		],
		id: '162c3e31-d0ab-40b9-b62f-462572f6c2d4'
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
			'Critical Damage: A piece of armor is pierced and destroyed.'
		],
		id: '8419ac72-9736-421b-8cae-31d463c500d9'
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
			'Critical Damage: Delivers a killing bite to the target’s throat, dealing an extra d4 STR damage.'
		],
		id: '4f61c35e-849b-407c-a758-1b203ecdc416'
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
		id: 'b1bee629-175f-4ca8-a4b9-13aeb4c5f7f4'
	},
	{
		title: 'Pixie',
		stats: { hp: 3, armor: 0, str: 3, dex: 15, wil: 13, attack: '' },
		details: [
			'Tiny humanoids with insectoid wings. Naturally invisible.',
			'Can cast Sleep and Masquerade at will.'
		],
		id: '77f00a21-3dfd-4694-8fa5-252905880fd7'
	},
	{
		title: 'Pseudodragon',
		stats: { hp: 4, armor: 0, str: 6, dex: 14, wil: 13, attack: 'bite (d6)' },
		details: [
			'Winged, cat-sized reptiles capable of flight, speech, and high intelligence. Commonly found acting as familiars and spies.',
			'Love treats, rubs, and good stories.'
		],
		id: 'e3021ae1-4b80-4958-baa3-b9364d8ffaa2'
	},
	{
		title: 'Purple Worm',
		stats: {
			hp: 18,
			armor: 1,
			str: 18,
			dex: 8,
			wil: 6,
			attack: 'bite (d12), detachment'
		},
		details: [
			'Gargantuan worms that lair in enormous burrows deep underground, only coming to the surface to eat. Found in high deserts and hot tundra.',
			'Critical Damage: The target is devoured, taking d8 STR damage from the acid in the worm’s stomach.'
		],
		id: 'aed5f21c-66bf-4adf-9e5d-d23bbba5dee9'
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
			'Critical Damage: Target is eviscerated, the spray of their blood restoring STR loss suffered by the Red Cap.'
		],
		id: '285e4a80-a249-4095-97e8-2dd262bc23ef'
	},
	{
		title: 'Red Dragon',
		stats: {
			hp: 18,
			armor: 3,
			str: 18,
			dex: 12,
			wil: 16,
			attack: 'bite (d12), detachment'
		},
		details: [
			'Flaming titans of smoke and fire, boasting a greater wingspan than any of their brethren. Lair close to volcanos and lava flows.',
			'Immune to fire damage of any kind. Ice and water evaporate on contact.',
			'Fire Breath: Deals 8 STR damage to anyone nearby, destroying all mundane armor it touches in the process.'
		],
		id: 'd9830265-9e84-47a1-bb35-e882deed6e67'
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
		id: '4411ebcb-357c-4e64-9429-c62c9b5d2d5b'
	},
	{
		title: 'Roc',
		stats: {
			hp: 15,
			armor: 0,
			str: 16,
			dex: 14,
			wil: 12,
			attack: 'beak (d12, blast), detachment'
		},
		details: [
			'Gargantuan birds of prey that roost in high plateau and distant mountain peaks. Powerful hunters, they will defend a clutch of eggs to the death.',
			'Grab: Their powerful talons can scoop up entire groups of people (targets must all make a DEX save to escape). Victims are carried back to the nest to be eaten alive.',
			'Critical Damage: Target is pierced through their middle, dying instantly.'
		],
		id: '71ab4ece-d394-4273-abbc-d0d9c2915258'
	},
	{
		title: 'Root Goblin',
		stats: { hp: 4, armor: 0, str: 8, dex: 14, wil: 8, attack: 'spear (d6)' },
		details: [
			'Avoid combat unless they have the advantage (such as greater numbers).',
			'Guard their stolen goods to the death.',
			'Root Golbins prize Spellbooks and are always willing to trade.'
		],
		id: '6da16e40-0917-43d5-ace4-752ed79896ed'
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
		id: 'bd6f14a7-4e1f-40a1-82ca-ff402b170624'
	},
	{
		title: 'Rust Monster',
		stats: { hp: 5, armor: 0, str: 16, dex: 13, wil: 5, attack: 'bite (d6)' },
		details: [
			'Armadillo-like creatures with club-like tails and long antennae. Feed on iron and rusted metal.',
			'Any mundane metals its antennae touch instantly become rust. Can smell metal from a long distance away.',
			'Critical Damage: Metal armor rusts into useless weight.'
		],
		id: 'da801381-bcfb-4bb1-ba68-7d77ff2cc069'
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
			'Critical Damage: Punctures the flesh of its victim (d6 STR damage), resulting in extreme blood loss.'
		],
		id: '33f7d588-e101-439f-ab72-74d582dbe0ce'
	},
	{
		title: 'Satyr',
		stats: { hp: 6, armor: 0, str: 11, dex: 14, wil: 16, attack: 'horns (d6)' },
		details: [
			'Mythical humanoids with legs and horns of a goat that love to dance and drink. Found in deep forests. Immune to mind-altering magic.',
			'Pipes: Anyone in earshot of their music must save WIL or fall asleep.'
		],
		id: 'd6fb147a-b752-426f-9eff-e23835371b94'
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
			'Hideous Gaze: A target is overcome with fear (HP drops to 0). WIL save each round to break the spell.'
		],
		id: '0acbb8b7-ddbc-4074-a860-6378c0f1bea4'
	},
	{
		title: 'Shadow',
		stats: {
			hp: 14,
			armor: 0,
			str: 1,
			dex: 18,
			wil: 14,
			attack: 'draining touch (d6, ignores armor)'
		},
		details: [
			'Incorporeal monsters that look like animated shadows. Unharmed by mundane attacks, sleep or mind control.',
			'Critical Damage: Target loses d4 STR. If reduced to 0 STR they become a shadow as well.'
		],
		id: '48057f0c-c5c1-4e53-b1d4-9847736ca173'
	},
	{
		title: 'Shambling Mound',
		stats: {
			hp: 9,
			armor: 0,
			str: 15,
			dex: 6,
			wil: 8,
			attack: 'tendrils (d8+d8), detachment'
		},
		details: [
			'Tall humanoids made of slimy vegetation. Dwell in dark swamps and damp undergrounds.',
			'Critical Damage: Target is swallowed whole and dragged away.'
		],
		id: '4776d423-5bb1-4121-bcd0-117ee3d105f4'
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
		id: '4d28ef58-c78a-4b8e-b60f-2bb869039a6a'
	},
	{
		title: 'Sphinx',
		stats: { hp: 18, armor: 0, str: 12, dex: 13, wil: 18, attack: '' },
		details: [
			'Mythical beasts with the upper body and head of a human, the wings of an eagle, and the body of a lion. Immune to magic of any kind.',
			'Enjoy riddles, and will pose at least one to anyone they meet. Failure to answer correctly is usually met with death. They know almost everything worth knowing.',
			'Roar: Anyone in earshot must save WIL or flee in fear.'
		],
		id: '6d4f10be-8b3b-4dcd-ad45-23765aa789a0'
	},
	{
		title: 'Storm Giant',
		stats: {
			hp: 18,
			armor: 2,
			str: 18,
			dex: 16,
			wil: 18,
			attack: 'greatsword (d12), detachment'
		},
		details: [
			'Building-sized humanoids with bronze-hued skin and light-colored hair. Live on the highest mountain peaks and rockiest coastlines.',
			'Unharmed by lightning, can summon storm clouds at their will. Can fly with the wind as a their chariot.',
			'Thunderclap: Deals 4 STR damage against a single target. Targets wearing metal armor take double damage.'
		],
		id: 'e3ab52bc-67d0-4ada-86d3-f03760b9b99d'
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
			'Critical Damage: Bites through flesh an bone alike (d6 STR damage).'
		],
		id: 'ee46e401-fc7f-4cfd-afa3-85e0d13f5adb'
	},
	{
		title: 'Titan',
		stats: {
			hp: 18,
			armor: 3,
			str: 16,
			dex: 15,
			wil: 18,
			attack: 'lightning sword (d12), detachment'
		},
		details: [
			'Mythical, humanoid giants of radiant beauty and powerfully athletic bodies. Beneficent of character, but prone to megalomania.',
			'Natives of other planes of existence, but sometimes have strongholds in the mortal world.',
			'Can levitate, shapeshift, and sculpt elements at will.'
		],
		id: '1eebc9c3-1f48-43f1-b3e9-6a055639a5b9'
	},
	{
		title: 'Treant',
		stats: {
			hp: 10,
			armor: 3,
			str: 15,
			dex: 3,
			wil: 12,
			attack: 'roots (d10+d10, blast)'
		},
		details: [
			'A sentient, bipedal tree with a vaguely humanoid face on its trunk. Found in the deepest part of the wood.',
			'Speaks slowly and ponderously, with a deep voice. Timeless, living for thousands of years.'
		],
		id: '96a58c7b-caa2-4800-8e7b-a6067a2fc44c'
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
		id: '68c01786-57ba-44a7-bcfe-e16303307471'
	},
	{
		title: 'Tyrannosaurus',
		stats: {
			hp: 15,
			armor: 1,
			str: 18,
			dex: 12,
			wil: 8,
			attack: 'bite (d12), detachment'
		},
		details: [
			'Massive, two-legged, predatory reptiles with huge jaws.',
			'Ferocious hunters, attacking the most threatening foe first.'
		],
		id: '703673ba-f602-4821-bb39-82c0071389a5'
	},
	{
		title: 'Unicorn',
		stats: {
			hp: 6,
			armor: 0,
			str: 14,
			dex: 12,
			wil: 14,
			attack: 'horn (d10, ignores armor)'
		},
		details: [
			'Magical horses with a single long horn on its forehead. Timid, but proud and wilful, are seen as divine beings.',
			'Its hairs are worth small fortunes due to their powerful healing properties.'
		],
		id: '8aec129a-e552-41db-9f70-b76d80a2928a'
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
			'Regeneration: A damaged vampire regains 6 HP when it bites a target that has blood. If killed, it becomes a cloud of gas and retreats to its coffin, reforming at the next nightfall. Can only be killed if exposed to sunlight or if the coffin is destroyed.',
			'Critical Damage: The vampire drains the target’s essence, dealing d12 damage to WIL. If the target reaches 0 WIL this way, it dies and is raised as a thrall of the vampire'
		],
		id: 'd0ae1295-d2f0-4cb7-8ca8-b4b56bfe4227'
	},
	{
		title: 'Vampire Bat',
		stats: { hp: 3, armor: 0, str: 6, dex: 14, wil: 3, attack: 'bite (d8)' },
		details: [
			'Large, nocturnal mammals that feed on live blood.',
			'Use echolocation to navigate. Fear loud noises.',
			'Critical Damage: Target is infected by disease and are deprived without specialist healing.'
		],
		id: 'ed9c223d-2b5a-49cb-bc34-86a774fd47ef'
	},
	{
		title: 'Viper',
		stats: { hp: 3, armor: 0, str: 5, dex: 12, wil: 3, attack: 'bite (d6)' },
		details: [
			'Poisonous snakes often found in caves, pits, and other dark places. An antitoxin can be made from their poison sacs.',
			'Does not rely on vision, using heat and smell to track its victims.',
			'Critical Damage: Target is poisoned, dying in 1d12 hours without a cure.'
		],
		id: '988930a0-b44e-47a1-b249-ad41d797ca3f'
	},
	{
		title: 'Warp Panther',
		stats: {
			hp: 8,
			armor: 0,
			str: 13,
			dex: 16,
			wil: 12,
			attack: 'tentacles (d8+d8, blast), bite (d10)'
		},
		details: [
			'Grotesque panther-like predators with long razored tentacles growing out of their backs.',
			'Resistant to magical attacks. Caster must make a WIL save for the intended effect to succeed.',
			'Can teleport a short distance away at will. Hate Blink Dogs.'
		],
		id: '003d6953-7d8a-45ce-987c-370107a0e86c'
	},
	{
		title: 'Water Elemental',
		stats: { hp: 14, armor: 0, str: 15, dex: 16, wil: 4, attack: 'spray (d8)' },
		details: [
			'Rare spirits of lakes, rivers, and seas.',
			'Mundane attacks against the Water Elemental are impaired.',
			'Critical Damage: Target is enveloped by the water and drowns in three rounds.'
		],
		id: 'c7b9af2e-5167-4547-8599-41400287face'
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
			'Mundane attacks are impaired against the werewolf, but weapons made of silver are enhanced.',
			'Critical Damage: Target becomes infected with lycanthropy, transforming into a werewolf by the next full moon.'
		],
		id: '4ac85f49-c396-4e64-aba1-d7d3c6c3d1e1'
	},
	{
		title: 'White Ape',
		stats: {
			hp: 6,
			armor: 0,
			str: 14,
			dex: 15,
			wil: 12,
			attack: 'claws (d6+d6), rocks (d6, blast)'
		},
		details: [
			'Nocturnal gorillas covered in snow-white hair.',
			'Defend their territory with threatening gestures followed by sudden violence.'
		],
		id: '155795c1-4c9e-4a54-9142-8c11a2c98851'
	},
	{
		title: 'White Dragon',
		stats: {
			hp: 16,
			armor: 1,
			str: 16,
			dex: 16,
			wil: 12,
			attack: 'bite (d12), detachment'
		},
		details: [
			'A massive winged creature of frost that lairs comfortably in only the coldest regions.',
			'Perpetually accompanied by a storm of ice and wind, the White Dragon is a manifestation of winter itself.',
			'Frost Breath: Nearby targets must make a DEX save or are frozen solid, their breath turned to icicles in their lungs.'
		],
		id: 'c1426327-b6dd-4a23-8b5b-c29c9bfd336f'
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
			'Critical Damage: On a fail, any STR loss is permanent.'
		],
		id: 'f9fcabfa-a604-4485-8e72-52a165f8a417'
	},
	{
		title: 'Wolf',
		stats: { hp: 6, armor: 0, str: 12, dex: 14, wil: 8, attack: 'bite (d8)' },
		details: [
			'Large canines that dwell primarily in forest or tundra.',
			'Can be trained with effort if captured at a young age.'
		],
		id: 'bc75e8c4-bdbb-446d-b622-7d98ba93fce8'
	},
	{
		title: 'Troll',
		stats: {
			hp: 14,
			armor: 1,
			str: 14,
			dex: 12,
			wil: 4,
			attack: 'claw (d8), club (d10)'
		},
		details: [
			'Giant, warty humanoids of flesh and bark. Dwell underground or in deep forests, as well as the ruined homes of their former victims. Carnivorous.',
			'When taking Critical Damage a Troll will continue fighting, despite loss of flesh and limb. Only when their STR is 0 are they truly killed. Unless their heads are bathed in acid, fire, or powerful magic they will fully regenerate within 1d4 days.'
		],
		id: '434c3d82-cf18-45f7-8e3b-97c858c06744'
	},
	{
		title: 'Wood Troll',
		stats: {
			hp: 10,
			armor: 0,
			str: 15,
			dex: 12,
			wil: 7,
			attack: 'claws and bite (d8+d8, blast)'
		},
		details: [
			'Large humanoids with elongated arms made of bark or root. They live in forests, sharing a deep connection with the vegetation around them.',
			'If killed they will slowly regenerate unless their corpse is taken out of the forest, or burned with fire.',
			'Critical Damage: Moss and twigs begin growing out of target’s wounds.'
		],
		id: 'bbbaff8c-68e5-4dba-9b23-d11c7443c084'
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
			'Critical Damage: The victim is impaled and held in place. The wyvern then bites their head off.'
		],
		id: '72a5f704-470b-45fb-8610-594727aeeb39'
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
			'Critical Damage: Target is infected and becomes deprived. Without the services of a specialist or healer, they will become a zombie in 1d4 days.'
		],
		id: '508248fc-38d9-4a68-ae6a-267a693e31ad'
	}
];
