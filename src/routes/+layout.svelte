<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, type DrawerSettings } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import NavButtons from '../components/Nav/NavButtons.svelte';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	$: pageTitle = $page.url.pathname === '/' ? 'Favorites' : $page.url.pathname.replace('/', '');

	initializeStores();

	const drawerSettings: DrawerSettings = {
		id: 'example-3',
		// Provide your property overrides:
		bgDrawer: 'bg-gray-900 text-white',
		bgBackdrop: 'bg-gradient-to-tr from-blue-500/50 via-blue-900/50 to-blue-900/50',
		width: 'w-full sm:w-full md:w-1/2 lg:w-1/3',
		padding: 'p-4',
		rounded: 'rounded-xl'
	};
	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open(drawerSettings);
	}

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-1/2 ">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
				<strong class="text-xl uppercase">{pageTitle}</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="hidden md:block">
					<strong class="text-xl uppercase">Carin Tools</strong>
				</div>
				<!-- <NavButtons /> -->
			</svelte:fragment>
			<Drawer><NavButtons /></Drawer>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->

	<slot />
</AppShell>
