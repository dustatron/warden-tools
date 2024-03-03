<script>
	import { page } from '$app/stores';
	const url = $page.url.pathname;
	console.log('url', url);
</script>

<a
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
	Monster Options
</a>
<!-- <a
	class={`btn btn-sm ${url === '/combat' ? 'variant-filled-primary' : 'variant-ghost-surface'}`}
	href="/combat"
	data-sveltekit-reload
>
	Combat</a
> -->
<a
	class={`btn btn-sm ${url === '/about' ? 'variant-filled-primary' : 'variant-ghost-surface'}`}
	href="/about"
	data-sveltekit-reload
>
	About
</a>
