<script lang="ts">
	import { type MonsterV2, favMonsterStore } from '$lib';
	import { Star, StarFilled } from 'carbon-icons-svelte';

	export let monster: MonsterV2 = {
		title: '',
		stats: { armor: 0, attack: '', dex: 0, hp: 0, str: 0, wil: 0 },
		details: [],
		environments: [],
		id: ''
	};

	let isFav = getIsFav();

	function getIsFav() {
		return !!$favMonsterStore.find((mon) => mon.id === monster.id);
	}

	function toggleFav() {
		console.log('test');
		if (isFav) {
			$favMonsterStore = $favMonsterStore.filter((mon) => mon.id !== monster.id);
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
