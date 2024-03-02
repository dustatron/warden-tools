// place files you want to import through the `$lib` alias in this folder.
import { diceStore } from './store/dice';
import { monsterStore } from './store/monster';
import { favMonsterStore } from './store/favMonster';
import { MonstersList } from './monsters';

export type Monster = {
	title: string;
	stats: string;
	details: string[];
};

export { diceStore, monsterStore, favMonsterStore };
export default MonstersList as Monster[];
