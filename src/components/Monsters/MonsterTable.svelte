<script lang="ts">
	import { diceStore, monsterStore, monsterListV2 } from '$lib';
	import { makeRandomSelection } from '$lib/utils';
	import AddButton from './AddButton.svelte';

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
</div>
