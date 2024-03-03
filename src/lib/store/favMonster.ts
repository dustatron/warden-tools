import type { Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { MonsterV2 } from '$lib';
export const favMonsterStore: Writable<MonsterV2[]> = localStorageStore('favMonsterStore', []);
