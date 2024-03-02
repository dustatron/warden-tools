<script lang="ts">
	import MonstersList, { type Monster } from '$lib/index';
	import Fuse from 'fuse.js';
	import Card from '../Card/Card.svelte';

	let searchTitle = '';
	let selectedMonsters: Monster[] = [];

	const fuse = new Fuse<Monster>(MonstersList, {
		keys: ['title', 'stats', 'details'],
		isCaseSensitive: false,
		minMatchCharLength: searchTitle.length,
		threshold: 0.5
	});

	function makeSelection() {
		selectedMonsters = fuse.search(searchTitle).map((item) => ({
			title: item.item.title,
			stats: item.item.stats,
			details: item.item.details
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
		{#each selectedMonsters as monster, index}
			<Card title={monster.title} stats={monster.stats} details={monster.details} />
		{/each}
	</div>
</div>
