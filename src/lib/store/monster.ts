import type { Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Monster } from '$lib';
export const monsterStore: Writable<Monster[]> = localStorageStore('monsterStore', []);
