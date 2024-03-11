<script lang="ts">
	import SearchBar from '../../components/SearchBar/SearchBar.svelte';
	import Fuse from 'fuse.js';
	import type { Relic } from './relics';
	import { relicList } from './relics';
	import RelicCard from '../../components/RelicCard/RelicCard.svelte';

	let initialRelicList = [...relicList];
	let selectedRelics: Relic[] = initialRelicList;

	const fuse = new Fuse<Relic>(initialRelicList, {
		keys: ['recharge', 'title', 'details'],
		ignoreLocation: true,
		isCaseSensitive: false,
		threshold: 0.2
	});

	function makeSelection(search: string) {
		if (search) {
			selectedRelics = fuse.search(search).map(({ item }) => ({
				details: item.details,
				id: item.id,
				recharge: item.recharge,
				title: item.title
			}));
		} else {
			selectedRelics = [...relicList];
		}
	}
</script>

<div>
	<div class=" flex content-center">
		<SearchBar
			{makeSelection}
			buttonText="search"
			subTitle="Search for spell titles and description"
			totalShowing={selectedRelics.length}
		/>
	</div>
	<div class="flex flex-wrap">
		{#key selectedRelics}
			{#each selectedRelics as relic}
				<RelicCard {relic} />
			{/each}
		{/key}
	</div>
</div>
