<script lang="ts">
	import { favMonsterStore } from '$lib';
	import Card from '../components/Card/Card.svelte';
	import FavoritesTable from '../components/Favorites/FavoritesTable.svelte';
</script>

<div class="container h-full mx-auto pt-10">
	<div>
		<h1>Your Monster Collection</h1>
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
				<FavoritesTable />
			{/key}
		</div>
	{/if}
</div>
