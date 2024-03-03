import type { MonsterV2 } from '$lib';

export function makeRandomSelection(amount: number, monstersList: MonsterV2[]) {
	let randNumbers = new Set<number>();

	const randomSelection: MonsterV2[] = [];

	while (randNumbers.size < amount) {
		const currentNumb = Math.floor(Math.random() * monstersList.length);
		if (!randNumbers.has(currentNumb)) {
			randNumbers.add(currentNumb);
		}
	}
	randNumbers.forEach((num) => {
		randomSelection.push(monstersList[num]);
	});
	return randomSelection;
}
