<script lang="ts">
	// import { favSpellsStore, type Spell } from '$lib';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import Subtract from 'carbon-icons-svelte/lib/Subtract.svelte';
	import type { Relic } from '../../routes/relics/relics';
	import { favRelicsStore } from '$lib/store/favRelics';
	export let relic: Relic;
	const { details, id, recharge, title } = relic;
	const titleParts = title.split(',');
	let isFavorite: boolean = !!$favRelicsStore.find((rel) => rel.id === id);

	function togglefavoriteThisRelic() {
		console.log('isfav', isFavorite);
		if (!isFavorite) {
			$favRelicsStore = [...$favRelicsStore, relic];
			isFavorite = true;
		} else {
			$favRelicsStore = $favRelicsStore.filter((rel) => rel.id !== id);
			isFavorite = false;
		}
	}
</script>

<div class="sm:w-fit md:w-fit lg:w-1/2 p-3 min-h-36">
	<div class="card p-4 variant-ghost card-hover w-full min-h-60 flex flex-wrap rounded-md">
		<header
			class="card-header text-xl font-semibold w-full flex justify-between flex-grow-0 min-h-14 p-2"
		>
			<div class="flex justify-between w-full px-2">
				<h2>
					{titleParts[0]}
				</h2>
				<div class="flex items-center justify-end w-1/4 text-sm">
					{titleParts[1] ? titleParts[1] : ''}
				</div>
			</div>
			<div>
				<button
					type="button"
					class={`btn-icon  ${isFavorite ? 'variant-filled-primary' : 'variant-outline-primary'}`}
					on:click={togglefavoriteThisRelic}
				>
					{#if isFavorite}
						<Subtract size={20} />
					{:else}
						<Add size={20} />
					{/if}
				</button>
			</div>
		</header>
		<section class="w-full min-h-20 text-zinc-800 rounded-md">
			<ul class="grid grid-cols-1 divide-y variant-glass-secondary min-h-52 p-4">
				{#each details as detail}
					<li class="text-white p-1">
						<p>{detail}</p>
					</li>
				{/each}
			</ul>
		</section>
		<footer class="card-footer w-full">
			<p class="pb-0 font-bold">Recharge:</p>
			<p>
				{#if recharge}
					{recharge}
				{:else}
					No Recharge
				{/if}
			</p>
		</footer>
	</div>
</div>
