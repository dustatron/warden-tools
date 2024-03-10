<script lang="ts">
	import { type MonsterV2, monsterListV2 } from '$lib/index';
	import Fuse from 'fuse.js';
	import Card from '../Card/Card.svelte';
	import SearchBar from '../SearchBar/SearchBar.svelte';

	let selectedMonsters: MonsterV2[] = monsterListV2;

	const fuse = new Fuse<MonsterV2>(monsterListV2, {
		keys: ['title', 'stats', 'details', 'environments'],
		isCaseSensitive: false,
		threshold: 0.5
	});

	function makeSelection(search: string) {
		if (search) {
			selectedMonsters = fuse.search(search).map((item) => ({
				title: item.item.title,
				stats: item.item.stats,
				details: item.item.details,
				id: item.item.id,
				environments: item.item.environments
			}));
		} else {
			selectedMonsters = monsterListV2;
		}
	}
</script>

<div>
	<SearchBar
		buttonText="search"
		{makeSelection}
		subTitle="Search for title and details"
		totalShowing={selectedMonsters.length}
	/>

	<div class="flex flex-wrap w-full">
		{#each selectedMonsters as monster}
			<Card {monster} />
		{/each}
	</div>
</div>
