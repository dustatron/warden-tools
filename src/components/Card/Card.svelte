<script lang="ts">
	export let title: string;
	export let stats: string;
	export let details: string[];
	import { favMonsterStore } from '$lib/index';
	import AddButton from '../Monsters/AddButton.svelte';

	let statList = stats.split(',');
	let statBlock = { hp: '', armor: '', str: '', dex: '', wil: '', attack: '' };
	for (let property of statList) {
		if (property.includes('HP')) {
			statBlock.hp = property.replace('HP', '').trim();
		} else if (property.includes('STR')) {
			statBlock.str = property.replace('STR', '').trim();
		} else if (property.includes('Armor')) {
			statBlock.armor = property.replace('Armor', '').trim();
		} else if (property.includes('WIL')) {
			statBlock.wil = property.replace('WIL', '').trim();
		} else {
			statBlock.attack = property;
		}
	}

	let isFav = getIsFav();

	function getIsFav() {
		return !!$favMonsterStore.find((mon) => mon.title === title);
	}

	function addMonster() {
		console.log('test');
		if (isFav) {
			$favMonsterStore = $favMonsterStore.filter((mon) => mon.title !== title);
		} else {
			$favMonsterStore = [{ title, stats, details }, ...$favMonsterStore];
		}
		isFav = getIsFav();
	}
</script>

<div class="md:w-1/2 sm:w-full p-2">
	<div class="card p-4 w-full variant-ghost">
		<div class="flex justify-between">
			<header class="card-header"><h2>{title}</h2></header>
			<div>
				<AddButton monster={{ title, stats, details }} />
			</div>
		</div>
		<section class="p-4">
			<div class="table-container">
				<!-- Native Table Element -->
				<table class="table table-hover">
					<thead>
						<tr>
							<th>Armor</th>
							<th>HP</th>
							<th>STR</th>
							<th>WIL</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{statBlock.armor || 0}</td>
							<td>{statBlock.hp}</td>
							<td>{statBlock.str}</td>
							<td>{statBlock.wil}</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th colspan="1">Attack</th>
							<td colspan="4">{statBlock.attack}</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</section>
		<footer class="card-footer">
			<ul class="grid grid-cols-1 divide-y bg-slate-400">
				{#each details as item}
					<li class="text-gray-950 p-2">
						{@html item}
					</li>
				{/each}
			</ul>
		</footer>
	</div>
</div>
