<script lang="ts">
	import type { MonsterV2 } from '$lib/index';
	import { Mountain } from 'carbon-icons-svelte';
	import AddButton from '../Monsters/AddButton.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	export let monster: MonsterV2;
</script>

<div class="md:w-1/2 sm:w-full p-2">
	<div class="card p-4 w-full variant-ghost">
		<div class="flex justify-between">
			<header class="card-header"><h2>{monster?.title}</h2></header>
			<div>
				<AddButton {monster} />
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
							<td class="w-1/6">{monster?.stats.armor || 0}</td>
							<td>{monster?.stats.hp}</td>
							<td>{monster?.stats.str}</td>
							<td>{monster?.stats.wil}</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th colspan="1">Attack</th>
							<td colspan="4">{monster?.stats.attack}</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</section>
		<footer class="card-footer">
			<ul class="grid grid-cols-1 divide-y bg-slate-400">
				{#each monster?.details as item}
					<li class="text-gray-950 p-2">
						{@html item}
					</li>
				{/each}
			</ul>
			<div class="mt-4 variant-filled-surface">
				<Accordion>
					<AccordionItem>
						<svelte:fragment slot="lead"><Mountain /></svelte:fragment>
						<svelte:fragment slot="summary">Environments</svelte:fragment>
						<svelte:fragment slot="content">
							<ul>
								{#each monster?.environments as environment}
									<li>
										<p class="text-lg">
											{environment}
										</p>
									</li>
								{/each}
							</ul>
						</svelte:fragment>
					</AccordionItem>

					<!-- ... -->
				</Accordion>
			</div>
		</footer>
	</div>
</div>
