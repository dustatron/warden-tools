<script lang="ts">
	import MonstersList, { diceStore, monsterStore } from '$lib';
	import { makeRandomSelection } from '$lib/utils';
	import AddButton from './AddButton.svelte';

	let diceList: number[] = [4, 6, 8, 10, 12, 100];

	function select(selected: number) {
		$diceStore = selected;
		makeSelection();
		$diceStore = selected;
	}

	function makeSelection() {
		$monsterStore = makeRandomSelection($diceStore, MonstersList);
	}
	if (!$monsterStore.length) {
		makeSelection();
	}
</script>

<div>
	<!-- dice selector -->
	<div class="flex gap-2">
		{#each diceList as die}
			<button
				class={`btn ${die == $diceStore ? 'variant-outline-tertiary' : 'variant-filled-surface'}`}
				on:click={() => select(die)}>{die}</button
			>
		{/each}
	</div>
	<!-- Responsive Container (recommended) -->
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
					{#each $monsterStore as row, i}
						<tr>
							<td class="font-bold">{i + 1}</td>
							<td><AddButton monster={row} /></td>
							<td class="font-bold text-xl">
								<a
									href={`https://cairnrpg.com/resources/monsters/${row.title.toLowerCase().replace(' ', '-')}`}
								>
									{row.title}
								</a>
							</td>
							<td class="w-1/4">{row.stats}</td>
							<td
								>{#each row.details as detail}
									<div class="border-slate-600 border-b-2 p-2">{@html detail}</div>
								{/each}
							</td>
						</tr>
					{/each}
				{/key}
			</tbody>
		</table>
	</div>
</div>
