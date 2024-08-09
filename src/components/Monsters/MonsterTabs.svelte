<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import MonsterSearch from './MonsterSearch.svelte';
	import MonsterRandom from './MonsterRandom.svelte';

	let tabSet: number = 0;
</script>

<TabGroup>
	<Tab bind:group={tabSet} name="tab1" value={0}>Search</Tab>
	<Tab bind:group={tabSet} name="tab3" value={1}>Encounter Table</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<MonsterSearch />
		{:else if tabSet === 1}
			<MonsterRandom />
		{/if}
	</svelte:fragment>
</TabGroup>
