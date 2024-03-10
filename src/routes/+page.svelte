<script lang="ts">
	import { favMonsterStore, favSpellsStore } from '$lib';
	import Card from '../components/Card/Card.svelte';
	import { SlideToggle, Tab, TabGroup } from '@skeletonlabs/skeleton';
	import FavoritesTable from '../components/Favorites/FavoritesTable.svelte';
	import { isTableView } from '$lib/store/isTableView';
	import SpellCard from '../components/SpellCard/SpellCard.svelte';

	let tabSet: number = 0;

	function toggleView() {
		$isTableView = !$isTableView;
	}
</script>

<main class="container h-full mx-auto pt-10 px-2">
	<TabGroup>
		<Tab bind:group={tabSet} name="tab1" value={0}>Monsters</Tab>
		<Tab bind:group={tabSet} name="tab3" value={1}>Spells</Tab>
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<div>
					<h1>Your Monster Collection</h1>
					<div>
						<SlideToggle name="slider-label" on:change={toggleView} checke={$isTableView}
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
			{:else if tabSet === 1}
				<div>
					<h1>Your Spell Collection</h1>
				</div>
				<div>
					{#if !$favSpellsStore.length}
						<div>Add some <a href="/spells">spells</a></div>
					{/if}
					<div class="flex flex-wrap w-full">
						{#key $favSpellsStore}
							{#each $favSpellsStore as { title, description, number }}
								<SpellCard {title} {description} {number} />
							{/each}
						{/key}
					</div>
				</div>
			{/if}
		</svelte:fragment>
	</TabGroup>
</main>
