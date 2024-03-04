<script lang="ts">
	import { favMonsterStore } from '$lib';
	import Card from '../components/Card/Card.svelte';
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import FavoritesTable from '../components/Favorites/FavoritesTable.svelte';
	import { isTableView } from '$lib/store/isTableView';

	function toggleView() {
		$isTableView = !$isTableView;
	}
</script>

<div class="container h-full mx-auto pt-10">
	<div>
		<h1>Your Monster Collection</h1>
		<div>
			<SlideToggle name="slider-label" on:change={toggleView} checked
				>{$isTableView ? 'Show Cards' : 'Show Table'}</SlideToggle
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
			{#key $favMonsterStore}
				{#if $isTableView}
					<FavoritesTable />
				{:else}
					{#each $favMonsterStore as monster}
						<Card {monster} />
					{/each}
				{/if}
			{/key}
		</div>
	{/if}
</div>
