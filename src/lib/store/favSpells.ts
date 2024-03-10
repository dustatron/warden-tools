import type { Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Spell } from '$lib';
export const favSpellsStore: Writable<Spell[]> = localStorageStore('favSpellsStore', []);
