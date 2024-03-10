<script lang="ts">
	import { favSpellsStore, type Spell } from '$lib';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import Subtract from 'carbon-icons-svelte/lib/Subtract.svelte';
	export let title: string = '';
	export let description: string = '';
	export let number: string = '';
	let isFavorite: boolean = !!$favSpellsStore.find((spell) => spell.title === title);

	function togglefavoriteThisSpell() {
		console.log('isfav', isFavorite);
		if (!isFavorite) {
			$favSpellsStore = [...$favSpellsStore, { title, number, description }];
			isFavorite = true;
		} else {
			$favSpellsStore = $favSpellsStore.filter((spell) => spell.number !== number);
			isFavorite = false;
		}
	}
</script>

<div class="sm:w-fit md:w-1/3 p-3 min-h-36">
	<div class="card p-4 variant-ghost card-hover w-full min-h-60 flex flex-wrap rounded-md">
		<header class="card-header text-xl font-semibold w-full flex justify-between flex-grow-0 h-14">
			<div>
				{title}
			</div>
			<button
				type="button"
				class={`btn-icon  ${isFavorite ? 'variant-filled-primary' : 'variant-outline-primary'} `}
				on:click={togglefavoriteThisSpell}
			>
				{#if isFavorite}
					<Subtract size={20} />
				{:else}
					<Add size={20} />
				{/if}
			</button>
		</header>
		<section class="p-4 w-full min-h-20">{description}</section>
		<!-- <footer class="card-footer w-full flex justify-end"></footer> -->
	</div>
</div>
