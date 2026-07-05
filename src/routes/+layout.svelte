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
