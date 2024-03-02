import type { Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
export const diceStore: Writable<number> = localStorageStore('storeDice', 4);
