<script lang="ts">
	export let makeSelection: (search: string) => void;
	export let buttonText: string = '';
	export let subTitle: string = '';
	export let totalShowing: number;
	let searchValue = '';

	function clearSearch() {
		searchValue = '';
	}
</script>

<div class="w-full">
	<form
		on:submit|preventDefault={() => makeSelection(searchValue)}
		class="flex p-3 lg:w-2/3 md:w-full sm:w-full"
	>
		<div class="mr-2 md:w-2/3 sm:w-full">
			<label class="label">
				<div>{subTitle}</div>
				<input
					type="text"
					name="searchTearm"
					class="input variant-form-material"
					bind:value={searchValue}
				/>
			</label>
		</div>
		<div class="sm:w-1/3 pt-7 flex gap-1">
			<button type="submit" class="btn variant-filled-surface">{buttonText}</button>
			<button class="btn variant-filled-surface" on:click={clearSearch}>Clear</button>
		</div>
	</form>
	<div class="w-full flex justify-start">
		<div class="w-full badge badge-glass p-2 mx-3">
			# {totalShowing} Showing
		</div>
	</div>
</div>
