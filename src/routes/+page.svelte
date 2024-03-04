<script lang="ts">
	import { favMonsterStore } from '$lib';
	import Card from '../components/Card/Card.svelte';
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import FavoritesTable from '../components/Favorites/FavoritesTable.svelte';

	let isShowingTable = false;
	function toggleView() {
		isShowingTable = !isShowingTable;
	}
</script>

<div class="container h-full mx-auto pt-10">
	<div>
		<h1>Your Monster Collection</h1>
		<div>
			<SlideToggle name="slider-label" on:change={toggleView} checked
				>{isShowingTable ? 'Show Cards' : 'Show Table'}</SlideToggle
			>
		</div>
	</div>
	{#if !$favMonsterStore.length}
		<div>
			<p>No monsters have been selected.</p>
			<p>
				<a href="/monsters"
					><button class="btn variant-outline-primary"> Browse your options</button></a
				>
			</p>
		</div>
	{/if}
	{#if !!$favMonsterStore.length}
		<div class="flex flex-wrap w-full">
			{#if isShowingTable}
				<FavoritesTable />
			{:else}
				{#key $favMonsterStore}
					{#each $favMonsterStore as monster}
						<Card {monster} />
					{/each}
				{/key}
			{/if}
		</div>
	{/if}
</div>
