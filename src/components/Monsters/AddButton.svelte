<script lang="ts">
	import { type Monster, favMonsterStore } from '$lib';
	import { Star, StarFilled } from 'carbon-icons-svelte';

	export let monster: Monster = { title: '', stats: '', details: [] };
	let isFav = getIsFav();

	function getIsFav() {
		return !!$favMonsterStore.find((mon) => mon.title === monster.title);
	}

	function toggleFav() {
		console.log('test');
		if (isFav) {
			$favMonsterStore = $favMonsterStore.filter((mon) => mon.title !== monster.title);
		} else {
			$favMonsterStore = [monster, ...$favMonsterStore];
		}
		isFav = getIsFav();
	}
</script>

<button
	on:click={toggleFav}
	class={`btn ${isFav ? 'variant-filled-tertiary' : 'variant-outline-tertiary'} `}
>
	{#if isFav}
		<StarFilled class="w-4 h-4" />
	{:else}
		<Star class="w-4 h-4" />
	{/if}
</button>
