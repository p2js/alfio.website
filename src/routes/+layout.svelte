<script>
	import { page } from "$app/state";
	import favicon from "$lib/assets/favicon.svg";
	import "$lib/assets/fonts.css";

	let { children } = $props();
	let sitename = "alfiot.net";
	let main_title = $derived(
		(page.data.title || "Error") +
			(page.data.type === "article" ? ` - ${page.data.section}` : ""),
	);
	let title = $derived(`${main_title} | ${sitename}`);
	let description = $derived(page.data.description);
	let type = $derived(page.data.type || "website");
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={main_title} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:site_name" content={sitename} />
	<meta property="og:description" content={description} />
	<meta property="og:locale" content="en_GB" />
	<meta name="description" content={description} />
	<meta name="theme-color" content="#f2f0e3" />
	<link rel="icon" href={favicon} />
	<link rel="canonical" href={page.url.href} />
	{#if type === "article"}
		<meta property="article:published_time" content={page.data.published} />
		{#if page.data.last_modified}
			<meta
				property="article:modified_time"
				content={page.data.last_modified}
			/>
		{/if}
		<meta property="article:section" content={page.data.section} />
		<meta property="article:publisher" content={`https://${sitename}`} />
		<meta property="article:tags" content={page.data.category} />
		{#if page.data.cover_image}
			<meta property="og:image" content={page.data.cover_image.src} />
			<meta property="og:image:alt" content={page.data.cover_image.alt} />
		{/if}
	{/if}
</svelte:head>

<a class="navskip" href="#main-content">Skip to content</a>

<div class="main">
	{#if page.data.show_nav}
		<nav>
			<a href="/about">About me</a>
			<a href="/projects">Projects</a>
			<a href="/loves">Things I love</a>
			<!-- <a href="/blog">Posts</a> -->
		</nav>
	{/if}
	{@render children()}
</div>

<style>
	.navskip {
		position: absolute;
		top: 1em;
		left: 1em;
		width: 0;
		overflow: hidden;
	}

	.navskip:focus {
		width: max-content;
	}

	:root {
		font-family: Helvetica, sans-serif;
		background-color: #f2f0e3;
		color: #333;
	}

	.main {
		margin: 5em auto;
		width: 55%;
		max-width: 650px;
	}

	nav {
		float: right;
		text-align: end;
	}
	nav > a {
		display: block;
		line-height: 1.3em;
	}

	:global(h1) {
		font-family: "ITC Lubalin Graph";
		text-transform: uppercase;
	}

	:global(a, a:visited) {
		color: #0864c7;
	}
	:global(p, li) {
		line-height: 1.3em;
	}

	@media only screen and (max-width: 800px) {
		.main {
			margin: 1em auto 0;
			min-width: 300px;
		}
		:global(h1) {
			padding-top: 1em;
			margin-bottom: 1em;
		}
	}
</style>
