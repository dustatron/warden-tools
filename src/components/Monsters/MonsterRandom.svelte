<script lang="ts">
	import Card from '../../components/Card/Card.svelte';
	import MonstersList, { monsterStore, type Monster, diceStore } from '$lib/index';
	import { makeRandomSelection } from '$lib/utils';

	function makeSelection() {
		$monsterStore = makeRandomSelection($diceStore, MonstersList);
	}
</script>

<div>
	<div>
		<form on:submit|preventDefault={makeSelection} class="flex pl-3">
			<div class="sm:w-1/2 md:w-1/4 mr-2">
				<label class="label">
					<div>Random Amount</div>
					<input
						type="number"
						name="random"
						class="input variant-form-material"
						bind:value={$diceStore}
					/>
				</label>
			</div>

			<div class="w-1/3 pt-7">
				<button type="submit" class="btn variant-filled-surface">Random</button>
			</div>
		</form>
		<div class="flex flex-wrap w-full">
			{#each $monsterStore as monster, index}
				<Card title={monster.title} stats={monster.stats} details={monster.details} />
			{/each}
		</div>
	</div>
</div>
