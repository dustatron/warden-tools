import type { Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Relic } from '../../routes/relics/relics';
export const favRelicsStore: Writable<Relic[]> = localStorageStore('favRelicsStore', []);
