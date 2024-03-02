import type { Monster } from '$lib';

export function makeRandomSelection(amount: number, monstersList: Monster[]) {
	let randNumbers = new Set<number>();

	const randomSelection: Monster[] = [];

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
