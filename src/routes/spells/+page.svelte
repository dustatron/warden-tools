<script lang="ts">
	import { basicSpells, moreSpells, type Spell } from '$lib';
	import { SlideToggle } from '@skeletonlabs/skeleton';

	import SearchBar from '../../components/SearchBar/SearchBar.svelte';
	import SpellCard from '../../components/SpellCard/SpellCard.svelte';
	import Fuse from 'fuse.js';

	let isBasicList = true;

	let initSpells = [...basicSpells];
	let selectedSpells: Spell[] = initSpells;

	const fuse = new Fuse<Spell>(initSpells, {
		keys: ['title', 'description'],
		isCaseSensitive: false,
		threshold: 0.5
	});

	function makeSelection(search: string) {
		if (search) {
			console.log(search);
			selectedSpells = fuse.search(search).map(({ item }) => ({
				title: item.title,
				description: item.description,
				number: item.number
			}));
		} else {
			selectedSpells = initSpells;
		}
	}

	function handleUpdateSpells() {
		isBasicList = !isBasicList;
		if (isBasicList) {
			initSpells = basicSpells;
		} else {
			initSpells = [...moreSpells, ...basicSpells];
		}
		selectedSpells = initSpells;
	}
</script>

<main class="container h-full mx-auto pt-10">
	<div class=" flex content-center">
		<SearchBar
			{makeSelection}
			buttonText="search"
			subTitle="Search for spell titles and description"
			totalShowing={selectedSpells.length}
		/>
	</div>
	<div class="flex justify-end content-center gap-2 p-2">
		<div class="pt-1">More Spells</div>
		<SlideToggle name="slider-label" on:change={handleUpdateSpells} checked={isBasicList} />
		<div class="pt-1">Basic Spells</div>
	</div>
	<div class="flex flex-wrap">
		{#each selectedSpells as { title, description, number }}
			<SpellCard {title} {description} {number} />
		{/each}
	</div>
</main>
