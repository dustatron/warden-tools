<script lang="ts">
	import { page } from '$app/stores';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import FavoriteFilled from 'carbon-icons-svelte/lib/FavoriteFilled.svelte';
	import Monster from 'carbon-icons-svelte/lib/Monster.svelte';
	import MagicWandFilled from 'carbon-icons-svelte/lib/MagicWandFilled.svelte';
	import LogoSketch from 'carbon-icons-svelte/lib/LogoSketch.svelte';
	import InformationFilled from 'carbon-icons-svelte/lib/InformationFilled.svelte';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import RuleFilled from 'carbon-icons-svelte/lib/RuleFilled.svelte';
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
			<a href="/" type="button" class="rounded-md w-full text-left p-2" on:click={drawerClose}>
				<FavoriteFilled size={32} class="pr-2 inline-block" /> Favorites
			</a>
		</li>
		<li class="py-1 text-lg">
			<a
				href="/monsters"
				type="button"
				class="rounded-md w-full text-left p-2"
				on:click={drawerClose}
			>
				<Monster size={32} class="pr-2 inline-block" /> Monsters
			</a>
		</li>
		<li class="py-1 text-lg">
			<a href="/spells" type="button" class="rounded-md w-full text-left p-2" on:click={drawerClose}
				><MagicWandFilled size={32} class="pr-3 inline-block" />Spells
			</a>
		</li>
		<li class="py-1 text-lg">
			<a
				href="/relics"
				type="button"
				class="rounded-md w-full text-left p-2"
				on:click={drawerClose}
			>
				<LogoSketch size={32} class="pr-3 inline-block" />Relics
			</a>
		</li>
		<li class="py-1 text-lg">
			<a href="/about" type="button" class="rounded-md w-full text-left p-2" on:click={drawerClose}
				><InformationFilled size={32} class="pr-3 inline-block" />About
			</a>
		</li>
		<li class="py-1 text-lg">
			<a
				href="https://cairnrpg.com/"
				type="button"
				class="rounded-md w-full text-left p-2"
				on:click={drawerClose}
				><RuleFilled size={32} class="pr-3 inline-block" />Cairn RPG Rules
			</a>
		</li>
		<li class="py-1 text-lg">
			<a
				href="https://github.com/dustatron/warden-tools"
				type="button"
				class="rounded-md w-full text-left p-2"
				on:click={drawerClose}
				><LogoGithub size={32} class="pr-3 inline-block" />GitHub
			</a>
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
