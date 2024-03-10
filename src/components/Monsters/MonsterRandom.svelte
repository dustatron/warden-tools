<script lang="ts">
	import { diceStore, monsterStore, monsterListV2 } from '$lib';
	import { makeRandomSelection } from '$lib/utils';
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import AddButton from './AddButton.svelte';
	import { isTableView } from '$lib/store/isTableView';
	import Card from '../Card/Card.svelte';

	let diceList: number[] = [4, 6, 8, 10, 12, 100];

	function select(selected: number) {
		$diceStore = selected;
		makeSelection();
		$diceStore = selected;
	}

	function makeSelection() {
		$monsterStore = makeRandomSelection($diceStore, monsterListV2);
	}
	if (!$monsterStore.length) {
		makeSelection();
	}
	function toggleView() {
		$isTableView = !$isTableView;
	}
</script>

<div>
	<!-- dice selector -->
	<div class="flex justify-between flex-wrap content-center p-2 border-b-2 w-full">
		<div class="flex items-center">
			<SlideToggle name="slider-label" on:change={toggleView} checke={$isTableView}
				>{$isTableView ? 'Show Cards' : 'Show Table'}</SlideToggle
			>
		</div>

		<div class="flex items-center gap-2 my-3">
			{#each diceList as die}
				<button
					class={`btn ${die == $diceStore ? 'variant-outline-tertiary' : 'variant-filled-surface'}`}
					on:click={() => select(die)}>{die}</button
				>
			{/each}
		</div>
		<form on:submit|preventDefault={makeSelection} class="flex sm:mb-3 lg:mb-0 content-center">
			<div class="w-full mr-2 flex items-center">
				<label class="label">
					<input
						type="number"
						name="random"
						class="input variant-form-material"
						bind:value={$diceStore}
					/>
				</label>
				<div class="w-1/3">
					<button type="submit" class="btn variant-filled-surface">Random</button>
				</div>
			</div>
		</form>
	</div>
	<!-- Responsive Container (recommended) -->
	{#if $isTableView}
		<div class="table-container p-3">
			<!-- Native Table Element -->
			<table class="table table-hover">
				<thead>
					<tr>
						<th>#</th>
						<th>Action</th>
						<th>Name</th>
						<th>Stats</th>
						<th>details</th>
					</tr>
				</thead>
				<tbody>
					{#key $monsterStore}
						{#each $monsterStore as { details, stats, environments, title, id }, i}
							<tr>
								<td class="font-bold">{i + 1}</td>
								<td><AddButton monster={{ details, stats, environments, title, id }} /></td>
								<td class="font-bold text-xl">
									<a
										href={`https://cairnrpg.com/resources/monsters/${title.toLowerCase().replace(' ', '-')}`}
									>
										{title}
									</a>
								</td>
								<td class="w-1/4">
									<div>
										Armor: {stats.armor} | HP: {stats.hp}
									</div>
									<div>
										STR: {stats.str} | DEX {stats.dex} | WIL {stats.wil}
									</div>
									<div>
										Attack: {stats.attack}
									</div>
								</td>
								<td
									>{#each details as detail}
										<div class="border-slate-600 border-b-2 p-2">{@html detail}</div>
									{/each}
								</td>
							</tr>
						{/each}
					{/key}
				</tbody>
			</table>
		</div>
	{:else}
		<div class="flex flex-wrap w-full">
			{#each $monsterStore as monster}
				<Card {monster} />
			{/each}
		</div>
	{/if}
</div>
