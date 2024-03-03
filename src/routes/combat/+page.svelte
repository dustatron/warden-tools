<script lang="ts">
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	const sourceData = [
		{ position: 1, name: 'Hydrogen', HP: 45, AC: 12, INITIATIVE: 2 },
		{ position: 2, name: 'Helium', HP: 13, AC: 12, INITIATIVE: 1 },
		{ position: 3, name: 'Lithium', HP: 12, AC: 12, INITIATIVE: 3 },
		{ position: 4, name: 'Beryllium', HP: 12, AC: 12, INITIATIVE: 4 },
		{ position: 5, name: 'Boron', HP: 12, AC: 12, INITIATIVE: 5 }
	];
	const tableSimple: TableSource = {
		// A list of heading labels.
		head: ['Name', 'HP', 'AC', 'INITIATIVE', 'Position'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['name', 'HP', 'AC', 'INITIATIVE']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, ['position', 'name'])
	};
</script>

<div>
	<div class="p-3">
		<button class="btn variant-outline-secondary">Add PC</button>
		<button class="btn variant-outline-secondary">Add NPC</button>
	</div>
	<Table source={tableSimple} interactive={true} />
</div>
