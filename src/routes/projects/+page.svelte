<script>
    import Project from "./Project.svelte";
    import { projects } from "./projects";

    const categories = new Set(projects.map((p) => p.category));
    const languages = new Set(projects.map((p) => p.language));

    let { data } = $props();

    let showProjects = $derived(
        projects.filter(
            (project) =>
                !data.filter ||
                data.filter === project.category ||
                data.filter === project.language,
        ),
    );
</script>

<h1>Projects</h1>

<p>
    This is a selection of personal projects I've made.
    <br />
    You can find more on my
    <a href="https://github.com/p2js" rel="noreferrer" target="_blank">
        GitHub
    </a>.
</p>

<p>
    Filter by type:
    <a href="?">All</a>{#each categories as category},
        <a href={`?filter=${category}`}>{category}</a>
    {/each}
</p>
<p>
    Or by language:
    <a href="?">All</a>{#each languages as language},
        <a href={`?filter=${language}`}>{language}</a>
    {/each}
</p>

<main id="main-content">
    {#each showProjects as project}
        <Project {...project} />
    {/each}
</main>

<style>
    main {
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2em;
    }

    @media only screen and (max-width: 800px) {
        main {
            grid-template-columns: 1fr;
        }
    }
</style>
