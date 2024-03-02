<script lang="ts">
	import { favMonsterStore } from '$lib';
	import AddButton from '../Monsters/AddButton.svelte';
</script>

<div>
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
				{#each $favMonsterStore as row, i}
					<tr>
						<td class="font-bold">{i + 1}</td>
						<td><AddButton monster={row} /></td>
						<td class="font-bold text-xl w-36">{row.title}</td>
						<td class="w-1/4">{row.stats}</td>
						<td
							>{#each row.details as detail}
								<div class="border-slate-600 border-b-2 p-2">{@html detail}</div>
							{/each}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
