<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import MonsterSearch from './MonsterSearch.svelte';
	import MonsterRandom from './MonsterRandom.svelte';

	let tabSet: number = 0;
</script>

<TabGroup>
	<Tab bind:group={tabSet} name="tab1" value={0}>Random</Tab>
	<Tab bind:group={tabSet} name="tab3" value={1}>Search</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<MonsterRandom />
		{:else if tabSet === 1}
			<MonsterSearch />
		{/if}
	</svelte:fragment>
</TabGroup>
