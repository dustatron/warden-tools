<script lang="ts">
	import { page } from '$app/stores';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
	const url = $page.url.pathname;
</script>

<div>
	<a href="/" on:click={drawerClose}>
		<h2 class="p-4">Cairn Tools</h2>
	</a>
	<hr />
	<ul class="list-none p-2">
		<li class="py-1 text-lg">
			<a
				href="/"
				type="button"
				class="btn variant-outline-secondary rounded-md w-full"
				on:click={drawerClose}
			>
				Favorites</a
			>
		</li>
		<li class="py-1 text-lg">
			<a
				href="/monsters"
				type="button"
				class="btn variant-outline-secondary rounded-md w-full"
				on:click={drawerClose}
			>
				Monsters</a
			>
		</li>
		<li class="py-1 text-lg">
			<a
				href="/spells"
				type="button"
				class="btn variant-outline-secondary rounded-md w-full"
				on:click={drawerClose}>Spells</a
			>
		</li>
		<li class="py-1 text-lg">
			<a
				href="/about"
				type="button"
				class="btn variant-outline-secondary rounded-md w-full"
				on:click={drawerClose}>About</a
			>
		</li>
		<li class="py-1 text-lg">
			<a
				href="https://cairnrpg.com/"
				type="button"
				class="btn variant-outline-secondary rounded-md w-full"
				on:click={drawerClose}>Cairn RPG</a
			>
		</li>
	</ul>
</div>
<!-- <a
	class={`btn btn-sm ${url === '/' ? 'variant-filled-primary' : 'variant-ghost-surface'}`}
	href="/"
	data-sveltekit-reload
>
	Favorites
</a>
<a
	class={`btn btn-sm ${url === '/monsters' ? 'variant-filled-primary' : 'variant-ghost-surface'}`}
	href="/monsters"
	data-sveltekit-reload
>
	Monsters
</a> -->
<!-- <a
	class={`btn btn-sm ${url === '/combat' ? 'variant-filled-primary' : 'variant-ghost-surface'}`}
	href="/combat"
	data-sveltekit-reload
>
	Combat</a
> -->
<!-- 
<a
	class={`btn btn-sm ${url === '/spells' ? 'variant-filled-primary' : 'variant-ghost-surface'}`}
	href="/spells"
	data-sveltekit-reload
>
	Spells
</a>
<a
	class={`btn btn-sm ${url === '/about' ? 'variant-filled-primary' : 'variant-ghost-surface'}`}
	href="/about"
	data-sveltekit-reload
>
	About
</a> -->
