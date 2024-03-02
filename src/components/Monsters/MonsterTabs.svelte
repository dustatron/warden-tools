<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import MonsterSearch from './MonsterSearch.svelte';
	import MonsterRandom from './MonsterRandom.svelte';
	import MonsterTable from './MonsterTable.svelte';

	let tabSet: number = 0;
</script>

<TabGroup>
	<Tab bind:group={tabSet} name="tab1" value={0}>Table</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>Cards</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>Search</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<MonsterTable />
		{:else if tabSet === 1}
			<MonsterRandom />
		{:else if tabSet === 2}
			<MonsterSearch />
		{/if}
	</svelte:fragment>
</TabGroup>
