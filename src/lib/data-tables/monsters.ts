export const MonstersList = [
	{
		title: 'Acolyte',
		stats: '4 HP, 1 Armor, 8 STR, 11 DEX, 14 WIL, ceremonial dagger (d6)',
		details: [
			'Holy servants bound to a particular deity. Typically travel in groups of four or more.',
			'Carries a holy symbol (<em>Ward</em> once per day).'
		]
	},
	{
		title: 'Air Elemental',
		stats: '16 HP, 11 STR, 15 DEX, 8 WIL, detachment',
		details: [
			'Living vortexes of whirling air and gas. Lighter creatures are swept away by their mere presence.',
			'<strong>Whirlwind</strong>: All nearby targets that fail a STR save are blown away.'
		]
	},
	{
		title: 'Aranea',
		stats: '6 HP, 13 STR, 12 DEX, 15 WIL, bite (d8)',
		details: [
			'Enormous spiders with greenish-black skin and large brains. Can shapeshift into human form at will.',
			'Conduct their magical research in dark, web-filled caverns. Carry the <em>Charm</em> and <em>Command</em> spellbooks at all times.',
			'Fire damage against Aranea is <em>enhanced</em>.'
		]
	},
	{
		title: 'Bandit',
		stats: '4 HP, 1 Armor, 12 STR, 12 DEX, 9 WIL, shortsword (d6) or short bow (d6)',
		details: [
			'Outlaws who raid settlements, attack ships, or ambush travelers. Groups of four or more are a <em>detachment</em>.',
			'A detachment always travels with one leader wearing chainmail or similar (2 Armor) and a long sword (d10) or crossbow (d8).',
			'<strong>Loyal</strong>: When testing Morale, save using the leader’s WIL (13). If the leader dies, the others will flee.'
		]
	},
	{
		title: 'Banshee',
		stats: '8 HP, 6 STR, 12 DEX, 15 WIL, ghostly touch (d8)',
		details: [
			'Incorporeal spirits that linger long after death to haunt the living.',
			'Unharmed by cold, heat, or the elements. Iron weapon damage is <em>Enhanced</em>.',
			'<strong>Wail</strong>: Anyone in earshot must makes a WIL save or be fall unconscious.'
		]
	},
	{
		title: 'Basilisk',
		stats: '10 HP, 1 Armor, 12 STR, 13 DEX, 13 WIL, bite (d10)',
		details: [
			'Long, serpentine lizards that nest deep below the earth or in brambles just underfoot.',
			'Fighting a <strong>Basilisk</strong> without meeting its gaze is difficult (attacks facing it are <em>impaired</em>).',
			'<strong>Gaze</strong>: A target facing the Basilisk is slowly petrified, from the bottom up, completely frozen after three rounds. An antidote can be brewed from the Basilisk’s gizzards. The creature’s reflection is harmless.'
		]
	},
	{
		title: 'Berserker',
		stats: '10 HP, 1 Armor, 14 STR, 13 DEX, 15 WIL, twin axes (d8+d8)',
		details: [
			'Ruthless warriors that derive their power from the skins they wear: bears, wolves, boars, etc.',
			'Ignore the <strong>Morale</strong> rule and are never treated as part of a <em>detachment</em>.',
			'<strong>Rage</strong>: A Berserker’s first attack has both the <em>enhanced</em> and <em>blast</em> qualities.'
		]
	},
	{
		title: 'Black Bear',
		stats: '6 HP, 14 STR, 12 DEX, 6 WIL, claws (d6+d6)',
		details: [
			'Waist-high bears that subsist mostly on berries and roots. Drawn to campsites in search of food.',
			'Aggressive if cornered or feel that their young are threatened.',
			'<strong>Critical Damage</strong>: A large chunk of flesh is bitten off (d6 STR damage).'
		]
	},
	{
		title: 'Black Dragon',
		stats: '16 HP, 1 Armor, 13 STR, 18 DEX, 14 WIL, bite (d12), claws (d10+d10), detachment',
		details: [
			'Amphibious dragons with glossy black scales and thick hides. Dwell in swamps or similarly dangerous and flooded environments.',
			'Cruel and prone to violence. Make use of the dark and their surprising agility to separate their victims and kill them one by one.'
		]
	},
	{
		title: 'Black Pudding',
		stats: '12 HP, 11 STR, 5 DEX, 3 WIL, devouring touch (d8)',
		details: [
			'Giant, brainless blobs of black jelly driven only by their insatiable hunger.',
			'Moves along walls and across ceilings. Squeeze through holes and cracks with ease.',
			'Immune to mundane attacks, save fire. Normal attacks splits the Black Pudding. creating two Puddings that share HP and STR.',
			'<strong>Critical Damage</strong>: Targets wearing non-metallic armor lose 1 point of Armor, and any STR loss to unarmored targets is <em>permanent</em>.'
		]
	},
	{
		title: 'Blink Dog',
		stats: '5 HP, 11 STR, 14 DEX, 5 WIL, bite (d6)',
		details: [
			'Teleporting canines in service of a powerful master.',
			'Can phase out of reality at will. Melee attacks against them are <em>impaired</em>.'
		]
	},
	{
		title: 'Blood Elk',
		stats: '4 HP, 12 STR, 13 DEX, 5 WIL, horns (d8)',
		details: [
			'Born from violence resulting from a greedy or selfish act.',
			'Kills its victims for sustenance, but gains no succor. It is always hungry.',
			'<strong>Critical Damage</strong>: gores its victims by ripping out their entrails.'
		]
	},
	{
		title: 'Blue Dragon',
		stats: '14 HP, 3 Armor, 14 STR, 16 DEX, 15 WIL, bite (d12), claws (d10+d10), detachment',
		details: [
			'Enormous, centipede-like reptilian creatures that dwells in deserts and rocky drylands.',
			'Proud and vain, they often keep victims as slaves. The more prestigious the better.',
			'<strong>Thunderclap</strong>: Deals 4 STR damage against a single target. Targets wearing metal armor take double damage.'
		]
	},
	{
		title: 'Boar',
		stats: '3 HP, 12 STR, 9 DEX, 6 WIL, tusks (d6)',
		details: [
			'Omnivorous wild boars that dwell primarily in forests.',
			'Not naturally aggressive, but dangerous if disturbed.',
			'<strong>Critical Damage</strong>: Gores its victims, who bleed out very quickly.'
		]
	},
	{
		title: 'Boggart',
		stats: '3 HP, 4 STR, 17 DEX, 13 WIL',
		details: [
			'A wild, hairy trickster that prizes shiny trinkets above coin.',
			'Boggarts have true names that describe their true nature. Knowing these names gives a person control over them.',
			'<strong>Magic</strong>: The Boggart can <em>bring objects to life</em>, <em>sow confusion</em>, <em>create magical disguises</em>, use <em>telekinesis</em>, and <em>teleport</em>.'
		]
	},
	{
		title: 'Bone Construct',
		stats: '8 HP, 3 Armor, 15 STR, 5 DEX, 3 WIL, sharpened arms (d8+d8), detachment',
		details: [
			'Gigantic, four-armed constructs made of bone and sorcery.',
			'Mindless guardians that stand ready to attack any creature other than their creator.'
		]
	},
	{
		title: 'Bronze Construct',
		stats: '3 HP, 3 Armor, 18 STR, 6 DEX, 0 WIL, fists (d10+d10), detachment',
		details: [
			'Towering humanoid constructs made of pure bronze. Resemble old men with long beards and hair, and emanate a strong heat.',
			'Immune to fire and heat.',
			'If punctured, spurts a burning hot liquid dealing d6 STR damage to anyone nearby.'
		]
	},
	{
		title: 'Bugbear',
		stats: '8 HP, 1 Armor, 14 STR, 12 DEX, 11 WIL, club (d8)',
		details: [
			'Large, goblin-like creatures covered in fur.',
			'Prefers stealth and trickery to gain an advantage.',
			'Often command parties of like creatures (typically goblins).'
		]
	},
	{
		title: 'Burrowing Horror',
		stats: '6 HP, 1 Armor, 16 STR, 11 DEX, 4 WIL, bite (d10), acid squirt (d8, blast)',
		details: [
			'Huge insectoids with multiple legs and shiny black eyes. Subsists from dirt, roots, and flesh.',
			'Burrows just beneath the surfaces to ambush unsuspecting creatures.',
			'<strong>Critical Damage</strong>: Target loses a body part. Roll 1d6. 1: Head, 2-4: Leg, 5-6: Arm.'
		]
	},
	{
		title: 'Camel',
		stats: '3 HP, 14 STR, 13 DEX, 4 WIL, bite or kick (d6)',
		details: [
			'Beasts of burden native to dry, arid lands.',
			'Can survive without water for weeks at a time.',
			'Moves through sand and broken ground without difficulty.'
		]
	},
	{
		title: 'Catoblepas',
		stats: '7 HP, 1 Armor, 16 STR, 9 DEX, 13 WIL, tail (d8)',
		details: [
			'A chimeric monstrosity bearing traits of buffalo, lizard, and boar. Its enormous head is always pointing towards the ground.',
			'<strong>Paralyze</strong>: A single target is turned to stone. Moonlight reverses the effect.'
		]
	},
	{
		title: 'Cave Locust',
		stats: '2 HP, 6 STR, 12 DEX, 3 WIL, bite (d6)',
		details: [
			'Giant plant-eating crickets that dwell in caves. Immune to most types of poison.',
			'Their natural coloration allows them to blend in with the stone. They emit loud shrieks when threatened.'
		]
	},
	{
		title: 'Centaur',
		stats: '6 HP, 1 Armor, 14 STR, 12 DEX, 14 WIL, spear (d8) or short bow (d6)',
		details: [
			'Creatures with the lower body and legs of a horse, but a humanoid upper body.',
			'Rarely found alone, preferring the company of their own.'
		]
	},
	{
		title: 'Chimera',
		stats: '10 HP, 14 STR, 11 DEX, 13 WIL, bite (d10)',
		details: [
			'A flying, sorcerous hybrid of lion, goat, and dragon (pick one).',
			'<strong>Dragon’s Breath</strong>: The dragon’s head spits acid, lightning, or fire depending on its type. d8 STR damage.'
		]
	},
	{
		title: 'Cloud Giant',
		stats: '12 HP, 1 Armor, 16 STR, 12 DEX, 14 WIL, mace (d10), detachment',
		details: [
			'Towering, white-skinned giants that live in castles high in the mountains.',
			'Missile attacks against them are <em>impaired</em> due to the powerful winds surrounding them.'
		]
	},
	{
		title: 'Cobblehounds',
		stats: '12 HP, 2 Armor, 14 STR, 1 DEX, 8 WIL, bite (d10)',
		details: [
			'Immobile constructs typically used as guardians to great tombs or artifacts.',
			'Unaffected by mundane persuasion techniques, but love a good bone.'
		]
	},
	{
		title: 'Cockatrice',
		stats: '5 HP, 8 STR, 14 DEX, 4 WIL, beak (d6)',
		details: [
			'Small, agile creatures resembling chickens with reptilian features.',
			'<strong>Critical Damage</strong>: The target’s injured area is covered in stone, which spreads to the rest of their body within three rounds. The stone can be chipped off.'
		]
	},
	{
		title: 'Couatl',
		stats: '9 HP, 6 STR, 12 DEX, 15 WIL, bite (d6)',
		details: [
			'Long, feathered serpents with colorful wings. Live in hot jungles, and are considered divine by some civilizations.',
			'Highly intelligent and magical, they are capable of speaking any language.',
			'Can shapechange into the form of a person or small animal.'
		]
	},
	{
		title: 'Creeping Vines',
		stats: '8 HP, 10 STR, 12 DEX, 2 WIL, vines (d4, blast)',
		details: [
			'Appears as an inert, typical vine. Attacks passing creatures to use their corpses as fertilizer.',
			'<strong>Critical Damage</strong>: Target is pulled into the air where they asphyxiate within a few minutes.'
		]
	},
	{
		title: 'Crypt Guardian',
		stats: '12 HP, 12 STR, 11 DEX, 14 WIL, ethereal claws (d8+d8)',
		details: [
			'An animated skeleton clothed in billowing robes. Its eye sockets are hypnotically red. Defends crypts &amp; tombs, but will not attack if left undisturbed.',
			'Non-magical attacks against it are <em>impaired</em>.',
			'Can teleport any target in eyesight to a random room nearby.'
		]
	},
	{
		title: 'Cyclops',
		stats: '9 HP, 18 STR, 8 DEX, 6 WIL, club (d10)',
		details: [
			'Giant humanoids with a single large eye centered on the face. Dwell in caves and herd small animals.',
			'Slow-witted and easily fooled.'
		]
	},
	{
		title: 'Deep One',
		stats: '6 HP, 14 STR, 16 DEX, 12 WIL, trident (d8)',
		details: [
			'Amphibious, fish-like humanoids that live in the deep sea. Highly resistant to magical effects.',
			'Occasionally surface to trade with coastal settlements. On land their movement is slowed by half.',
			'Can only reproduce with land-dwelling humanoids.'
		]
	},
	{
		title: 'Devil Swine',
		stats: '9 HP, 16 STR, 8 DEX, 13 WIL, gore (d6+d6)',
		details: [
			'Obese humanoids that transform into massive porcine monstrosities to feast on human flesh.',
			'Prefer to hunt in isolated settlements close forests and wetlands. Can only shapeshift at night.',
			'<strong>Charm</strong>: Target obey’s the swine’s every command until it is killed. WIL save once per round to break free.'
		]
	},
	{
		title: 'Dire Wolf',
		stats: '8 HP, 14 STR, 12 DEX, 8 WIL, bite (d10)',
		details: [
			'Horse-sized, semi-intelligent wolves that roam the forests and mountains. Highly territorial.',
			'Can be trained as pets if captured young.'
		]
	},
	{
		title: 'Djinn',
		stats: '15 HP, 16 STR, 16 DEX, 18 WIL, elemental fists (d10+d10), detachment',
		details: [
			'Magical, intelligent extraplanar beings. Can take any form, or none at all.',
			'Can conjure mundane objects, sounds, and visions from nothing.',
			'<strong>Whirlwind</strong>: Transforms into a building-sized vortex, destroying anything in its path (DEX save or take d12 STR damage).'
		]
	},
	{
		title: 'Draugr',
		stats: '12 HP, 2 Armor, 15 STR, 9 DEX, 13 WIL, rusty broadsword (d8)',
		details: [
			'Undead horror made of withered flesh. Rises from those killed in battle and left to rot.',
			'<strong>Critical Damage</strong>: target is instantly killed, only to rise later as a Thrall.'
		]
	},
	{
		title: 'Driver Ant',
		stats: '3 HP, 4 STR, 12 DEX, 1 WIL, bite (d6)',
		details: [
			'Giant, omnivorous black ants that build colonies deep underground.',
			'Consume any edible object in their path.',
			'Often act as a hive mind. Two or more Driver Ants together is a <em>detachment</em>.'
		]
	},
	{
		title: 'Dryad',
		stats: '4 HP, 8 STR, 12 DEX, 14 WIL, knotted arms (d6)',
		details: [
			'Shy, protective tree spirits that manifest as beautiful, green-skinned humanoids.',
			'Unable to travel far from the tree they are bound to, and perish themselves if it is destroyed.',
			'<strong>Befuddle</strong>: Target becomes confused, gradually moving further and further away from the host tree. WIL save once per round to break free.'
		]
	},
	{
		title: 'Dwarf',
		stats: '4 HP, 2 Armor, 14 STR, 6 DEX, 13 WIL, hammer (d8)',
		details: [
			'Short, humanoids with skin as tough as stone. Dwell in mountains and underground.',
			'Highly resistant to poison and disease.'
		]
	},
	{
		title: 'Earth Elemental',
		stats: '12 HP, 3 Armor, 16 STR, 6 DEX, 5 WIL, dirt clods (d10)',
		details: [
			'Enormous humanoid-shaped beings made of earth and stone.',
			'Can move through the ground as if it were water.',
			'<strong>Mudcannon</strong>: A wall of earth is raised and then quickly lowered beneath a target, dealing d8 STR damage.'
		]
	},
	{
		title: 'Elephant',
		stats: '9 HP, 16 STR, 6 DEX, 11 WIL, tusks (d10)',
		details: [
			'Large, intelligent animals that dwell in deserts and plains, usually in herds.',
			'Their tusks are worth 1000gp to the right buyer. There are some who consider taking the tusks as immoral.',
			'<strong>Charge</strong>: Nearby targets must make a DEX save or be trampled underfoot (d12 STR damage, ignoring armor).'
		]
	},
	{
		title: 'Elf',
		stats: '4 HP, 1 Armor, 8 STR, 12 DEX, 14 WIL, shortsword (d6) or longbow (d8)',
		details: [
			'Long-lived, slender Fae with pointed ears preferring to live in harmony with nature.',
			'Highly resistant to charming and mind-controlling effects.',
			'Can cast the following spells at will: <em>Charm</em>, <em>Pacify</em>, <em>Telepathy</em>.'
		]
	},
	{
		title: 'Estrie',
		stats: '10 HP, 11 STR, 15 DEX, 14 WIL, draining hair (d8)',
		details: [
			'Appears as a woman with long dark hair that extends all the way to her feet.',
			'Can transform into owls, but only at night. Binding their hair prevents transformation.',
			'Drinks the blood of small animals and sleeping travelers, who dream of feathers and the moon.',
			'If killed they resurrect at the next full moon. This can be stopped by burying the head under ground and filling the mouth with sand.',
			'<strong>Critical Damage</strong>: target falls unconscious for 1d6 hours.'
		]
	},
	{
		title: 'Ettin',
		stats: '10 HP, 16 STR, 8 DEX, 6 WIL, club (d10)',
		details: [
			'The two-headed kin of giants. Prefer caves and underground hovels.',
			'Cannot be surprised.'
		]
	},
	{
		title: 'Eye of Terror',
		stats: '15 HP, 9 STR, 8 DEX, 16 WIL, bite (d8)',
		details: [
			'Floating spheres with large mouths, enormous eyes, and several small eyes set atop long stalks.',
			'They are highly intelligent, intensely greedy, and completely insane.',
			'Can cast the following spells at will: <em>Charm, Phobia, Telekinesis, Sleep, Shuffle, Vision</em>. Magic used against them requires a WIL save or fizzle out.'
		]
	},
	{
		title: 'False Dragon',
		stats: '4 HP, 8 STR, 14 DEX, 12 WIL, sting (d6)',
		details: [
			'Tiny winged draconic creatures with a sting-tipped tail and reddish scales. Commonly found in forests and caverns.',
			'Can communicate telepathically with nearby creatures.',
			'<strong>Critical Damage</strong>: Target is <em>deprived</em> for d6 days, unless purged of the sting’s toxins.'
		]
	},
	{
		title: 'Fire Beetle',
		stats: '2 HP, 1 Armor, 4 STR, 14 DEX, 3 WIL, bite (d6)',
		details: [
			'Dog-sized beetles that make their home deep underground.',
			'Their organs produce a brilliant slime that glows for several days, making them highly valuable to alchemists and artists alike.'
		]
	},
	{
		title: 'Fire Elemental',
		stats: '16 HP, 8 STR, 12 DEX, 14 WIL, flare (d10, blast), detachment',
		details: [
			'Living columns of pure flame capable of changing shape at will.',
			'Mundane attacks are ineffective, but water deals d12 STR damage upon contact.',
			'<strong>Critical Damage</strong>: The target and all their non-metallic belongings are burnt to a crisp.'
		]
	},
	{
		title: 'Fire Giant',
		stats: '13 HP, 3 Armor, 17 STR, 8 DEX, 5 WIL, greatsword (d10)',
		details: [
			'Colossal, red-haired humanoids build their fortresses in or near volcanoes. They are immune to fire and heat.',
			'They forge heavy armor made of brass, bronze, or copper and are masters of their craft.'
		]
	},
	{
		title: 'Flesh Construct',
		stats: '9 HP, 1 Armor, 15 STR, 8 DEX, 8 WIL, fists (d10+d10), detachment',
		details: [
			'Tall, bloated humanoid abominations made of stitched together flesh.',
			'If destroyed, the construct slowly reassembles using parts from nearby corpses.'
		]
	},
	{
		title: 'Foxwoman',
		stats: '8 HP, 12 STR, 14 DEX, 15 WIL, claws or hands (d8+d8)',
		details: [
			'Can take the form of a fox, or a woman with a single, hidden fox leg.',
			'Immune to attacks from metal weapons.',
			'<strong>Critical damage</strong>: Victim is choked unconscious.'
		]
	},
	{
		title: 'Frost Elf',
		stats: '14 HP, 1 Armor, 8 STR, 13 DEX, 14 WIL, icicle dagger (d6)',
		details: [
			'Beautiful, amoral, and long-lived.',
			'Resistant to most forms of magic.',
			'Can cast the following spells at will: <em>Sleep</em>, <em>Teleport</em>, <em>Detect Magic</em>'
		]
	},
	{
		title: 'Frost Giant',
		stats: '14 HP, 2 Armor, 18 STR, 9 DEX, 12 WIL, great axe (d12) or longbow (d8)',
		details: [
			'Colossal, pale-haired humanoids with blueish skin and pale hair. Unharmed by cold and ice.',
			'Excellent trackers, they are often accompanied by dire wolves.'
		]
	},
	{
		title: 'Gargoyle',
		stats: '8 HP, 3 Armor, 14 STR, 4 DEX, 12 WIL, claws (d8+d8)',
		details: [
			'Magical, slow-moving statues of monstrous winged creatures, typically employed as guards or watchdogs.',
			'Prowls at nights but fears the day, where the sun’s light freezes them in place.',
			'Immune to charms and magical sleep.'
		]
	},
	{
		title: 'Gastropod Warrior',
		stats: '4 HP, 2 Armor, 14 STR, 6 DEX, 3 WIL, tentacles (d8+d8)',
		details: [
			'Giant armored snails with heavy, club-like tentacles.',
			'Some have colorful shells that reflects magic back towards their origin.'
		]
	},
	{
		title: 'Gelatinous Ooze',
		stats: '8 HP, 1 Armor, 15 STR, 6 DEX, 3 WIL, devouring touch (d8)',
		details: [
			'Large shapeless masses of transparent jelly. Mindlessly hunts for food in dungeons and underground caverns.',
			'<strong>Critical Damage</strong>: The target is engulfed, losing d6 STR damage per round until they are consumed.'
		]
	},
	{
		title: 'Ghost',
		stats: '8 HP, 14 STR, 12 DEX, 15 WIL, life drain (d6)',
		details: [
			'Incorporeal spirits of the restless dead, vulnerable only to magic and specific anointed rites.',
			'<strong>Critical Damage</strong>: Target must save WIL or is possessed, acting only on behalf of the ghost’s whims.'
		]
	},
	{
		title: 'Ghoul',
		stats: '6 HP, 14 STR, 8 DEX, 3 WIL, elongated claws (d6+d6)',
		details: [
			'Grey-skinned man-things wearing shredded clothes that crave only the flesh of the living.',
			'<strong>Critical Damage</strong>: Target is <em>deprived</em> from their necrotic wound, dying in d4 days unless treated by a priest or skilled healer. If the body is not burned it later rises as a Ghoul as well.'
		]
	},
	{
		title: 'Giant Aquatic Spider',
		stats: '4 HP, 13 STR, 8 DEX, 4 WIL, bite (d8)',
		details: [
			'Enormous spiders that dwell in large bodies of fresh water, building air-filled nests in the aquatic vegetation.',
			'Lurk just below the water’s surface, waiting to surprise their victims.',
			'<strong>Critical Damage</strong>: Paralyzes their target, dealing an additional d4 DEX damage.'
		]
	},
	{
		title: 'Giant Centipede',
		stats: '5 HP, 6 STR, 13 DEX, 3 WIL, sting (d6)',
		details: [
			'Dog-sized centipedes that live in damp, underground places. They prefer to avoid combat if possible.',
			'<strong>Critical Damage</strong>: Venom renders the target <em>deprived</em>. Save STR once per day to recover.'
		]
	},
	{
		title: 'Giant Crab',
		stats: '6 HP, 3 Armor, 14 STR, 3 DEX, 8 WIL, pincers (d8+d8)',
		details: [
			'Huge crustaceans that live in coastal areas.',
			'Their pincers ignore non-metallic armor completely.'
		]
	},
	{
		title: 'Giant Crocodile',
		stats: '15 HP, 3 Armor, 16 STR, 6 DEX, 5 WIL, bite (d12), detachment',
		details: [
			'Rare, gigantic reptiles from ancient times.',
			'Natural hunters, they are attracted to the scent of blood in the water, even at great distances.'
		]
	},
	{
		title: 'Giant Mantis',
		stats: '10 HP, 1 Armor, 12 STR, 14 DEX, 12 WIL, forelegs (d8+d8)',
		details: [
			'Cow-sized insects with sharp forelimbs and slicing mandibles. Dwell in tropical forests and jungles.',
			'Relies on its dark green coloration to camouflage in foliage and attack unsuspecting prey.',
			'<strong>Critical Damage</strong>: Target loses a body part. Roll 1d6. 1: Head, 2-4: Leg, 5-6: Arm.'
		]
	},
	{
		title: 'Giant Phase Spider',
		stats: '6 HP, 13 STR, 14 DEX, 12 WIL, bite (d6), detachment',
		details: [
			'8’ long, black spiders that have the ability to become intangible. Dwell in web-filled lairs and sometimes prey on humans.',
			'Can freely shift in and out of its current plane, phasing back to attack. It cannot phase out again until its next turn.',
			'<strong>Critical Damage</strong>: Without specialist healing the target begins to slowly phase out of reality over 1d6 days.'
		]
	},
	{
		title: 'Giant Scorpion',
		stats: '8 HP, 1 Armor, 11 STR, 12 DEX, 4 WIL, claws (d10+d10)',
		details: [
			'Horse-sized arachnides commonly found in dry terrain or caverns.',
			'<strong>Critical Damage</strong>: The stinger’s poison liquifies the target’s insides for an additional d8 STR damage. The STR loss is permanent.'
		]
	},
	{
		title: 'Giant Draco',
		stats: '6 HP, 14 STR, 14 DEX, 5 WIL, bite (d10)',
		details: [
			'Tall, carnivorous lizards that glide in the air on flaps of skin.',
			'Wait atop tall natural formations to swing down and surprise their unsuspecting targets.'
		]
	},
	{
		title: 'Gnoll',
		stats: '6 HP, 1 Armor, 12 STR, 14 DEX, 8 WIL, spear (d8)',
		details: [
			'Ferocious humanoid hyenas spawned from arcame experiments long ago.',
			'Deadly warriors, they attack as a pack (as <em>detachment</em>) or on their own.'
		]
	},
	{
		title: 'Gnome',
		stats: '4 HP, 8 STR, 12 DEX, 14 WIL, crossbow (d8, bulky)',
		details: [
			'Short humanoids with long noses and ears. Live underground or deep in forests.',
			'Intelligent tinkers, love messing with any kind of mechanism. Can easily be convinced by the promise of something novel or uncommon.',
			'Can understand and communicate with small mammals like moles or squirrels.'
		]
	},
	{
		title: 'Goblin',
		stats: '4 HP, 8 STR, 12 DEX, 8 WIL, dagger (d6) or sling (d6)',
		details: [
			'Small, grotesque humanoids with skin in earthly tones of green, brown, and grey.',
			'Avoid combat, only attacking when advantageous, using hit-and-run tactics.',
			'Sometimes are found using dire wolves as mounts.'
		]
	},
	{
		title: 'Golem',
		stats: '12 HP, 3 Armor, 18 STR, 6 DEX, 0 WIL, stone fists (d10+d10), detachment',
		details: [
			'Immune to mental attacks. Damage from fire is <em>enhanced</em>.',
			'Scratching off the first letter on its forehead or performing in reverse the ritual that created it reduces the Golem to mud.'
		]
	},
	{
		title: 'Gorilla',
		stats: '3 HP, 14 STR, 14 DEX, 9 WIL, fists (d8+d8)',
		details: [
			'Large, muscular apes that dwell in hot jungles. Highly territorial.',
			'<strong>Critical Damage</strong>: Breaks a limb, dealing 1d4 extra STR damage.'
		]
	},
	{
		title: 'Great White Shark',
		stats: '8 HP, 14 STR, 14 DEX, 6 WIL, bite (d12)',
		details: [
			'Enormous grey sharks that dwell in warm water, sometimes attacking smaller boats.',
			'Can detect the smell of blood from many miles away.'
		]
	},
	{
		title: 'Green Dragon',
		stats: '12 HP, 2 Armor, 14 STR, 15 DEX, 18 WIL, bite (d12), detachment',
		details: [
			'Forest-dwelling snake topped with tall green scales. Collect great hoards of treasure.',
			'Uses intelligence and cunning to manipulate the weak into its service.',
			'<strong>Chlorine Gas</strong>: Anyone nearby must make a DEX save to escape its reach, or lose 1d4 STR and becomes <em>deprived</em>.'
		]
	},
	{
		title: 'Green Slime',
		stats: '3 HP, 18 STR, 6 DEX, 3 WIL, acidic touch (d10)',
		details: [
			'Large blobs of green slime that stick to walls and ceiling. Immune to all damage except fire.',
			'<strong>Drop Attack</strong>: As trap. Deals 1d6 STR damage per round, corroding metal, wood, and flesh. Flesh consumed in this way becomes more Green Slime.'
		]
	},
	{
		title: 'Griffon',
		stats: '7 HP, 14 STR, 15 DEX, 12 WIL, claws (d6+d6), detachment',
		details: [
			'Ravenous hybrids, with the head and wings of an eagle and the lower body of a lion.',
			'Can be used as a mount if taken young and properly trained.',
			'Flies and attacks at astonishing speeds, diving in scoop up its prey.',
			'<strong>Critical Damage</strong>: Tears flesh and bone from its victim with its razor-sharp beak.'
		]
	},
	{
		title: 'Grizzly Bear',
		stats: '6 HP, 15 STR, 13 DEX, 5 WIL, claws (d8+d8)',
		details: [
			'Reddish-brown bears commonly found in mountains, woodlands, and prairies.',
			'Prefer to eat fish and meat, and will attack the rare unfortunate who crosses their path.',
			'<strong>Critical Damage</strong>: Their bite does 1d6 additional STR damage. The target bleeds out very quickly.'
		]
	},
	{
		title: 'Halfling',
		stats: '4 HP, 8 STR, 14 DEX, 14 WIL, shortsword (d6)',
		details: [
			'Small humanoids with hairy feet live in small settlements. Highly resistant to mental attacks.'
		]
	},
	{
		title: 'Harpy',
		stats: '8 HP, 7 STR, 12 DEX, 14 WIL, claws (d6+d6)',
		details: [
			'Hideous monstrosities with the body of a giant eagle and a humanoid head.',
			'Its movements and flight are clumsy due to its unproportional size. Rely on charmed victims to do anything of note.',
			'<strong>Song</strong>: Anyone nearby must save WIL or be charmed by its voice, following the harpy and defending it from any threat.'
		]
	},
	{
		title: 'Hellhound',
		stats: '8 HP, 12 STR, 15 DEX, 9 WIL, bite (d8) or fire breath (d6, blast)',
		details: [
			'Monstrous, intelligent dogs that dwell near volcanoes.',
			'Immune to fire and heat damage. Hot enough to melt iron by simply biting it.'
		]
	},
	{
		title: 'Hobgoblin',
		stats: '6 HP, 2 Armor, 14 STR, 8 DEX, 11 WIL, mace (d8)',
		details: [
			'Large and burly relatives of goblins. Dwell in underground fortresses until called for war.',
			'Automatically succeed in Morale Saves if a commander is present.',
			'Trained to fight together. Damage dealt is <em>enhanced</em> if an ally is also engaged with the same enemy.'
		]
	},
	{
		title: 'Hooded Men',
		stats: '12 HP, 9 STR, 12 DEX, 14 WIL, leystaff (d8)',
		details: [
			'The Watchers of the Wood; a cult that derive their power from leylines, rune stones, and the like.',
			'<strong>Critical Dmage</strong>: Leech a part of the victim’s soul (1d4 WIL damage).',
			'Carries two of the following Spellbooks: <em>Charm, Hypnotize, Push/Pull, Shield</em>.'
		]
	},
	{
		title: 'Hunting Dog',
		stats: '3 HP, 4 STR, 12 DEX, 8 WIL, bite (d6)',
		details: [
			'Domestic canines shaped into ferocious hunters, attacking only at their owner’s command.',
			'Track by scent, relentlessly following their target.'
		]
	},
	{
		title: 'Hydra',
		stats: '12 HP, 2 Armor, 13 STR, 7 DEX, 12 WIL, bite (d12, blast), detachment',
		details: [
			'Large reptilians with nine serpentine heads. Very difficult to throw off once their quarry is detected.',
			'On taking <strong>Critical Damage</strong>, the hydra loses one head. It then continues fighting until no heads remains.'
		]
	},
	{
		title: 'Ifrit',
		stats: '10 HP, 11 STR, 13 DEX, 14 WIL, flaming sword (d10)',
		details: [
			'Clever, djinn-like beings from the elemental plane of fire. Appear as giant humanoids. Wet weapons deal <em>enhanced</em> damage against them.',
			'Often summoned through powerful magic in service to a wizard, but will subvert their orders whenever possible.',
			'<strong>Pillar of Flame</strong>: Creates a column of flame as tall as a building, dealing d12 STR damage to all it touches. It can only do this once per day.'
		]
	},
	{
		title: 'Invisible Stalker',
		stats: '8 HP, 12 STR, 12 DEX, 15 WIL, fists (d4+d4)',
		details: [
			'Intelligent beings shaped into reality by a powerful wizard. Completely invisible and silent.',
			'Attacks deal direct STR damage (subtracting Armor).'
		]
	},
	{
		title: 'Iron Construct',
		stats: '8 HP, 3 Armor, 15 STR, 5 DEX, 8 WIL, giant sword (d12)',
		details: [
			'Tall, humanoid statues forged of metal, fire, and magic. Wield massive swords of iron.',
			'Immune to mundane attacks, electricity, and cold. Fire damage is absorbed and heals any lost STR.'
		]
	},
	{
		title: 'Killer Bees',
		stats: '6 HP, 6 STR, 14 DEX, 8 WIL, sting (d6), detachment',
		details: [
			'Oversized bees that build underground hives. Hyper aggressive, attack anything that comes near.',
			'Produce special honey that heals 1d6 STR. 3 uses.',
			'When the bees cause STR damage, the stingers are lodged into the target, dealing d4 damage each round until removed.'
		]
	},
	{
		title: 'Kobold',
		stats: '3 HP, 8 STR, 13 DEX, 4 WIL, bite (d6), spear (d8)',
		details: [
			'Hairless humanoids with canine-like features and scaly skin. Can see perfectly in the dark, but are harmed by direct sunlight.',
			'Use traps and ambush to defeat opponents. Often act in service of a more powerful creatures.'
		]
	},
	{
		title: 'Kraken',
		stats: '16 HP, 15 STR, 13 DEX, 8 WIL, arms (d10, blast)',
		details: [
			'Titanic, eight-armed saltwater monstrosities that build enormous “castles” deep below the ocean.',
			'Terrorize ships and coastal cities alike in their obsessive search for building materials.'
		]
	},
	{
		title: 'Lamia',
		stats: '6 HP, 11 STR, 12 DEX, 16 WIL, toothy bite (d8)',
		details: [
			'Centaur-like creatures that prey on the life force of others, seducing their victims through heightened charm and intelligence. Their upper bodies are typically humanoid, the lower half any number of animal hybrids.',
			'Inherently magical. Can create illusions, charm, and disguise themselves at will.',
			'<strong>Critical Damage</strong>: The target takes d6 WIL damage as their spirit is slowly sapped away. They then become enthralled to the Lamia, obeying its every command while in its presence.'
		]
	},
	{
		title: 'Lich',
		stats: '14 HP, 1 Armor, 8 STR, 8 DEX, 18 WIL, soul dagger (d8)',
		details: [
			'Powerful sorcerers that paid the ultimate price for immortality: their own life. Now, their thirst for power knows no bounds.',
			'Maintains unlife by binding themselves to an earthly artifact, which is typically protected by at least d6 other undead servants.',
			'Carries up to six of the following spellbooks: <em>Animate Object</em>, <em>Arcane Eye</em>, <em>Deafen</em>, <em>Disassemble</em>, <em>Elemental Wall</em>, <em>Frenzy</em>, <em>Gate</em>, <em>Hover</em>, <em>Hatred</em>, <em>Identify Owner</em>, <em>Knock</em>, <em>Pacify</em>, <em>Raise Dead</em>, <em>Raise Spirit</em>, <em>Shield</em>, <em>Sleep</em>, <em>Smoke Form</em>, <em>Telekinesis</em>, <em>Telepathy</em>, <em>Teleport</em>, <em>Vision</em>, <em>Wizard Mark</em>.'
		]
	},
	{
		title: 'Lion',
		stats: '5 HP, 12 STR, 12 DEX, 11 WIL, claws (d6+d6)',
		details: [
			'Carnivorous hunters that live in the savannah or other similarly dry lands.',
			'Can follow the scent of blood over great distances.',
			'<strong>Critical Damage</strong>: Delivers a killing bite to the throat (d6 STR damage).'
		]
	},
	{
		title: 'Manticore',
		stats: '6 HP, 15 STR, 14 DEX, 12 WIL, claws (d6+d6) or tail spike (d6)',
		details: [
			'Spiteful monstrosities that wear a humanoid face, a lion’s body, wings of a bat, and a scorpion’s tail. Dwell in mountainous regions, abandoned castles, and forgotten dungeons.',
			'Tail spikes act like darts, regrowing after a few days. A single spike is worth 150gp to a collector.',
			'<strong>Critical Damage</strong>: Target is <em>deprived</em> until they get a good night’s sleep. Until then they act boorish, selfish, and cruel (or more so, if that already is their nature).'
		]
	},
	{
		title: 'Medusa',
		stats: '10 HP, 8 STR, 12 DEX, 16 WIL, snake bite (d8)',
		details: [
			'Magical creatures that resemble humanoid women, but have snakes in place of hair. Proud and territorial.',
			'<strong>Gaze</strong>: Those who look into the eyes of the Medusa are quickly turned to stone (its reflection is harmless). Attacks against it are almost normally <em>impaired</em>.',
			'If severed, a Medusa’s head maintains its powers for a full day.'
		]
	},
	{
		title: 'Mimic',
		stats: '9 HP, 2 Armor, 13 STR, 6 DEX, 12 WIL, bite (d8)',
		details: [
			'Malicious shapeshifters that take on the form of inanimate objects commonly found in dungeons.',
			'Remain motionless (typically in the form of a chest or door), surprising anyone that comes near.',
			'The mimic’s saliva is extremely sticky and difficult to remove. Alchemists will pay up to 150gp for even the smallest vial.'
		]
	},
	{
		title: 'Mind Lasher',
		stats: '12 HP, 8 STR, 12 DEX, 18 WIL, tentacles (d6, blast)',
		details: [
			'Humanoid creatures with purple skin and an squid-like heads. Dwell deep underground or in spacefaring vessels. Feed on the brains of other humanoids, absorbing their memories and life essence. Highly intelligent, but evil beyond belief.',
			'<strong>Mind Blast</strong>: Nearby targets must save WIL or lose 1d4 WIL and become paralyzed.',
			'<strong>Critical Damage</strong>: A tentacle rips the victim’s brain out of their skull.'
		]
	},
	{
		title: 'Minotaur',
		stats: '12 HP, 1 Armor, 16 STR, 12 DEX, 8 WIL, two-handed axe (d10) or charge (d12)',
		details: [
			'A large humanoid (typically male) with the head of a bull. Dwell in mazes or dungeons.',
			'Extraordinary trackers with an excellent sense of smell and navigation skills.'
		]
	},
	{
		title: 'Mummy',
		stats: '6 HP, 12 STR, 8 DEX, 6 WIL, necrotic touch (d10)',
		details: [
			'Undead humanoids wrapped in funerary cloth. Found in pyramids, ruins, temples, and tombs.',
			'<strong>Critical Damage</strong>: Target is infected with mummy rot, and is unable to recover STR until they are cured by a specialist healer. The target is also <em>deprived</em>.'
		]
	},
	{
		title: 'Naga',
		stats: '6 HP, 1 Armor, 14 STR, 12 DEX, 14 WIL, sword (d6), bite (d10)',
		details: [
			'Humanoids with the lower body, tail, and neck snakes. Dwell in hot jungles and temples lost to time.',
			'Use cunning and hypnosis to capture other creatures to be enslaved by their cruel masters.',
			'<strong>Gaze</strong>: A target facing the Naga is hypnotized, falling under its will. Its victims cannot be compelled to violence.'
		]
	},
	{
		title: 'Night Hag',
		stats: '8 HP, 9 STR, 11 DEX, 16 WIL, talons (d8+d8)',
		details: [
			'Hideous old women that dwell in dead forests, swamps, and bogs.',
			'Carries three of the following spellbooks: <em>Arcane Eye</em>, <em>Disguise</em>, <em>Fog Cloud</em>, <em>Identify Owner</em>, <em>Smoke Form</em>.'
		]
	},
	{
		title: 'Nightmare',
		stats: '8 HP, 15 STR, 12 DEX, 8 WIL, flaming hooves (d8+d8)',
		details: [
			'Intelligent, demonic horses with eyes like burning coals, smoldering nostrils, and flaming hooves.',
			'Melee attacks against the Nightmare are <em>impaired</em> due to the thick clouds of smoke it produces.'
		]
	},
	{
		title: 'Ogre',
		stats: '6 HP, 1 Armor, 16 STR, 8 DEX, 6 WIL, club (d10)',
		details: [
			'Massive, gluttonous brutes of ill-spirit and low intelligence.',
			'Easily impressed by shiny materials, keeping sacks of gold and treasure in its lairs.'
		]
	},
	{
		title: 'Owlbear',
		stats: '9 HP, 16 STR, 12 DEX, 5 WIL, beak (d10) or claws (d8+d8)',
		details: [
			'Bear-like carnivores with the face of an owl. Found in dense forests. Rumored spawns of a magical mishap.',
			'<strong>Critical Damage</strong>: A piece of armor is pierced and destroyed.'
		]
	},
	{
		title: 'Panther',
		stats: '4 HP, 11 STR, 14 DEX, 8 WIL, claws (d6+d6)',
		details: [
			'Dark-furred cats that live in forests and plains. Hunt animals of almost any size, pouncing on unsuspecting targets from on high.',
			'<strong>Critical Damage</strong>: Delivers a killing bite to the target’s throat, dealing an extra d4 STR damage.'
		]
	},
	{
		title: 'Phoenix',
		stats: '4 HP, 15 STR, 13 DEX, 12 WIL, talons (d10+d10)',
		details: [
			'Intelligent, hawk-like spirits of pure flame, found in isolated deserts and high mountains.',
			'If killed, the phoenix explodes in a burst of flames. Is reborn 1d3 days later from the ashes.',
			'Its feathers are highly-sought after for their healing properties.'
		]
	},
	{
		title: 'Pixie',
		stats: '3 HP, 3 STR, 15 DEX, 13 WIL',
		details: [
			'Tiny humanoids with insectoid wings. Naturally invisible.',
			'Can cast <em>Sleep</em> and <em>Masquerade</em> at will.'
		]
	},
	{
		title: 'Pseudodragon',
		stats: '4 HP, 6 STR, 14 DEX, 13 WIL, bite (d6)',
		details: [
			'Winged, cat-sized reptiles capable of flight, speech, and high intelligence. Commonly found acting as familiars and spies.',
			'Love treats, rubs, and good stories.'
		]
	},
	{
		title: 'Purple Worm',
		stats: '18 HP, 1 Armor, 18 STR, 8 DEX, 6 WIL, bite (d12), detachment',
		details: [
			'Gargantuan worms that lair in enormous burrows deep underground, only coming to the surface to eat. Found in high deserts and hot tundra.',
			'<strong>Critical Damage</strong>: The target is devoured, taking d8 STR damage from the acid in the worm’s stomach.'
		]
	},
	{
		title: 'Red Cap',
		stats: '6 HP, 6 STR, 12 DEX, 8 WIL, dual sickles (d6+d6)',
		details: [
			'Borne from blood left to rot in the land of Fairy. Their hats are a deep red from the blood they bathe in.',
			'Ignore those with little to live for, as there is no pleasure in their murder.',
			'<strong>Critical Damage</strong>: Target is eviscerated, the spray of their blood restoring STR loss suffered by the Red Cap.'
		]
	},
	{
		title: 'Red Dragon',
		stats: '18 HP, 3 Armor, 18 STR, 12 DEX, 16 WIL, bite (d12), detachment',
		details: [
			'Flaming titans of smoke and fire, boasting a greater wingspan than any of their brethren. Lair close to volcanos and lava flows.',
			'Immune to fire damage of any kind. Ice and water evaporate on contact.',
			'<strong>Fire Breath</strong>: Deals 8 STR damage to anyone nearby, destroying all mundane armor it touches in the process.'
		]
	},
	{
		title: 'Reptilian',
		stats: '5 HP, 1 Armor, 14 STR, 12 DEX, 5 WIL, bone spear (d8)',
		details: [
			'Amphibian humanoids that live in large tribes near swamps and jungles.',
			'Craft their armor and weapons from the bones of their prey. They will eat anything, including humanoids.'
		]
	},
	{
		title: 'Roc',
		stats: '15 HP, 16 STR, 14 DEX, 12 WIL, beak (d12, blast), detachment',
		details: [
			'Gargantuan birds of prey that roost in high plateau and distant mountain peaks. Powerful hunters, they will defend a clutch of eggs to the death.',
			'<strong>Grab</strong>: Their powerful talons can scoop up entire groups of people (targets must all make a DEX save to escape). Victims are carried back to the nest to be eaten alive.',
			'<strong>Critical Damage</strong>: Target is pierced through their middle, dying instantly.'
		]
	},
	{
		title: 'Root Goblin',
		stats: '4 HP, 8 STR, 14 DEX, 8 WIL, spear (d6)',
		details: [
			'Avoid combat unless they have the advantage (such as greater numbers).',
			'Guard their stolen goods to the death.',
			'Root Golbins prize Spellbooks and are always willing to trade.'
		]
	},
	{
		title: 'Root Witch',
		stats: '8 HP, 9 STR, 16 DEX, 14 WIL, tuber-fingers (d6)',
		details: [
			'Excellent tunneler that hides underground near water. Wiggles tiny fronds into the air as lures.',
			'Above-ground, appears vaguely humanoid with the face of a rotted tree stump.',
			'Will exchange rare minerals for a “fresh corpse” of any kind.'
		]
	},
	{
		title: 'Rust Monster',
		stats: '5 HP, 16 STR, 13 DEX, 5 WIL, bite (d6)',
		details: [
			'Armadillo-like creatures with club-like tails and long antennae. Feed on iron and rusted metal.',
			'Any mundane metals its antennae touch instantly become rust. Can smell metal from a long distance away.',
			'<strong>Critical Damage</strong>: Metal armor rusts into useless weight.'
		]
	},
	{
		title: 'Sabre-Toothed Cat',
		stats: '8 HP, 15 STR, 14 DEX, 3 WIL, claws (d8+d8)',
		details: [
			'Huge, primeval cats with enormous fangs. Extremely rare, generally found in regions untouched by civilization.',
			'<strong>Critical Damage</strong>: Punctures the flesh of its victim (d6 STR damage), resulting in extreme blood loss.'
		]
	},
	{
		title: 'Satyr',
		stats: '6 HP, 11 STR, 14 DEX, 16 WIL, horns (d6)',
		details: [
			'Mythical humanoids with legs and horns of a goat that love to dance and drink. Found in deep forests. Immune to mind-altering magic.',
			'<strong>Pipes</strong>: Anyone in earshot of their music must save WIL or fall asleep.'
		]
	},
	{
		title: 'Sea Hag',
		stats: '6 HP, 11 STR, 15 DEX, 14 WIL, long claws (d6+d6)',
		details: [
			'Ghostly, green-skinned hags that dwell in seaweed forests and warm shallow waters.',
			'Immune to magic from spellbooks.',
			'<strong>Hideous Gaze</strong>: A target is overcome with fear (HP drops to 0). WIL save each round to break the spell.'
		]
	},
	{
		title: 'Shadow',
		stats: '14 HP, 1 STR, 18 DEX, 14 WIL, draining touch (d6, ignores armor) ',
		details: [
			'Incorporeal monsters that look like animated shadows. Unharmed by mundane attacks, sleep or mind control.',
			'<strong>Critical Damage</strong>: Target loses d4 STR. If reduced to 0 STR they become a shadow as well.'
		]
	},
	{
		title: 'Shambling Mound',
		stats: '9 HP, 15 STR, 6 DEX, 8 WIL, tendrils (d8+d8), detachment',
		details: [
			'Tall humanoids made of slimy vegetation. Dwell in dark swamps and damp undergrounds.',
			'<strong>Critical Damage</strong>: Target is swallowed whole and dragged away.'
		]
	},
	{
		title: 'Skeleton',
		stats: '5 HP, 1 Armor, 8 STR, 13 DEX, 0 WIL, rusty sword (d6) or bow (d6)',
		details: [
			'Frequently found serving a master or necromancer, often in groups of 3 or more.',
			'Found wearing whatever was on them at the time of their death.',
			'If a skeleton is killed and its bones are not scattered, it reforms.'
		]
	},
	{
		title: 'Sphinx',
		stats: '18 HP, 12 STR, 13 DEX, 18 WIL',
		details: [
			'Mythical beasts with the upper body and head of a human, the wings of an eagle, and the body of a lion. Immune to magic of any kind.',
			'Enjoy riddles, and will pose at least one to anyone they meet. Failure to answer correctly is usually met with death. They know almost everything worth knowing.',
			'<strong>Roar</strong>: Anyone in earshot must save WIL or flee in fear.'
		]
	},
	{
		title: 'Storm Giant',
		stats: '18 HP, 2 Armor, 18 STR, 16 DEX, 18 WIL, greatsword (d12), detachment',
		details: [
			'Building-sized humanoids with bronze-hued skin and light-colored hair. Live on the highest mountain peaks and rockiest coastlines.',
			'Unharmed by lightning, can summon storm clouds at their will. Can fly with the wind as a their chariot.',
			'<strong>Thunderclap</strong>: Deals 4 STR damage against a single target. Targets wearing metal armor take double damage.'
		]
	},
	{
		title: 'Tiger',
		stats: '6 HP, 14 STR, 14 DEX, 6 WIL, claws (d8+d8)',
		details: [
			'Striped, solitary felines found in temperate regions.',
			'Use camouflage and stealth to surprise their prey. Drag away their victims for later consumption.',
			'<strong>Critical Damage</strong>: Bites through flesh an bone alike (d6 STR damage).'
		]
	},
	{
		title: 'Titan',
		stats: '18 HP, 3 Armor, 16 STR, 15 DEX, 18 WIL, lightning sword (d12), detachment',
		details: [
			'Mythical, humanoid giants of radiant beauty and powerfully athletic bodies. Beneficent of character, but prone to megalomania.',
			'Natives of other planes of existence, but sometimes have strongholds in the mortal world.',
			'Can levitate, shapeshift, and sculpt elements at will.'
		]
	},
	{
		title: 'Treant',
		stats: '10 HP, 3 Armor, 15 STR, 3 DEX, 12 WIL, roots (d10+d10, blast)',
		details: [
			'A sentient, bipedal tree with a vaguely humanoid face on its trunk. Found in the deepest part of the wood.',
			'Speaks slowly and ponderously, with a deep voice. Timeless, living for thousands of years.'
		]
	},
	{
		title: 'Triton',
		stats: '6 HP, 12 STR, 15 DEX, 12 WIL, trident (d8)',
		details: [
			'Aquatic humanoids with silvery skin, blue-green hair, and scaled legs ending in fins. Dwell in warmer waters close to land.',
			'Lair in beautiful castles sculpted from sea rock and coral. Command vast schools of fish for both protection and food.'
		]
	},
	{
		title: 'Tyrannosaurus',
		stats: '15 HP, 1 Armor, 18 STR, 12 DEX, 8 WIL, bite (d12), detachment',
		details: [
			'Massive, two-legged, predatory reptiles with huge jaws.',
			'Ferocious hunters, attacking the most threatening foe first.'
		]
	},
	{
		title: 'Unicorn',
		stats: '6 HP, 14 STR, 12 DEX, 14 WIL, horn (d10, ignores armor)',
		details: [
			'Magical horses with a single long horn on its forehead. Timid, but proud and wilful, are seen as divine beings.',
			'Its hairs are worth small fortunes due to their powerful healing properties.'
		]
	},
	{
		title: 'Vampire',
		stats: '12 HP, 1 Armor, 14 STR, 12 DEX, 16 WIL, bite (d10)',
		details: [
			'Charming, undead creatures that drink the blood of mortals. Act at night and sleep in a coffin during the day. Can change its form to the one of a bat.',
			'<strong>Regeneration</strong>: A damaged vampire regains 6 HP when it bites a target that has blood. If killed, it becomes a cloud of gas and retreats to its coffin, reforming at the next nightfall. Can only be killed if exposed to sunlight or if the coffin is destroyed.',
			'<strong>Critical Damage</strong>: The vampire drains the target’s essence, dealing d12 damage to WIL. If the target reaches 0 WIL this way, it dies and is raised as a thrall of the vampire'
		]
	},
	{
		title: 'Vampire Bat',
		stats: '3 HP, 6 STR, 14 DEX, 3 WIL, bite (d8)',
		details: [
			'Large, nocturnal mammals that feed on live blood.',
			'Use echolocation to navigate. Fear loud noises.',
			'<strong>Critical Damage</strong>: Target is infected by disease and are <em>deprived</em> without specialist healing.'
		]
	},
	{
		title: 'Viper',
		stats: '3 HP, 5 STR, 12 DEX, 3 WIL, bite (d6)',
		details: [
			'Poisonous snakes often found in caves, pits, and other dark places. An antitoxin can be made from their poison sacs.',
			'Does not rely on vision, using heat and smell to track its victims.',
			'<strong>Critical Damage</strong>: Target is poisoned, dying in 1d12 hours without a cure.'
		]
	},
	{
		title: 'Warp Panther',
		stats: '8 HP, 13 STR, 16 DEX, 12 WIL, tentacles (d8+d8, blast), bite (d10)',
		details: [
			'Grotesque panther-like predators with long razored tentacles growing out of their backs.',
			'Resistant to magical attacks. Caster must make a WIL save for the intended effect to succeed.',
			'Can teleport a short distance away at will. Hate Blink Dogs.'
		]
	},
	{
		title: 'Water Elemental',
		stats: '14 HP, 15 STR, 16 DEX, 4 WIL, spray (d8)',
		details: [
			'Rare spirits of lakes, rivers, and seas.',
			'Mundane attacks against the Water Elemental are <em>impaired</em>.',
			'<strong>Critical Damage</strong>: Target is enveloped by the water and drowns in three rounds.'
		]
	},
	{
		title: 'Werewolf',
		stats: '8 HP, 15 STR, 14 DEX, 6 WIL, claws (d6+d6) or bite (d8)',
		details: [
			'A ferocious lycanthrope that can transform into a wolf-shape at will.',
			'Mundane attacks are <em>impaired</em> against the werewolf, but weapons made of silver are <em>enhanced</em>.',
			'<strong>Critical Damage</strong>: Target becomes infected with lycanthropy, transforming into a werewolf by the next full moon.'
		]
	},
	{
		title: 'White Ape',
		stats: '6 HP, 14 STR, 15 DEX, 12 WIL, claws (d6+d6), rocks (d6, blast)',
		details: [
			'Nocturnal gorillas covered in snow-white hair.',
			'Defend their territory with threatening gestures followed by sudden violence.'
		]
	},
	{
		title: 'White Dragon',
		stats: '16 HP, 1 Armor, 16 STR, 16 DEX, 12 WIL, bite (d12), detachment',
		details: [
			'A massive winged creature of frost that lairs comfortably in only the coldest regions.',
			'Perpetually accompanied by a storm of ice and wind, the White Dragon is a manifestation of winter itself.',
			'<strong>Frost Breath</strong>: Nearby targets must make a DEX save or are frozen solid, their breath turned to icicles in their lungs.'
		]
	},
	{
		title: 'Wight',
		stats: '12 HP, 3 Armor, 16 STR, 8 DEX, 12 WIL, longsword (d10)',
		details: [
			'Grotesque, fallen warriors, raised from death for ill purpose. Often bestrode an equally nightmarish steeds, leading lesser undead creatures into battle.',
			'<strong>Critical Damage</strong>: On a fail, any STR loss is permanent.'
		]
	},
	{
		title: 'Wolf',
		stats: '6 HP, 12 STR, 14 DEX, 8 WIL, bite (d8)',
		details: [
			'Large canines that dwell primarily in forest or tundra.',
			'Can be trained with effort if captured at a young age.'
		]
	},
	{
		title: 'Troll',
		stats: '14 HP, 1 Armor, 14 STR, 12 DEX, 4 WIL, claw (d8), club (d10)',
		details: [
			'Giant, warty humanoids of flesh and bark. Dwell underground or in deep forests, as well as the ruined homes of their former victims. Carnivorous.',
			'When taking <strong>Critical Damage</strong> a Troll will continue fighting, despite loss of flesh and limb. Only when their STR is 0 are they truly killed. Unless their heads are bathed in acid, fire, or powerful magic they will fully regenerate within 1d4 days.'
		]
	},
	{
		title: 'Wood Troll',
		stats: '10 HP, 15 STR, 12 DEX, 7 WIL, claws and bite (d8+d8, blast)',
		details: [
			'Large humanoids with elongated arms made of bark or root. They live in forests, sharing a deep connection with the vegetation around them.',
			'If killed they will slowly regenerate unless their corpse is taken out of the forest, or burned with fire.',
			'<strong>Critical Damage</strong>: Moss and twigs begin growing out of target’s wounds.'
		]
	},
	{
		title: 'Wyvern',
		stats: '11 HP, 15 STR, 14 DEX, 13 WIL, stinger (d10)',
		details: [
			'Large, intelligent, winged reptiles. Dwell in any terrain, but favor dry cliffs.',
			'Shy away from other creatures, preferring to silently stalk their targets from afar.',
			'<strong>Critical Damage</strong>: The victim is impaled and held in place. The wyvern then bites their head off.'
		]
	},
	{
		title: 'Zombie',
		stats: '2 HP, 12 STR, 6 DEX, 3 WIL, jagged nails (d6)',
		details: [
			'Re-animated corpse brought back through necromantic ritual or fell influence. Immune to all mind-influencing effects.',
			'If not utterly destroyed (fire, complete dismemberment, etc.), the Zombie will rise again within a few minutes.',
			'<strong>Critical Damage</strong>: Target is infected and becomes <em>deprived</em>. Without the services of a specialist or healer, they will become a zombie in 1d4 days.'
		]
	}
];
