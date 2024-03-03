<script lang="ts">
	import { type MonsterV2, monsterListV2 } from '$lib/index';
	import Fuse from 'fuse.js';
	import Card from '../Card/Card.svelte';

	let searchTitle = '';
	let selectedMonsters: MonsterV2[] = [];

	const fuse = new Fuse<MonsterV2>(monsterListV2, {
		keys: ['title', 'stats', 'details', 'environments'],
		isCaseSensitive: false,
		minMatchCharLength: searchTitle.length,
		threshold: 0.5
	});

	function makeSelection() {
		selectedMonsters = fuse.search(searchTitle).map((item) => ({
			title: item.item.title,
			stats: item.item.stats,
			details: item.item.details,
			id: item.item.id,
			environments: item.item.environments
		}));
	}
</script>

<div>
	<form on:submit|preventDefault={() => makeSelection()} class="flex pl-3">
		<div class="sm:w-1/2 md:w-1/4 mr-2">
			<label class="label">
				<div>Search Titles, stats, and Details</div>
				<input
					type="text"
					name="searchTearm"
					class="input variant-form-material"
					bind:value={searchTitle}
				/>
			</label>
		</div>
		<div class="sm:w-1/2 md:w-1/3 pt-7">
			<button type="submit" class="btn variant-filled-surface">Search</button>
		</div>
	</form>
	<div class="flex flex-wrap w-full">
		{#each selectedMonsters as monster}
			<Card {monster} />
		{/each}
	</div>
</div>
