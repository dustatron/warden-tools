export type Spell = {
	number: string;
	title: string;
	description: string;
};

export const basicSpells: Spell[] = [
	{
		number: '1',
		title: 'Adhere',
		description: 'An object is covered in extremely sticky slime.'
	},
	{
		number: '2',
		title: 'Anchor',
		description:
			'A strong wire sprouts from your arms, affixing itself to two points within 50ft on each side.'
	},
	{
		number: '3',
		title: 'Animate Object',
		description: 'An object obeys your commands as best it can.'
	},
	{
		number: '4',
		title: 'Anthropomorphize',
		description: 'An animal either gains human intelligence or human appearance for one day.'
	},
	{
		number: '5',
		title: 'Arcane Eye',
		description: 'You can see through a magical floating eyeball that flies around at your command.'
	},
	{
		number: '6',
		title: 'Astral Prison',
		description: 'An object is frozen in time and space within an invulnerable crystal shell.'
	},
	{
		number: '7',
		title: 'Attract',
		description:
			'Two objects are strongly magnetically attracted to each other if they come within 10 feet.'
	},
	{
		number: '8',
		title: 'Auditory Illusion',
		description: 'You create illusory sounds that seem to come from a direction of your choice.'
	},
	{
		number: '9',
		title: 'Babble',
		description:
			'A creature must loudly and clearly repeat everything you think. It is otherwise mute.'
	},
	{
		number: '10',
		title: 'Bait Flower',
		description: 'A plant sprouts from the ground that emanates the smell of decaying flesh.'
	},
	{
		number: '11',
		title: 'Beast Form',
		description: 'You and your possessions transform into a mundane animal.'
	},
	{
		number: '12',
		title: 'Befuddle',
		description:
			'A creature of your choice is unable to form new short-term memories for the duration of the spell.'
	},
	{
		number: '13',
		title: 'Body Swap',
		description:
			'You switch bodies with a creature you touch. If one body dies, the other dies as well.'
	},
	{
		number: '14',
		title: 'Charm',
		description: 'A creature you can see treats you as a friend.'
	},
	{
		number: '15',
		title: 'Command',
		description: 'A target obeys a single three-word command that does not cause it harm.'
	},
	{
		number: '16',
		title: 'Comprehend',
		description: 'You become fluent in all languages for a short while.'
	},
	{
		number: '17',
		title: 'Cone of Foam',
		description: 'Dense foam sprays from your hand, coating the target.'
	},
	{
		number: '18',
		title: 'Control Plants',
		description: 'Nearby plants and trees obey you and gain the ability to move at a slow pace.'
	},
	{
		number: '19',
		title: 'Control Weather',
		description: 'You may alter the type of weather at will, but you do not otherwise control it.'
	},
	{
		number: '20',
		title: 'Cure Wounds',
		description: 'Restore 1d4 STR per day to a creature you can touch.'
	},
	{
		number: '21',
		title: 'Deafen',
		description: 'All nearby creatures are deafened.'
	},
	{
		number: '22',
		title: 'Detect Magic',
		description: 'You can see or hear nearby magical auras.'
	},
	{
		number: '23',
		title: 'Disassemble',
		description:
			'Any of your body parts may be detached and reattached at will, without causing pain or damage. You can still control them.'
	},
	{
		number: '24',
		title: 'Disguise',
		description:
			'You may alter the appearance of one character at will as long as they remain humanoid. Attempts to duplicate other characters will seem uncanny.'
	},
	{
		number: '25',
		title: 'Displace',
		description: 'An object appears to be up to 15ft from its actual position.'
	},
	{
		number: '26',
		title: 'Earthquake',
		description: 'The ground begins shaking violently. Structures may be damaged or collapse.'
	},
	{
		number: '27',
		title: 'Elasticity',
		description: 'Your body can stretch up to 10ft.'
	},
	{
		number: '28',
		title: 'Elemental Wall',
		description: 'A straight wall of ice or fire 50ft long and 10ft high rises from the ground.'
	},
	{
		number: '29',
		title: 'Filch',
		description: 'A visible item teleports to your hands.'
	},
	{
		number: '30',
		title: 'Flare',
		description:
			'A bright ball of energy fires a trail of light into the sky, revealing your location to friend or foe.'
	},
	{
		number: '31',
		title: 'Fog Cloud',
		description: 'A dense fog spreads out from you.'
	},
	{
		number: '32',
		title: 'Frenzy',
		description: 'A nearby creature erupts in a frenzy of violence.'
	},
	{
		number: '33',
		title: 'Gate',
		description: 'A portal to a random plane opens.'
	},
	{
		number: '34',
		title: 'Gravity Shift',
		description: 'You can change the direction of gravity, but only for yourself.'
	},
	{
		number: '35',
		title: 'Greed',
		description:
			'A creature develops the overwhelming urge to possess a visible item of your choice.'
	},
	{
		number: '36',
		title: 'Haste',
		description: 'Your movement speed is tripled.'
	},
	{
		number: '37',
		title: 'Hatred',
		description:
			'A creature develops a deep hatred of another creature or group and wishes to destroy them.'
	},
	{
		number: '38',
		title: 'Hear Whispers',
		description: 'You can hear faint sounds clearly.'
	},
	{
		number: '39',
		title: 'Hover',
		description:
			'An object hovers, frictionless, 2ft above the ground. It can hold up to one humanoid.'
	},
	{
		number: '40',
		title: 'Hypnotize',
		description:
			'A creature enters a trance and will truthfully answer one yes or no question you ask it.'
	},
	{
		number: '41',
		title: 'Icy Touch',
		description: 'A thick ice layer spreads across a touched surface, up to 10ft in radius.'
	},
	{
		number: '42',
		title: 'Identify Owner',
		description:
			'Letters appear over the object you touch, spelling out the name of the object’s owners, if there are any.'
	},
	{
		number: '43',
		title: 'Illuminate',
		description: 'A floating light moves as you command.'
	},
	{
		number: '44',
		title: 'Invisible Tether',
		description: 'Two objects within 10ft of each other cannot be moved more than 10ft apart.'
	},
	{
		number: '45',
		title: 'Knock',
		description: 'A nearby mundane or magical lock unlocks loudly.'
	},
	{
		number: '46',
		title: 'Leap',
		description: 'You jump up to 10ft high, once.'
	},
	{
		number: '47',
		title: 'Liquid Air',
		description: 'The air around you becomes swimmable .'
	},
	{
		number: '48',
		title: 'Magic Dampener',
		description: 'All nearby magical effects have their effectiveness halved.'
	},
	{
		number: '49',
		title: 'Manse',
		description:
			'A sturdy, furnished cottage appears for 12 hours. You can permit and forbid entry to it at will.'
	},
	{
		number: '50',
		title: 'Marble Craze',
		description: 'Your pockets are full of marbles, and will refill every 30 seconds.'
	},
	{
		number: '51',
		title: 'Masquerade',
		description:
			'A characters appearance and voice becomes identical to those of a character you touch.'
	},
	{
		number: '52',
		title: 'Miniaturize',
		description: 'A creature you touch is shrunk down to the size of a mouse.'
	},
	{
		number: '53',
		title: 'Mirror Image',
		description: 'An illusory duplicate of yourself appears and is under your control.'
	},
	{
		number: '54',
		title: 'Mirrorwalk',
		description: 'A mirror becomes a gateway to another mirror that you looked into today.'
	},
	{
		number: '55',
		title: 'Multiarm',
		description: 'You temporarily gain an extra arm.'
	},
	{
		number: '56',
		title: 'Night Sphere',
		description: 'A 50ft wide sphere of darkness displaying the night sky appears before you.'
	},
	{
		number: '57',
		title: 'Objectify',
		description: 'You become any inanimate object between the size of a grand piano and an apple.'
	},
	{
		number: '58',
		title: 'Ooze Form',
		description: 'You become a living jelly.'
	},
	{
		number: '59',
		title: 'Pacify',
		description: 'A creature near you has an aversion to violence.'
	},
	{
		number: '60',
		title: 'Phobia',
		description: 'A nearby creature becomes terrified of an object of your choice.'
	},
	{
		number: '61',
		title: 'Pit',
		description: 'A pit 10ft wide and 10ft deep opens in the ground.'
	},
	{
		number: '62',
		title: 'Primal Surge',
		description: 'A creature rapidly evolves into a future version of its species.'
	},
	{
		number: '63',
		title: 'Push/Pull',
		description:
			'An object of any size is pulled directly towards you or pushed directly away from you with the strength of one man.'
	},
	{
		number: '64',
		title: 'Raise Dead',
		description:
			'A skeleton rises from the ground to serve you. They are incredibly stupid and can only obey simple orders.'
	},
	{
		number: '65',
		title: 'Raise Spirit',
		description: 'The spirit of a nearby corpse manifests and will answer 1 question.'
	},
	{
		number: '66',
		title: 'Read Mind',
		description: 'You can hear the surface thoughts of nearby creatures.'
	},
	{
		number: '67',
		title: 'Repel',
		description: 'Two objects are strongly magnetically repelled from each other within 10 feet.'
	},
	{
		number: '68',
		title: 'Scry',
		description: 'You can see through the eyes of a creature you touched earlier today.'
	},
	{
		number: '69',
		title: 'Sculpt Elements',
		description: 'Inanimate material behaves like clay in your hands.'
	},
	{
		number: '70',
		title: 'Sense',
		description:
			'Choose one kind of object (key, gold, arrow, jug, etc). You can sense the nearest example.'
	},
	{
		number: '71',
		title: 'Shield',
		description: 'A creature you touch is protected from mundane attacks for one minute.'
	},
	{
		number: '72',
		title: 'Shroud',
		description: 'A creature you touch is invisible until they move.'
	},
	{
		number: '73',
		title: 'Shuffle',
		description: 'Two creatures you can see instantly switch places.'
	},
	{
		number: '74',
		title: 'Sleep',
		description: 'A creature you can see falls into a light sleep.'
	},
	{
		number: '75',
		title: 'Slick',
		description: 'Every surface in a 30ft radius becomes extremely slippery.'
	},
	{
		number: '76',
		title: 'Smoke Form',
		description: 'Your body becomes a living smoke that you can control.'
	},
	{
		number: '77',
		title: 'Sniff',
		description: 'You can smell even the faintest traces of scents.'
	},
	{
		number: '78',
		title: 'Snuff',
		description: 'The source of any mundane light you can see is instantly snuffed out.'
	},
	{
		number: '79',
		title: 'Sort',
		description: 'Inanimate items sort themselves according to categories you set.'
	},
	{
		number: '80',
		title: 'Spectacle',
		description:
			'A clearly false but impressive illusion of your choice appears, under your control. It may be up to the size of a palace and has full motion and sound.'
	},
	{
		number: '81',
		title: 'Spellsaw',
		description:
			'A whirling blade flies from your chest, clearing any plant material in its way. It is otherwise harmless.'
	},
	{
		number: '82',
		title: 'Spider Climb',
		description: 'You can climb surfaces like a spider.'
	},
	{
		number: '83',
		title: 'Summon Cube',
		description:
			'Once per second you may summon or banish a 3-foot-wide cube of earth. New cubes must be affixed to the earth or to other cubes.'
	},
	{
		number: '84',
		title: 'Swarm',
		description:
			'You become a swarm of crows, rats, or piranhas. You can only be harmed by blast attacks.'
	},
	{
		number: '85',
		title: 'Telekinesis',
		description: 'You may mentally 1 move item under 60lbs.'
	},
	{
		number: '86',
		title: 'Telepathy',
		description: 'Two creatures can hear each other’s thoughts, no matter how far apart.'
	},
	{
		number: '87',
		title: 'Teleport',
		description:
			'An object or person you can see is transported from one place to another in a 50ft radius.'
	},
	{
		number: '88',
		title: 'Target Lure',
		description: 'An object you touch becomes the target of any nearby spell.'
	},
	{
		number: '89',
		title: 'Thicket',
		description: 'A thicket of trees and dense brush up to 50ft wide suddenly sprouts up.'
	},
	{
		number: '90',
		title: 'Summon Idol',
		description: 'A carved stone statue the size of a mule rises from the ground.'
	},
	{
		number: '91',
		title: 'Time Control',
		description: 'Time in a 50ft bubble slows down or increases by 10% for 30 seconds.'
	},
	{
		number: '92',
		title: 'True Sight',
		description: 'You see through all nearby illusions.'
	},
	{
		number: '93',
		title: 'Upwell',
		description: 'A spring of seawater appears.'
	},
	{
		number: '94',
		title: 'Vision',
		description: 'You completely control what a creature sees.'
	},
	{
		number: '95',
		title: 'Visual Illusion',
		description: 'A silent, immobile, room-sized illusion of your choice appears.'
	},
	{
		number: '96',
		title: 'Ward',
		description:
			'A silver circle 50ft across appears on the ground. Choose one species that cannot cross it.'
	},
	{
		number: '97',
		title: 'Web',
		description: 'Your wrists shoot thick webbing.'
	},
	{
		number: '98',
		title: 'Widget',
		description:
			'A primitive version of a drawn tool or item appears before you and disappears after a short time.'
	},
	{
		number: '99',
		title: 'Wizard Mark',
		description:
			'Your finger can shoot a stream of ulfire-colored paint. This paint is only visible to you and can be seen at any distance, even through solid objects.'
	},
	{
		number: '100',
		title: 'X-Ray Vision',
		description: 'You can see through walls, dirt, clothing, etc.'
	}
];
