<script lang="ts">
	export let title: string = '';
	export let description: string = '';
</script>

<div class="sm:w-fit md:w-1/3 p-3 min-h-60">
	<div class="card card-hover w-full min-h-60 flex align-middle flex-wrap">
		<header class="card-header text-xl font-semibold w-full">{title}</header>
		<section class="p-4 w-full">{description}</section>
		<footer class="card-footer w-full flex justify-end">
			<button type="button" class="btn-icon block variant-filled h-10">➕</button>
		</footer>
	</div>
</div>
