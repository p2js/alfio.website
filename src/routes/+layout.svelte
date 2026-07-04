<script>
	import { page } from "$app/state";
	import favicon from "$lib/assets/favicon.svg";
	import "$lib/assets/fonts.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{page.data.title || "Error"} | alfiot.net</title>
</svelte:head>

<div class="main">
	{#if page.data.show_nav}
		<div class="navbar">
			<a href="/about">About me</a>
			<a href="/projects">Projects</a>
			<a href="/loves">Things I love</a>
			<a href="/posts">Posts</a>
		</div>
	{/if}
	<div class="content">
		{@render children()}
	</div>
</div>

<style>
	:root {
		font-family: Helvetica, sans-serif;
		background-color: #f2f0e3;
		color: #333;
	}

	.main {
		margin: 5em auto 0;
		width: 50%;
		max-width: 600px;
	}

	.navbar {
		float: right;
		text-align: end;
	}
	.navbar > a {
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
