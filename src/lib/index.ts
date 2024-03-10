// place files you want to import through the `$lib` alias in this folder.
import { diceStore } from './store/dice';
import { monsterStore } from './store/monster';
import { favMonsterStore } from './store/favMonster';
import { MonstersList } from './monsters';
import { monsterListV2 } from './monsters-updated-v2';
import type { MonsterV2, Stats } from './monsters-updated-v2';
import { locationIdeaList } from './locationIdeaList';
import { type Spell, basicSpells } from './magic/basic-spells';
import { moreSpells } from './magic/more-spells';
import { favSpellsStore } from './store/favSpells';

export type Monster = {
	title: string;
	stats: string;
	details: string[];
};

export {
	diceStore,
	monsterStore,
	favMonsterStore,
	monsterListV2,
	locationIdeaList,
	basicSpells,
	moreSpells,
	favSpellsStore
};
export type { MonsterV2, Stats, Spell };
export default MonstersList as Monster[];
