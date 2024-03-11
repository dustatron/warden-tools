export type Relic = {
	id: string;
	title: string;
	details: string[];
	recharge: string;
};
export const relicList = [
	{
		id: 'ac1029ade5-933d-4d83-84fd-280d1d95e6',
		title: 'Honeyclasp, 3 charges',
		details: ['A rusted ring that shrinks the bearer to 6” tall.'],
		recharge: 'place in a thimble-sized cup of royal jelly.'
	},
	{
		id: 'dc2230ade5-933d-4d83-84fd-280d1d95e6c',
		title: 'Falconer’s Friend, 1 charge',
		details: ['A bolt-shaped wand carrying the Haste spell.'],
		recharge: 'bathe in the light of a full moon.'
	},
	{
		id: 'jc3030ade5-933d-4d83-84fd-280d1d95e6c',
		title: 'Staff of Silence, 1 charge',
		details: ['This blackened rod temporarily disables all magic within 50ft.'],
		recharge: 'fire from a crossbow and recover.'
	},
	{
		id: 'gh4530ade5-933d-4d83-84fd-280d1d95e6c',
		title: 'Leycap, 1 use',
		details: [
			'Anyone ingesting this green-flecked mushroom loses a Fatigue, but is then required to make a WIL save to avoid its addictive properties.',
			'A fail leaves the PC deprived and unable to focus until they can eat another leycap, providing only a brief reprieve from the addiction.'
		],
		recharge: ''
	},
	{
		id: 'f698ade5-933d-4d83-84fd-280d1d95e6e6',
		title: "Gaea's Grasp, 5 charges",
		details: [
			"A wristlet of fine, woven vines. When the wearer grasps someone or something, the vines sprout tough tendrils that secure their grip. They will only release if lit ablaze or at the wearer's will."
		],
		recharge:
			'Plant the withered wristlet in rich forest soil and water liberally with the blood of a fae. It will bloom into a new wristlet overnight.'
	},
	{
		id: 'ce711fcc-6416-49da-b720-c2a151fdaacf',
		title: 'Crow Porter, 1 use',
		details: [
			"A large brown bottle full of dark, bitter beer. The label sports a block print of a crow with its beak wide, jagged noise-lines jutting out of its mouth. While it's being consumed, the drinker will boast loudly and incautiously about their deepest secrets, whether or not said secrets are worthy of boasting about."
		],
		recharge: ''
	},
	{
		id: '7a145784-504c-459c-815e-5572859aee55',
		title: "Contender's Belt, 3 charges",
		details: [
			'A wide belt of creased black leather, the large brass buckle shaped like a clenched fist. Unarmed attacks may be made as if enhanced (d12 damage).'
		],
		recharge:
			'Win a fist fight against a determined opponent while wearing the belt, without using its power.'
	},
	{
		id: '5688c0a5-4a67-4510-abce-4eaa0b7be51b',
		title: 'Wringing Wings, 2 charges',
		details: [
			"A very tight choker necklace decorated with the feathers of a domestic bird. The feathers rustle and catch the wind, allowing the bearer to fly for as long as they can hold their breath as they're painfully choked by the necklace."
		],
		recharge: 'Wring the neck of a domestic bird and weave its feathers into the choker.'
	},
	{
		id: 'dc6b29c2-333b-4630-ad93-53125199c3d8',
		title: 'Covenant Quill, 1 charge',
		details: [
			'A feather quill, black flecked with gold. When a contract is written with this pen, all who sign in agreement are magically compelled to follow its tenets, except the one that wrote the terms.'
		],
		recharge:
			'Abstain from reading or writing for a full lunar cycle, while keeping the quill on your person.'
	},
	{
		id: '21826ae2-cec2-496b-b0b5-d8b5140bc25d',
		title: 'Ghoul Fingers, 3 uses',
		details: [
			'A bundle of three severed human fingers, gray and partially mummified. The fingers can be snapped if bent against the joint, releasing a puff of dust. Anyone that inhales the dust is temporarily paralyzed, takes d8 DEX damage, and gains a permanent immunity from sleep and charm effects.'
		],
		recharge: ''
	},
	{
		id: '24b03911-343c-44ae-afab-f85771b1ba7a',
		title: 'Rune of Thud',
		details: [
			"A heavy, palm-sized plate of shale with a strange symbol scratched deeply into the face. When pressed to a mundane or magical lock, roll a d6. On a 1-5, the lock unlocks silently. On a 6, the shale cracks with a thud that echoes for miles, leaving the bearer's hand temporarily numb and weakened from the shock."
		],
		recharge:
			'If the cracked Rune is placed in a locked receptacle, the next time an unsuspecting thief picks the lock they will find the rune whole and functional within.'
	},
	{
		id: '82b050e8-a4b8-4f9b-b411-614d2a692563',
		title: 'Vibramail, 1 use',
		details: [
			'A full suit of armor made of long metal bars running horizontally (2 armor, _bulky_).',
			"Moving in the armor causes the bars to knock together and vibrate, creating pleasant, resonant, and decidedly un-stealthy musical tones. When the wearer is reduced to 0 STR, all of the bars activate, vibrating and ringing out. The wearer's death is delayed, their body is held together and energized by the vibration, allowing them to stay on their feet and function as if they had 18 STR. This lasts until the sustained tone of the mail builds to a deafening level and the bars shatter, about a minute or so. They then die normally."
		],
		recharge: ''
	},
	{
		id: '1bd4b34b-7ea3-412b-895e-c29ff1457485',
		title: 'Master Map, 2 charges',
		details: [
			"A folded sheet of waterproof vellum, brown and well worn. When opened a map of the local region blooms on its surface in a wash of ink, showing major geographical features and all nearby settlements. At the cost of one charge, write in the name of a place that does not appear on the map but that is known to exist somewhere in the region. The label will move, settling on this place's actual location on the map. The label spontaneously appears on all other extant maps of the region."
		],
		recharge:
			'Sleep with the map under your pillow. When you wake, the map will have consumed your memory of the location of a place important to you, one that is not widely known.'
	},
	{
		id: '6949623f-d77f-4398-a2b8-be84c11cb00e',
		title: 'Sack of Schemes, 1 charge',
		details: [
			"A rust-colored suede bag that hosts a mischievous spirit and its host body, a random animal no larger than a dog. The host body shrinks to the size of a walnut while it is inside the bag, growing back to its normal size when it is released. After release, the spirit can be commanded for an hour, after which it will act according to its own capricious will. The spirit can speak in a wry, singsong voice regardless of its host body. If harm comes to its host body while or after it's been possessed, the spirit will become hostile toward the bearer."
		],
		recharge:
			'Return the spirit to the sack. Its host body is spit out unharmed, the spirit bored of its form. An appropriately-sized creature of a species the spirit has never possessed before must be captured in the sack before it can be released again.'
	},
	{
		id: '7eb5ffd4-f752-48ed-802e-572d9d0868cd',
		title: 'Mug of Good Health, 3 charges',
		details: [
			"An oversized mug of cracked earthenware. When filled and raised with a hearty toast, everything in earshot capable of hearing must pause what they're doing for a moment and return the toast, raising whatever item they hold in their hand."
		],
		recharge:
			'Offer to share a drink with a hostile creature, then convince them to agree of their own free will.'
	},
	{
		id: 'c464c9ba-1534-4abd-b116-441668096843',
		title: 'Wrenpenny Bit',
		details: [
			'A small copper piece in the local style, save the chubby little wren printed on its transverse. Its most recent previous owner always has an instinctive idea of the direction the coin lies in, and in their presence it will let out a chittering birdsong.'
		],
		recharge: ''
	},
	{
		id: '7d6f5bc9-9df7-4007-9053-10fc4dd7f4c5',
		title: 'Sanguine Lantern',
		details: [
			"A rectangular lantern with frosted, brown-stained glass. It's sealed tightly, with angular symbols scratched into the joints. A small reservoir on top feeds fuel to the petty Fae sealed inside, who illuminates the lamp with a pure white light.",
			'The only fuel the Fae accepts is a good quantity of blood from whoever will be carrying the lantern (d4 STR damage for an hour of light). It gets irritated by attempts to trick it with other blood, and may attempt an escape if aggravated enough.'
		],
		recharge: ''
	},
	{
		id: 'e0052e0f-a782-4efb-b8ce-29a24948519b',
		title: 'Whisperwing, 3 charges',
		details: [
			'A brown and cream moth wing contained in a small box fashioned from an acorn. Releasing the wing from the box mutes all nearby noise for the time it takes to flutter to the ground.'
		],
		recharge:
			'Find a Whispermoth and convince it to trade you for one of its own wings. They tend to be understanding and agreeable, as long as you make the trade with a delicate hand and speak in a hushed voice.'
	},
	{
		id: 'b535f20a-aa1d-4b21-aaf6-97c8914313c9',
		title: 'Peregrine Pellets, 3 uses',
		details: [
			'A snakeskin pouch with three large bird pellets inside. They smell of tobacco. When the pellet is torn in half and consumed by two people, they learn a common, secret language that only the pair can understand.',
			'The aesthetics of the language are peculiar to that pair. It may be communicated through sound or gesture, but there is no written version. The language cannot be deciphered by anyone else through mundane or magical means, and it cannot be taught to anyone but the original pair.'
		],
		recharge: ''
	},
	{
		id: 'ab4162a6-5b72-428d-8581-d83d49007b53',
		title: 'Birch Barque, 1 charge',
		details: [
			'A folded sheet of pure white tree bark. When refolded into a toy dinghy and placed in a body of water it grows into a sturdy 8-footer with a remarkable resistance to capsizing, even in the roughest of waters. When you finish your journey, the bark will unfold back to its normal size, now soaked through and useless.'
		],
		recharge:
			'Catch a fish under the full moon from a sacred pool or river. Wrap it in the bark and cook it, then give the fish back to the water. The bark will float back to the surface, pure white and whole once more.'
	},
	{
		id: '454d63a4-cfb5-4104-9e0f-c215ee1ff70d',
		title: 'Frostberry Sprig, 4 charges',
		details: [
			"A small branch from a dark-leaved bush, laden with 4 ice-blue berries. The core of the branch is still green and lively. Plucking a berry and crushing it releases a blast of chill that leaves your fingers frostbitten. It might be useful to extinguish a fire, obscure someone's vision with rime, or momentarily freeze a limb in place."
		],
		recharge:
			'Plant the end of the branch in the carcass of a freshly-killed hare, then let it sprout outdoors over three nights, undisturbed in the bitter cold. On the third morning, you will find the hare whole and healthy, nibbling at the leaves, and d6 fresh frostberries.'
	},
	{
		id: 'a397ea85-1d81-421e-a4cf-bcc9847fa803',
		title: 'Crooked Canteen, 3 charges',
		details: [
			"A large flask, made of polished, deeply furrowed wood. The cap is attached by a silver ring, held closed with a pin. At the cost of one charge, twist the pin;  whatever fluid is inside is replaced with half a canteen-full of water. Twist it back, and the original fluid reappears. Handy for carrying extra water on journeys, hiding your best brandy from your fellow adventurers, or to convince a rival that there really isn't any poison in there, after all."
		],
		recharge:
			'Dowse and dig out a fresh well or untouched spring, or any source of water that has never before passed mortal lips. Fill the Canteen to the brim.'
	},
	{
		id: '9b8806c9-afa7-4d48-8a8a-a47f823d19b0',
		title: 'Bidding Bones, 3 charges',
		details: [
			'A pair of graying deer ribs cut to size for rhythmic performance. One has a crude skull etched into its surface, the other a skeletal hand. When played, they can be used to control the bones of another creature. If they still live, the effect is brief, a single instant of abrupt bodily control that may only be enough to foil another physical action. If they are dead or undead, the effect lasts for as long as the bearer can continue playing.'
		],
		recharge:
			'Stand at the edge of the dark wood, and throw one of the Bones overhand as far as you can into the tangle. Keep your eyes tightly shut as you enter to recover it. Do not peek, and do not respond to the taunting whispers of the dead that greet you.'
	},
	{
		id: 'c55e0157-8fea-4095-a857-cb4125574fea',
		title: "Grand Gob's Seal, 1 charge",
		details: [
			'A wax stamp made of rocks, sticks, a bird skull and a rat tail. A paper stamped with this seal in greenish-yellow wax will be considered by any goblin as an order from the Grand Gob themself.',
			'At the cost of a charge, stamp a schematic describing a wondrous contraption or magical item, and gather a pile of shiny stones, straw, bugs, fungi, or the like into a pile vaguely shaped like said item. The pile binds together, and functions as the item described for about an hour. It then fails catastrophically.'
		],
		recharge:
			'Supplicate before the Grand Gob, describing in flowery terms how inferior you and your fellows are to their magnificence. Beg a boon of them - if impressed, they will provide a small, probably slimy token to tack onto the seal.'
	},
	{
		id: '22b10da1-03ec-45b4-8c4d-63fcf581c920',
		title: 'Skull Cap, 1 charge',
		details: [
			"A helmet that transforms the bearer's head into the appearance of a skull until dawn."
		],
		recharge: 'Bury with human bones for one night.'
	},
	{
		id: 'd66ff1e0-46fa-476f-889a-2cf8c40634ec',
		title: 'Hood of Silence, 2 charges',
		details: [
			'A hood that envelops the bearer in complete silence, both unable to hear and speak.'
		],
		recharge: 'Meditate in absolute silence for 1 hour with the hood pulled up.'
	},
	{
		id: 'c3a5bd64-3baf-4b55-a7ae-4cffc94d8d6d',
		title: 'Pouch of the Herbalist, 1 charge',
		details: [
			'Produces a small amount of herbs or magical reagents that are present within 5,000ft. of the bearer.'
		],
		recharge: 'Place any kind of herb within the pouch and close it for one day.'
	},
	{
		id: 'e783dc17-3d53-42a2-bf0a-73fcae66a09a',
		title: 'Dagger of Returning, 3 charges',
		details: ["A throwing dagger that returns to its bearer's hand if it misses its target."],
		recharge: 'Hit any target three times in a row.'
	},
	{
		id: '60bd5999-7a8c-4e6a-b6ce-9f17d8d2b75b',
		title: 'Chainmail of Quick Assembly, 2 charges',
		details: [
			'A disassembled chainmail armor that instantly assembles itself onto its bearer using a command word. Say the command word again to disassemble it into its pouch.'
		],
		recharge: 'Soak the chainmail in oil for 1 hour.'
	},
	{
		id: 'f770731f-4de7-474e-ab64-35eb71032970',
		title: 'Bracelet of Slithering, 2 charges',
		details: [
			"A jade bracelet that transforms into a 10 STR / 11 DEX / 8 WIL venomous snake under the bearer's control."
		],
		recharge: 'Feed the snake with something living.'
	},
	{
		id: 'fbaeb95d-cf7f-4f45-b143-603c1db5c6a5',
		title: 'Rope of Attachment, 5 charges',
		details: ['The end of this 50ft. rope attaches to any surface. Pull twice to release it.'],
		recharge: 'Cut off 5ft. of the rope.'
	},
	{
		id: '1d2689e7-2be0-4a47-982b-8acaa783be02',
		title: 'Candle of Darkness, 7 charges',
		details: ['A candle that emanates pure darkness instead of light in a 10ft. radius. '],
		recharge: 'No Recharge.'
	},
	{
		id: 'b7f60499-3c9a-4882-b4a0-45ba06577d44',
		title: 'Shield of Magnetism, 5 charges',
		details: [
			'When a metal weapon is blocked with this shield, the weapon gets stuck to the shield.'
		],
		recharge: 'The shield must be hit with a direct lightning strike.'
	},
	{
		id: 'dd8a6912-3293-4a21-97d3-1abe45b958ab',
		title: 'Rock Shovel, 1 charge.',
		details: ['Shovels solid rock like it would be dirt.'],
		recharge: 'Spend 1 hour shoveling dirt in the rain.'
	},
	{
		id: '813e56fe-a06f-41bc-95b6-53c795b39730',
		title: 'Last Breath, shortsword, d8 damage, 1 charge',
		details: [
			'Plunging **Last Breath** into the ground creates an [_Astral Prison_](/cairn-srd#100-spells) around the bearer. The bearer is invulnerable to harm but unable to move while contained in the prison.'
		],
		recharge: 'Feed it the souls it needs to build the prison.'
	},
	{
		id: '0e586253-560c-447d-9d0b-e9c31073871e',
		title: 'Sword of the Holy Knight (d6), d6 charges',
		details: [
			'When attacking an undead enemy with this silver sword, you can expend one charge to ignore HP and deal damage directly to STR.'
		],
		recharge: 'Bathe in holy water and let dry completely in the morning sun.'
	},
	{
		id: '90854db2-8b47-4f5c-97c5-a125b76ec19e',
		title: 'Cloak of Displacement, 3 charges',
		details: [
			'A shadowy cloak that moves gently even when there’s no wind, the fabric is perfectly smooth, as if made of pure night. When suffering combat damage, you can spend one charge to ignore that damage.'
		],
		recharge: 'Leave it under the open sky for the entirety of a moonless night.'
	},
	{
		id: 'ef0719ad-8d2a-4d80-9b04-9d83dd54ac8b',
		title: 'Bracers of Strength, d6 charges',
		details: [
			'A pair of copper bracers long enough to cover the most of the wearer’s forearms. While wearing these bracers you can expend one charge to automatically succeed in a STR save. You must do so before rolling the dice.'
		],
		recharge: 'Defeat a foe stronger than you in combat.'
	},
	{
		id: '1d6255e4-025d-451c-b08d-a2af228f81d1',
		title: 'Necklace of Fireballs, 1 charge',
		details: [
			'A necklace with a small ruby dangling from it. It can be thrown, summing a burst of flames in the area around where it landed, dealing d8+d8 damage to all caught.'
		],
		recharge: 'Leave it in a raging bonfire until the flames end naturally.'
	},
	{
		id: '8e360128-0962-4a93-aac3-47e1dc85a125',
		title: 'Murder Minion, dagger, d6 damage, 1 charge.',
		details: [
			"Mortally wounding it's victim, traps them inside the blade.",
			'Pressing the mouse skull on the handle frees them to do the bidding of the wielder before they perish.'
		],
		recharge: 'Murder Minion by actively cleaning it in ice water for half a day.'
	},
	{
		id: 'ebd388db-f39e-4e35-aa7d-4e8f7b26d1ae',
		title: "Forgotten Sword-Master's Blade d8 damage, 2 charges",
		details: [
			'Worn and weathered blue-gray longsword imbued with the memory of an ancient sword master, renown for his ability to duel multiple opponents at once.',
			"Channeling the forgotten master's memory produces a whirling flourish, attacking all enemies around them within 10 feet (up to four) for d6 blast.",
			'On critical damage save vs DEX or be disarmed.'
		],
		recharge: 'by defeating another worthy opponent in a duel or disarming an enemy in combat.'
	},
	{
		id: '840c7e78-05ef-428a-92ce-a0bc98786782',
		title: 'Cloak of the Monarch Queen, 3 charges',
		details: [
			'Faded black great-cloak with orange and white geometric patterns.',
			'Dash or fly swiftly across distances of 30 feet.'
		],
		recharge:
			'by jumping from heights of 50 feet or greater, or from spending an hour adventuring through furious winds.'
	},
	{
		id: '45f38a69-0e47-42e6-96ce-3d30ef0675e3',
		title: 'Mirror Mirror, 1 charge',
		details: [
			'Large round mirror about the size of a wagon wheel. Framed in a swirling art-nouveau confection of green-glazed clay.',
			'If you position yourself between Mirror Mirror and a mundane mirror and observe your infinite reflection between them, Mirror Mirror remembers the mundane mirror.',
			'You can always look into Mirror Mirror to see the current reflection in any mundane mirror it remembers.',
			"For one charge, you may reach through Mirror Mirror and out of any mundane mirror it remembers; as little as a limb, or as much as your whole body. When you withdraw your limb or emerge from another mirror, Mirror Mirror cracks down the middle, and a faint after-image of your person is etched into all other mirrors in Mirror Mirror's memory as it forgets them, one by one."
		],
		recharge:
			'locate every mirror etched with your after-image and thoroughly scratch out your face until it is unrecognizable. Sleep with Mirror Mirror under your head, and survive the onslaught of shattered reflection-selves that swarm you in your dreams, and you will find it healed and whole when you wake.'
	},
	{
		id: 'd93cf9c4-308a-4c2d-9205-4043a156d165',
		title: 'Dowsing Rod, 1 charge',
		details: [
			'Pick a general type of object or material. The rod indicates distance, direction and quantity to nearest match.'
		],
		recharge: 'Expose to lightning or powerful electricity.'
	},
	{
		id: '16a9445d-6cd1-42fb-bdfd-52e80c8b9b70',
		title: 'Snakeskin Boon, 1 charge',
		details: [
			'Over the course of several hours, you can painfully shed your skin, losing 1d4 STR.',
			'After this time, you reveal a new skin, broadly the same as your previous, but with new features, seen or imagined.'
		],
		recharge: 'Devour every scrap of the skin of a giant snake.'
	},
	{
		id: 'd2c6db8b-fd1c-49fc-83fb-c2e33413e9f5',
		title: "The Dwarf's Cloak, 1 charge",
		details: [
			'A lambskin cloak, taken from a dwarf, which renders its wearer invisible.',
			'Burns to ash if exposed to sunlight.'
		],
		recharge: 'Eat seven ounces of human flesh.'
	},
	{
		id: 'c173f7ec-0e14-48f6-b9c5-49a7259449ba',
		title: ' Wand of the Thousand Paths, 1 charge',
		details: [
			'A walking stick with a big eyeball on top',
			'You can fixate on the eye to see the outcome of one action in the immediate future (play it out and the player decides to confirm it or not) and then the eye shuts'
		],
		recharge: 'move exclusively in the same direction as the wind for a day'
	},
	{
		id: '713240ec-6051-406a-a7a6-e72ab1a764f7',
		title: 'Blade of Mighty Thews, 3 charges',
		details: [
			'A dark red shortsword with inscriptions of scenes of ancient battles on it.',
			'Spend a charge to give yourself the strength of a demigod for the length of a single feat (bend bars, lift gates, hurl boulders)'
		],
		recharge: 'It deals a killing blow to a creature stronger than any human, living or dead.'
	},
	{
		id: '81a789d0-8c64-4150-981a-da81fa1c481e',
		title: 'Bird Bomb, 1 charge',
		details: [
			'Fragile egg that releases an incredible stench that makes all folks around it vomit. How do you carry such an item? What happens if the egg breaks in your pack during combat?'
		],
		recharge: 'Bury the shell in a grave. The next morning there will be three more eggs there.'
	},
	{
		id: 'cc4c46bc-b705-4d21-b2e8-8ec88865b00e',
		title: 'Decayed Wooden Sword',
		details: [
			'Seems like a real sword when wielded.',
			'Does only d4 damage but victims look brutally wounded for a moment, even when the weapons misses.',
			'Breaks on roll of 1.'
		],
		recharge: ''
	},
	{
		id: '82bfcfc3-233f-44e6-b71b-f47aa6a52287',
		title: 'Twinvine',
		details: [
			"A 16' length of verdant, sticky rope.",
			'Wrap once around an object and plant an end in the earth. A replica of the wrapped object grows overnight.',
			'The rope remains, its length halved.'
		],
		recharge: ''
	},
	{
		id: '1e907878-ceeb-4fe6-be2a-c72a485490d2',
		title: 'Map of the Predator',
		details: [
			'A blank leather parchment. Spill blood onto it and it will be absorbed.',
			'Later unroll to reveal a clear map of wherever the remaining blood is.',
			'The effect ends when the map is a few feet from its target.'
		],
		recharge:
			'the parchment must be wholly ingested then defecated by any creature that hunts via blood-scent. Wolf, Tiger, Shark, blood-fly, etc.'
	},
	{
		id: '7a05db2a-0ea2-4986-b683-9d2af8590162',
		title: 'Honest Earworms',
		details: [
			"A wriggling worm the size of a child's pinky finger. Smells awful. Drop into a person's ear and they will reveal the truth, despite themselves."
		],
		recharge:
			'Search the forest for the largest pile of decayed leaves you can find. Then, scream your most personal secrets, thoughts, and desires into the air. Then eat as much of the leaves and detritus as you can. The next day you will awaken to find 1d4-1 larvae, sprouting from your ears.'
	},
	{
		id: 'a05beb44-10ba-455e-8fdd-bee2daa1fad3',
		title: 'Holy Avenger (sword, d8)',
		details: [
			'Undead creatures automatically fail critical damage saves caused by this sword.',
			'You and nearby allies are immune to fear and charm effects, but are compelled to jump headfirst into battle.'
		],
		recharge: ''
	},
	{
		id: 'aebe98e2-68cf-476d-bda9-cf566e7ee783',
		title: "Dreamwalker's Veil, 3 charges",
		details: [
			'A robe made of shimmering, almost transparent purple silk.',
			'By spending one charge, the wearer can fully ignore one instance of damage to WIL.'
		],
		recharge: 'Wear the robe during a full night of magically induced sleep.'
	},
	{
		id: '41c1a502-246c-4bb0-9d1f-a82702480789',
		title: 'Hand of Ser Crufiks, 1 charge',
		details: [
			'Hounds and other domesticated beasts grow docile at the touch of this mummified hand.'
		],
		recharge: 'Spend some time petting the good boy.'
	},
	{
		id: '63252ec1-755d-44eb-a44a-350453fa6e17',
		title: 'The Thing That Destroys the World',
		details: [
			'A steel cube 2 inches (5 centimeters) on a side, with a red button taking up most of one face.'
		],
		recharge: ''
	},
	{
		id: 'e8f746cb-b52f-461a-a14c-1005b0f0dbef',
		title: 'Amulet of Life Protection, 1 charge',
		details: [
			'A simple bronze disc inscribed with an ancient symbol. The symbol is lined with a deep red pigment.',
			'The wearer automatically succeeds on a critical damage roll, the wearer can not choose whether to succeed or not.'
		],
		recharge:
			"Bury the now faded amulet amidst the roots of a Rowan tree. Hang upon the branches, a fresh umbilical cord from either livestock or babe. If either the child or animal was harmed while procuring this, the magic won't work. The umbilical cord must dry out completely while hanging on the branches. Afterwards you can dig up the amulet which now will look renewed with fresh pigment."
	},
	{
		id: '937119d3-2b96-4c30-9734-136d99776093',
		title: 'Ring of Spell Protection, 1 charge',
		details: [
			'A thin band of a blueish metal inlaid with a pearl.',
			'The wearer can choose to negate the effects of a spell that targets them.'
		],
		recharge:
			"Store the ring in a bird's nest within earshot of a church with a bell, for at least a fortnight."
	},
	{
		id: 'ab9c0801-bf4b-46b1-924d-4d64b457a44e',
		title: 'Halberd of the Moon, 3 charges',
		details: [
			'A masterfully crafted polearm with a crescent shaped axehead. Decorating the blade and spikes are silver inlays in swirling motives.',
			'If the blade is reflecting natural moonlight, the wielder can expend a charge and treat the weapons attacks as enhanced, furthermore every time a creature is struck with the halberd they are harmed by moon poison taking 1 point of willpower damage.',
			'In the light of a full moon, the wielder can expend all 3 charges and "cleave" a walkable passage through a body of water lasting until the moon becomes invisible.'
		],
		recharge: 'Place the halberd in its intended place in the moon-temple for 1 year.'
	},
	{
		id: '867b21b6-1a79-4693-b2f8-ff1250d6a637',
		title: 'Iron Gloves of Might',
		details: [
			'Mittens made of dark iron rings, they look crudely made and there seems to be old scorch marks and bloodstains on them.',
			'When they are put on, the bearer immediately gains 1 fatigue and then again one more each hour they are worn. If the wearer ever gets 7 or more fatigue, they collapse and die within the hour. This danger should clearly be telegraphed by the Warden.',
			"All attacks are enhanced while they are worn and all feats of strength involving the wearer's arms/hands automatically succeed."
		],
		recharge: ''
	},
	{
		id: '851d1aa3-cbe4-4141-868f-91132193a17a',
		title: 'Polymorphing Mirror',
		details: [
			'Holds the image of one thing. If a living creature looks into the mirror or if an inanimate object is held before the mirror they are transformed into the reflection. The image in the mirror is lost.',
			'An animated creature can only be turned into another animated creature and an inanimate object can only be turned into something inanimate.'
		],
		recharge: ''
	},
	{
		id: 'aa693f6a-901d-4c6d-8481-437ee6b4ace2',
		title: 'Sword of Ashes (d8), 5 charges',
		details: [
			"A simple straight sword covered in ash and soot, it's edges are ridden with nicks and signs of wear.",
			"The wielder must be Deprived to activate it's magical properties.",
			"At the expense of 1 charge, the swords blade is set ablaze with a dark red flame that produces a thick black smoke. All attacks made with the sword are enhanced and anytime it deals strength damage it ignites it's target. The flame lasts until the wielder sheaths it, puts it down or no longer is deprived."
		],
		recharge:
			'Prepare a large bonfire and douse the blade in a mixture of animal fat, resin and pine needles. Then wrap it in cloth that someone was buried in and place the sword in the bonfire. Light it and wait for it to go completely out, you can then retrieve the sword.'
	},
	{
		id: '7a3594b2-e714-42e8-a5e4-229fd7e9beb0',
		title: 'Manual of the Mighty',
		details: [
			'Also known as the _Volume of the Nimble_ or the _Tome of the Wise_.',
			'A large, old-looking three-volume book with yellowed pages and a beaten cover.',
			'It takes at least a month to study it and by doing so, you can increase your STR, DEX, or WIL score (depending on the book) by 1d4 points to a maximum of 18.'
		],
		recharge:
			'Place the book on a shelf in the fabled long lost library of shadows, and leave it there for 12 years.'
	},
	{
		id: '3460b171-55f8-4670-8ed9-c37425bfb481',
		title: 'Wolfskin, 2 charges',
		details: [
			'A cloak made from the skin of a wolf.',
			'The wearer and all their possessions transform into the form of mundane wolf. For each charge spent the effect lasts 3 hours.'
		],
		recharge:
			"While not using the Wolfskin, hunt and kill a prey and consume it's heart and liver raw."
	},
	{
		id: '40517560-db5a-4672-a98f-3d5c437be141',
		title: 'Golden Apple of the Gods, 1 use',
		details: [
			'A perfectly shaped small golden apple.',
			'When the apple is consumed it de-ages the consumer to their personal ideal age.'
		],
		recharge:
			'If the seeds are planted in soil it might grow into a tree, but this act would surely anger the gods.'
	},
	{
		id: 'a353c123-8452-4117-bf22-896c8fa02c17',
		title: 'Coin of the Ill-fated',
		details: [
			'Each time a Die of Fate would be rolled where the owner would be affected, treat the dice roll as a 1.',
			"The owner can't get rid of the coin by normal means.",
			'**Break curse**: Another individual must accept the coin by their own admission, while being aware of the curse.'
		],
		recharge: ''
	},
	{
		id: '4b94831f-4e53-4b15-b1d2-42292b3ff3ab',
		title: 'Snail Boots',
		details: [
			'Pale boots with slime under the soles.',
			'Boots reduce movement range to 6m per turn.',
			'**Break Curse**: Can only be taken off after a day of absolute standstill.'
		],
		recharge: ''
	},
	{
		id: '1faa2ea5-2bc3-48a6-b5e2-09a1612d8b88',
		title: 'Chalice of the Blessed Blood, 3 charges',
		details: [
			'A golden chalice adorned with rubies.',
			'If the chalice is filled with a liquid that is not blood, it turns to blood. If the chalice is filled with holy water it shatters.',
			'If blood is poured into the chalice a charge is expended, the blood turns dark and viscous. If a full chalice of this blessed blood is drunk, the drinker regains all lost strength and hp. If someone ever drinks blessed blood from the chalice 3 times they slowly transform into a foul vampiric creature.'
		],
		recharge: 'Wash the chalice in the blood of a vampire.'
	},
	{
		id: '7031c536-c19e-47ff-a579-680c61cfcfa1',
		title: 'Mask of Seven Faces, 7 charges',
		details: [
			'A plain porcelain mask with discreet facial features.',
			"By expending a charge, the wearer can change the mask's features to look like an exact copy of another person's face.",
			'Recharge: A doppelganger has to wear the mask.'
		],
		recharge: ''
	},
	{
		id: 'd5fc1d5f-d45d-46a3-b765-5b356cd4780c',
		title: 'Wand of the Good Folk, 3 charges',
		details: [
			'A stick made from an apple tree, decorated with carved motifs of grinning faces surrounded by spring flowers.',
			'Can cast the Charm, Sleep or Fog cloud spell by expending a charge.'
		],
		recharge:
			'While proudly brandishing the wand, dance from sundown till sunset inside a fairy ring, or until you collapse from exhaustion.'
	},
	{
		id: '164e272d-48fe-4263-8414-0a0789b91990',
		title: 'Cloak of Stars, 6 charges',
		details: [
			'A long flowing cloak made from a bluish black material with no discernible fabric texture. There are bright twinkling stars all over the cloak.',
			"While wearing the cloak treat the wearer's maximum HP as 1 more than normal.",
			'By expending 1 charge, the wearer can pick a star from the cloak and use it as a throwing weapon, dealing d6 points of damage.'
		],
		recharge: 'Spread the cloak on the ground on a clear night and wait until morning.'
	},
	{
		id: '3fe5b0a6-1c15-46c3-aa02-c47cd3f5a11f',
		title: 'Elderstaff (d6), 3 charges',
		details: [
			'A slick staff made from a elder tree, it has carvings of elderflowers and birds in flight.',
			'By expending a charge you can cast Cure wounds, Shield or Thicket.'
		],
		recharge:
			'Make a mixture from jelly ears fungus and oil and rub it all over the staff 3 times. Place the staff by a homestead and wait a 3 days. While waiting help a mother in her daily tasks 3 times.'
	},
	{
		id: 'c71283aa-49e3-4ddd-b250-62f3f1a08238',
		title: "Claymore of Sky's Wrath (d10, bulky), 9 charges",
		details: [
			'A weather beaten greatsword covered in ancient runes.',
			'During lightning storms, all attacks made with this sword are enhanced.',
			'Expend 1 charge to create a local lighting storm, depending on the weather this may take a few hours.',
			'Expend 2 charges to channel a lightning bolt from the sky through the sword and unto a desired location. This deals d4 damage to you (armor is ignored) and d10 blast to the chosen location.'
		],
		recharge: 'Walk through a lightning storm holding the sword until lightning strikes it.'
	},
	{
		id: 'c2fde8d4-6532-4b25-9c55-0c63a3824718',
		title: 'Vinegar of sour moods, 4 uses',
		details: [
			'A bottle of old wine vinegar, bewitched by a grumpy warlock.',
			'When any food or drink are prepared using the vinegar, all who consume it are affected by the Hatred spell. They hate the first person they see.'
		],
		recharge: ''
	},
	{
		id: '9298b1fa-d4f4-4792-a8d6-4417739f0104',
		title: 'Goblin sack, 1 charge',
		details: [
			'A brown sack in terrible condition, with a small hole in one corner.',
			'Fill the sack with leaves, nutshells, spruce needles etc. and expend a charge. When the things eventually trickle out through the hole in the bottom corner, they appear as shiny silver coins, 100 in total. When 1 hour has passed the coins revert back to being forest debris.'
		],
		recharge: 'A goblin has to spit in the sack.'
	},
	{
		id: '62bba276-337e-49fa-be8b-3e899faef11e',
		title: 'Staff of Sparks (d6), 6 charges',
		details: [
			'A long walking stick made of Fir wood. It has a carved top resembling a star.',
			'Expend 1 charge to cast Flare or Smoke Form. Expend 2 charges to cast Elemental Wall (only fire).'
		],
		recharge: ''
	},
	{
		id: '824802d8-691d-4437-a491-111beefd8898',
		title: "Illusionist's Pipe, 5 charges",
		details: [
			'A long curved smoking pipe, cut from the roots of a pear tree.',
			'When smoking on the pipe, you can make the smoke change color and form as fantastical shapes (ex. galloping horses).',
			"When smoking on the pipe and by expending 1 charge, you can blow smoke in someone's eyes disorienting them with weird colors and shapes."
		],
		recharge: 'Rub the pipe against the nose of a gnome.'
	},
	{
		id: '011c563b-63da-453d-91d8-3e9b65e70b94',
		title: 'Hand of Glory',
		details: [
			'A pickled then later sun-dried, chopped off left hand of a hanged murderer with a candle attached made from said murderers body fat.',
			'Anyone seeing a lit Hand of Glory must make a Willpower save or be paralyzed while the candle are within their field of vision. If the light of the candle shines on any locked doors they unlock. The candle lasts a few hours.'
		],
		recharge:
			"As long as a new candle can be made from the same murderer's body fat, the hand can be reused."
	},
	{
		id: 'c80bb505-a0b9-4be0-a464-77709174531e',
		title: 'Paper Hand Trap',
		details: [
			'A colorful tube made of woven paper, adorned with depictions of circus performers, functioning as a larger version of the classic finger trap.',
			'Anyone who places their hands inside the tube is stuck for an hour as their hands are turned into paper.',
			'The device is magically designed to test patience, rather than brute force. If the tube is torn or cut open, the hands inside remain as paper and never revert to flesh.',
			'Up to 3 uses before the device unravels itself into a heap of paper strips and confetti.'
		],
		recharge: ''
	},
	{
		id: 'a63ee3e7-c28b-47e2-afeb-d724b5c58fbf',
		title: 'Witch Stone, 2 charges',
		details: [
			'A green petrified crow egg, warm to the touch. When a charge is expended the warmth wanes.',
			'By expending a charge, you can cast a spell without gaining a fatigue.'
		],
		recharge: 'Bury it in consecrated ground, wait 5 days and dig it up.'
	},
	{
		id: 'b2d7a200-c047-4fbb-9632-5007769dbfa4',
		title: 'Lyre of the Sea, 3 charges',
		details: [
			"A lyre crafted from red coral, with strings made from mermaid's hair.",
			'While playing the lyre and expending a charge, the user can attract a school of fish to their location.',
			'While playing the lyre and expending a charge, the user can create waves with increasing intensity as long as they keep playing.'
		],
		recharge: 'A siren has to kiss the lyre.'
	},
	{
		id: 'da026fbb-8d07-4584-8404-6d96315440ea',
		title: 'Ears of the Thief, 2 charges.',
		details: [
			'These large bronze ears are attached to each other with a copper head band and are worn on the head.  - When wearing the Ears they grant the wielder the power to listen to whatever is happening in another room by pointing their head toward a door or window.'
		],
		recharge: 'Cover the Ears completely in gold coins and bury them for a day and a night.'
	},
	{
		id: 'c380d1eb-dbcf-4966-9ce4-5ab65790eb01',
		title: 'Invested Hurt (d6), 10 charges',
		details: [
			'This razor thin shortsword hurts on initial cut and then once more when the victim moves (d4).'
		],
		recharge: 'Permanently end a meaningful relationship.'
	},
	{
		id: '02761e76-3426-4cd6-8d2d-2a7f3182c7cf',
		title: 'Heat Armor',
		details: [
			'A warm to the touch scale mail. Always keeps the wearer comfortably heated, no matter the ambient temperature.',
			'All fire and heat based damage caused nearby is absorbed by the wearer and enhanced against them.'
		],
		recharge: ''
	},
	{
		id: 'e870e03c-f861-471b-8be3-ddf1e99f5a2c',
		title: 'Spell Eater',
		details: [
			'An ornate little bronze box, devours all spells uttered in the vicinity for 1d4 turns.'
		],
		recharge:
			'Whoever opened the box must remain silent for as many days as spells devoured by the box.'
	},
	{
		id: 'af60a58c-a70f-4ab4-97cb-3d5f56f6c7ae',
		title: "Tosser's Coin",
		details: [
			'Ask a question that can be answered with yes or no and toss the coin. While in the air, you announce which side is yes or no. The coin answers truthfully.',
			"While in the air, you announce which side is yes or no. Act according to the coin's answer. If you don't act accordingly, your endeavor is cursed and the coin loses its powers forever."
		],
		recharge: ''
	},
	{
		id: 'd3b0c114-c7c0-47f0-9cc5-b104ad682e4d',
		title: 'Serving Bowl',
		details: [
			'If you serve food to somebody in your home, camp or a place of hospitality in this simple, wooden bowl, the person accepting the food can not harm you for a week.',
			'In the case of the coin and the bowl, I guess players should be aware of the recharge condition, but maybe not  of the consequences should they act against its spirit'
		],
		recharge:
			"Fill this bowl with food and bring it to those in need, every day for seven days. If you act stingy, the next time you eat from this bowl you'll choke. Only somebody else can save you."
	},
	{
		id: 'f1a8f9f4-2713-47c2-8075-20dba94bfcef',
		title: 'Black Bolt, 3 charges',
		details: [
			'Shot from a crossbow, this bolt always (well, 3 times at least) strikes true. Ignore armor on the damage roll'
		],
		recharge: "Shoot an apple off a party member's head."
	},
	{
		id: 'd84a6925-f261-4a9c-adfe-a86fbbe46e8e',
		title: 'Catacomb Saint',
		details: [
			"Speak a prayer in the saint's name to to animate this skeleton wearing golden armor adorned with gems. It will fight alongside you til either it or your foe is destroyed."
		],
		recharge:
			"You must return the saint to its catacomb, add a precious gem to its armor and let it rest for 12 weeks. Should you fail to do so, you'll earn the church's wrath. Cart required."
	},
	{
		id: 'c995182e-034c-4c00-a98f-cd721668b2ea',
		title: 'Scroll of the Giants, Spellbook, bulky',
		details: [
			'Breath of winter: a 60 ft cone of frost dealing d8 damage to all caught in it, it leaves the ground slippery with sheets of ice.',
			'Creeping fog: summon an unnatural cold fog that slowly fills a large area.',
			"Eye of Arghamok: One target creature must save against will or begin hallucinating horrors from their past. This curse lasts until the target gets a full night's rest."
		],
		recharge: ''
	},
	{
		id: '5dc7db3b-16be-4ba3-9457-0692bfce5a65',
		title: 'Thunderstalk',
		details: [
			'A bamboo staff in which a live hornet has been trapped. When the staff is struck against the earth the hornet’s wrathful spirit is roused and instantly summons a thunder storm. Every living thing not in shelter has a 1 in four chance of being struck by lightning, dealing 1d12 damage to organic creatures.'
		],
		recharge: 'with another live hornet.'
	},
	{
		id: '06f8de77-07fd-4d3a-9aba-8a66b93aaa0e',
		title: 'Memory Cap',
		details: [
			'3 charges. A large mushroom cap that can be thrown and returns to the thrower in a spiraling path, with a radius equal to thrower’s STR x 10. As it flies it scatters spores that emit a phosphorescent glow on the ground anywhere a creature has walked since the last sunset.'
		],
		recharge: 'place overnight in a dark box with soil enriched with centaur manure'
	},
	{
		id: 'd56ee4d2-6599-4360-95d9-f419119c2579',
		title: 'Flitterflare',
		details: [
			'3 charges. A small clay amulet in the shape of a firefly, with a compartment filled with nectar. When thrown, it hovers in place and attracts all fireflies within a half mile radius, creating a dazzling light (and darkening other parts of the forest). The flitterflare drops and the fireflies disperse after 1 minute.'
		],
		recharge: 'by filling with nectar.'
	},
	{
		id: '55284113-0299-40f4-b591-d713761cabd5',
		title: 'Birdnip Gourd',
		details: [
			'3 uses. A calabash container filled with dried birdnip, a rare herb that all birds find irresistible. Wherever the herb is sprinkled, in 30 seconds all birds in the area flock to the spot in a frenzy for 5 minutes and anyone caught in the middle suffers 1d4 peck/scratch damage per round until the birds consume all the birdnip or the victim jumps into water, sets themselves on fire, etc. The birds however maintain a five foot radius from the gourd and its bearer.'
		],
		recharge: 'Birdnip  only grows on mountainsides below peaks where rocs nest.'
	},
	{
		id: '63c898cd-82a9-4ef0-9039-078ccece0545',
		title: 'Warden’s Ruyi',
		details: [
			'3 charges. A peach wood ruyi scepter ornately carved with tree nymphs and talismanic writing. When the holder of this ruyi taps a tree and points to a spot within 20 feet of the tree, the tree will uproot, walk, and root in the indicated spot. The ruyi is charged by wood nymphs after the holder has done some (supposedly) small errand for them.'
		],
		recharge: ''
	},
	{
		id: 'af150a75-078e-44f4-9a75-8c5b0b2f00c5',
		title: 'Inkstone of Whispers',
		details: [
			'An inkstone from a sacred grotto where a forest hermit dwelt. If ink rubbed on this stone is used to write a target’s name on a leaf, all the leaves in the forest will whisper that name. If the target is within earshot, they are delirious for 1d8 rounds and must save against WIL or panic and flee for 1d6 rounds.',
			'The ink cannot be used to write the same name more than once. The ink must be used fresh or it becomes ordinary ink.',
			'Rubbing the ink and writing the name takes 3 turns. Ink rubbed in this stone is only effectual when using spring water from the same grotto whence the stone was taken.'
		],
		recharge: ''
	},
	{
		id: '2a8ae6ea-7f32-4b98-a585-72fb5cfc7aee',
		title: 'Inversion Pot',
		details: [
			'A squat clay teapot with a crane carved in one side and a centipede on the other. If a poisonous plant is steeped in this pot, the resulting tea is its antidote Likewise beneficial herbs steeped in this teapot produce poison.'
		],
		recharge: ''
	},
	{
		id: '1fdb54f9-2712-4a36-8d35-c7daca509feb',
		title: 'Tiger and Deer Scroll',
		details: [
			'A scroll painting depicting a tiger stalking three deer through a wooded mountain landscape. If the bearer opens this scroll facing enemies, the scroll will absorb a single enemy of the bearer’s choice, who then appears in the painting. In exchange, one of the beings in the painting incarnates in the PC’s dimension. **Roll 1d4**: 1-3 one of the deer appears and bounds away. On a 4, the tiger appears and immediately attacks the bearer of the scroll.'
		],
		recharge: ''
	},
	{
		id: '1d91852f-e5ac-4f8e-8f61-2689734b326f',
		title: 'Thunderbolt Javelin (d12, ignores armor), 1 charge.',
		details: [
			'A javelin wrought in a single piece from solid copper. When thrown, it turns into a bolt of lightning. It turns back into a javelin immediately thereafter.'
		],
		recharge: 'Make it get struck by lightning.'
	},
	{
		id: 'a130beaf-227d-4ffd-b655-510d8920670e',
		title: 'Speakstick, 3 charges.',
		details: [
			'When touched to a dead body or place of resting, allows you to speak with their ghost provided they have unfinished business.'
		],
		recharge: "Finish a ghost's business."
	},
	{
		id: '4bbed1a7-a1c0-4f84-a410-f89de28fd59a',
		title: 'Reading Glass, 1 Charge',
		details: [
			'This unassuming magnifying glass is inhabited by an entity from the beyond.',
			'When used, the entity will translate any language, written or spoken for 1 hour. The entity communicates telepathically and always speaks in a different voice.'
		],
		recharge: 'Tell the entity a shameful secret.'
	},
	{
		id: 'a91b64e8-a94d-4e68-b8fc-7dff4436610c',
		title: 'Brawlers teeth.',
		details: [
			'A pair of large, pure gold front teeth. When placed into your mouth, unarmed attacks are now d6+d6.',
			'On a failed critical damage save from a bludgeoning attack, you can choose to instead have the teeth knocked out. You can never get them back in.'
		],
		recharge: ''
	},
	{
		id: '85e8563f-bdd7-42ac-b678-9551c0b7d7a2',
		title: 'Staff of Serpents (d8), 4 charges.',
		details: [
			'Staff carved from jade in the shape of a long serpent.',
			'Attacks with the staff have **Critical Damage**: The victim loses d6 STR and is **Deprived** until it fully rests.',
			'Touch the staff to the ground and spend 1 charge to summon a **Serpent** (see below).',
			'Spend 4 Charges to instead summon a **Giant Serpent** (same stats, but Detachment Scale).'
		],
		recharge: 'Drip the venom of four different serpents into the mouth of the staff.'
	},
	{
		id: '84469d13-87d6-4ed1-8ff9-ea0afcdd44ca',
		title: '#Serpent',
		details: ['3 HP, 12 DEX, bite(d6), Critical Damage: Victim loses d6 STR.'],
		recharge: ''
	},
	{
		id: '5a308469-0ab0-45cc-8519-0cba2438cd30',
		title: 'Trident of Submission (d8), 3 charges.',
		details: [
			'A mother-of-pearl trident adorned with narwhal tusks.',
			'When attacking, spending a charge forces the target to make a successful WIL save or surrender.'
		],
		recharge: 'Become the slave of a companion for one week.'
	},
	{
		id: 'e139a683-f2ec-404f-bfb2-f4b20f39f8cb',
		title: 'Devourer, 1 charge',
		details: [
			'A small black bead. When the bead is shattered and the name of a creature is spoken, a spirit emerges from the bead and devours that creature.'
		],
		recharge: 'Sacrifice a true friend or ally to the bead, and bind their soul within.'
	},
	{
		id: '915cb8ab-e382-4664-a3a6-821b430ffaab',
		title: 'Dial of the Gods',
		details: [
			'A small, ordinary looking sundial and a round yellow pebble. By holding both at once, the bearer can change the actual position of the sun. It snaps back once one or both items are dropped.',
			"Every time this item is used, roll 1d6. On the first 1, the sun goes away for a day, and comes back dimmer. On the second 1, if goes away for a month and comes back red. On the third 1, it goes away and doesn't come back."
		],
		recharge: ''
	},
	{
		id: 'd42298cc-2d67-4c37-addc-442d6e0a57eb',
		title: "Fizzletrick's Hourglass of Spiteful Inversions, 1 charge.",
		details: [
			'An hourglass that seemingly has an unending flow of sand pouring down.',
			'Inverting the hourglass and placing it on a surface will invert the object it was placed on, rapidly and violently.',
			'Spend more charges to invert larger objects.',
			'Rumored to be hidden in the upside ruins of a city.'
		],
		recharge:
			'Allow the hourglass to rest for the length of a season, gain more charges with additional seasons of resting.'
	},
	{
		id: '129fe4d5-65c8-4266-bbac-ca17c4072a3b',
		title: 'Animus needle (d4)',
		details: [
			'By dealing **critical damage** with this this small copper needle, you leech the life force from one creature and cause the needle to glow a faint color (depending on the creature).',
			'By sticking the charged needle into another object, you transfer the creatures soul to that new object. If the new creature is alive, the higher WIL prevails.'
		],
		recharge: ''
	},
	{
		id: 'ca1e6125-9ad2-4546-8754-89da7d7bc3cb',
		title: 'Pleasant Dress',
		details: [
			'A light, nicely made sundress of durable yellow fabric. When worn, it is impossible for anyone to hold a negative opinion of the wearer, or for the wearer to hold a negative opinion of anyone else.',
			'The slightest damage or staining of the dress renders it ineffective. Cleaning or repairing the dress will render it effective again.'
		],
		recharge: ''
	},
	{
		id: 'da454de5-f9da-4671-bb55-55183ae24b7f',
		title: 'Infinite Outfit, 3 charges',
		details: [
			'Jump to swap your clothing with a visible creature that can wear it. Your new clothing inherits the effect.'
		],
		recharge:
			'Complete the current Infinite Outfit with whatever the last wearer would have found more fashionable.'
	},
	{
		id: 'add5f815-1eae-4139-a6a1-cc5b4d7332dd',
		title: 'Bull Ring',
		details: [
			"A chunky gold ring with inscriptions of bulls all along it. When placed into someone's nose, it turns them into a bull at the genetic and physiological level.",
			"When removed, one bullish trait remians. Horns, thick skin, hooves, etc.  At the same time, the Warden rolls 1d8. If the number is *less than* the current number of bull traits, the wearer doesn't change back."
		],
		recharge: ''
	},
	{
		id: '66775dbc-6351-421f-9905-1fbfb6d2551e',
		title: 'Lizardskin Cloak, 1 charge',
		details: [
			'A billowing cloak made of tanned lizard skin, scale pattern still visible.',
			"If charged the cloak is a bright yellow like a morning sun, while discharged it's a dull blue. While charged, can be made to glow as a dim torch.",
			'Spend a charge to release a bright flash of sunlight which dazzles anyone looking at it.',
			'Spend a charge to release a focused beam of sunlight dealing d10 STR damage which sets its target alight.'
		],
		recharge: ''
	},
	{
		id: 'd06201b0-2698-41d9-81b3-802e73352c5d',
		title: 'Whalerʼs Lodestone',
		details: [
			'A humble magnetic stone carved in the shape of a sperm whale.',
			'When suspended in salt water, points to the nearest, safest place or harbor within 6 miles.'
		],
		recharge: 'Boil the stone in oil.'
	},
	{
		id: 'c64b6400-7060-45db-aac9-e8249bbce573',
		title: 'Ammonite Snorkel',
		details: [
			'A wooden tube curving at the end into a mouthpiece, with inlaid onyx spirals running along its length.',
			'Breating into the tube causes the holder to vanish from their current location and find themselves snorkeling beneath the surface of a deep but narrow pool at the bottom of a crystal shaft. Through a faint blue light discern a massive ammonite sleeping in the center of the pool.',
			'For the first round, there is a 1 in 10 chance of the ammonite waking and immediately devouring the PC. For each successive round this chance increases to 1 in 8, then 1 in 6, then 1 in 4.',
			'The PC may return to their previous location by blowing sharply through the snorkel three times.'
		],
		recharge: ''
	},
	{
		id: '7bce240a-f462-42b4-9aac-40659b1278eb',
		title: 'Trackers Tongue',
		details: [
			'Blue, in a jar of vinegar, stiff until attached.',
			'The user can taste the name of the last person that interacted with a licked person.'
		],
		recharge: 'Rest the tongue in jar with vinegar, detached, for 8 hours.'
	},
	{
		id: '02ce261d-c4b8-4a69-8242-d16b2160e49f',
		title: 'Lock Powder, one use',
		details: [
			'Thoroughly coat any lock to make it open automatically.',
			'To create lock powder, cut three green frogs in half and dry them in the sun for three days, then thoroughly grind them into powder between two stones.'
		],
		recharge: ''
	},
	{
		id: 'ab47c2c7-8f88-4819-9c7a-6b5a89d356ff',
		title: 'Five-Finger Fieldkit',
		details: [
			'Worn but high-quality rucksack with two external extradimensional pockets that can each hold a single item up to the size of a set of platemail.',
			"Items placed in these extra pockets don't use inventory slots.",
			'When retrieving an item from one of the pockets, roll a d20; on a 20 the item is lost, leaving only a mummified finger in its place.'
		],
		recharge: ''
	},
	{
		id: '1b288dc6-4ab2-412c-ad5c-ea65b61ad3ec',
		title: 'Tablet of Interrogation ',
		details: [
			'This baked clay tablet contains and incantation that allows you to summon the spirit of a dead person and ask them three yes-or-no questions.',
			'You must also have a human skull for the spirit to speak through.'
		],
		recharge: 'Sleep three consecutive nights on a fresh grave.'
	},
	{
		id: 'eb794c00-3e28-4d31-aa3d-d4e83316f434',
		title: 'Toymaker’s Key',
		details: [
			'A wooden key painted in bright primary colors.',
			'Unlocks any treasure chest and disarms any trap. However, all contents within are transformed into colorful wooden replicas and any enchantments are removed.'
		],
		recharge: ''
	},
	{
		id: '276f2f29-2efa-4951-8752-a037c01ffe13',
		title: 'Bloodstone Pocketwatch, 1 Charge',
		details: [
			'When you or an ally would do something actively harmful to them (step on a trap, trip in combat), rewind time back to before that happened, but you remember what happened from the rewound time.'
		],
		recharge:
			'When at 0 Charges, you are deprived until blood is spilt on the bloodstone (3+ STR damage worth), which also refreshes the charge.'
	},
	{
		id: 'a4a05985-1acb-4ae5-bb7c-49e22182700c',
		title: 'Moonpearl Talisman, 3 Charges',
		details: ['When casting a spell, spend a Charge to avoid gaining Fatigue.'],
		recharge: 'Let the moonpearls sit under a full moon.'
	},
	{
		id: 'a67f8098-7b0e-48c7-9f53-1de19b216792',
		title: 'Feather Wand, 3 Charges',
		details: [
			'Expend a charge to make a person, creature or object light as a feather *or* heavier than stone.'
		],
		recharge: 'Drop the wand from a height of at least 100 ft from the ground'
	},
	{
		id: 'e5778b1c-a87f-4224-b7bd-330355a64b8a',
		title: 'Pot of Ever-flowing Porridge',
		details: [
			'An iron cook pot filled with a thick bland porridge, the pot can never be emptied of porridge.',
			'If anyone tastes the porridge they become cursed. The curse makes it impossible for the subject to eat any food, except for the porridge. If any other food is consumed it will be hurled up instantly.',
			'The curse can be broken by powerful magic or by destroying the pot, such as shattering it or smelting it.'
		],
		recharge: ''
	},
	{
		id: '2da15690-b1e8-4ebf-8c8c-9f20164e4be2',
		title: "Beggar's Key",
		details: ['This old brass key fits in any lock, but cannot open any.'],
		recharge: ''
	},
	{
		id: '589a02cb-e809-416c-b8c1-515156b37f1b',
		title: 'Illusory Blade of Treachery (d8)',
		details: [
			'This elegant silvery weapon looks exactly like a longsword, but has the words "This is not a Longsword" engraved in it with flowery script.',
			"It doesn't count as a longsword for any effects, rules or laws that would take such in consideration.",
			'A PC can only fully use it after spending one month of training "unlearning" to see it as a longsword, after which, it deals damage to WIL instead of STR.'
		],
		recharge: ''
	},
	{
		id: '49a45952-43d0-4846-acae-595934499a64',
		title: 'Wand of Smoke, 4 charges',
		details: [
			'A wand roughly carved from charred wood that is hard as stone.',
			'Spend 1 Charge to create a 30 ft. diameter thick cloud of smoke centered on you. It lasts for 1 Turn or until the wand leaves the area.',
			'The wielder of the wand is not affected by the smoke and can see normally while inside the cloud.'
		],
		recharge: 'Wrap the wand in parchment paper and burn it into a fire hot enough to melt iron.'
	},
	{
		id: '433160e8-9fad-4464-ba78-d337043087b7',
		title: 'Thunder Signet, 1 charge',
		details: [
			'A golden ring meticulously engraved with lightning motifs.',
			'Spend 1 Charge to summon a thunderstorm in a 1 mile area centered on you. It works even if underground or inside buildings.'
		],
		recharge: 'Get hit by lightning while wearing the ring.'
	},
	{
		id: '102bf285-f8ec-4304-94b5-14055714d7c3',
		title: 'Gaze of Two Minds (d6), 2 charges',
		details: [
			'A blackened double-bladed dagger with a tiny jewelled handle.',
			'Cut yourself with the blade and spend 1 charge to summon an exact copy of yourself, with all your carried equipment. It disappears at the next dawn or dusk, whichever comes first.',
			'The copy will follow all your commands. It has all your knowledge and capabilities, and acts mostly like you, only being more reckless and cold.'
		],
		recharge:
			'Feed a hungry beast with the fresh body of an innocent, and them kill the beast with the blade.'
	}
];
