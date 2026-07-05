<script>
    import Project from "./Project.svelte";
    import { projects } from "./projects";

    const categories = new Set(projects.map((p) => p.category));
    const languages = new Set(projects.map((p) => p.language));

    let show = $state("");

    let showProjects = $derived(
        projects.filter(
            (project) =>
                !show || show === project.category || show === project.language,
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
    Filter by category:
    <button onclick={() => (show = "")}>
        All
    </button>{#each categories as category},
        <button onclick={() => (show = category)}>{category}</button>
    {/each}
</p>
<p>
    Or by language:
    <button onclick={() => (show = "")}>
        All
    </button>{#each languages as language},
        <button onclick={() => (show = language)}>{language}</button>
    {/each}
</p>

<main id="main-content">
    {#each showProjects as project}
        <Project {...project} />
    {/each}
</main>

<style>
    button {
        margin: 0;
        padding: 0;
        cursor: pointer;
        text-decoration: underline;
        background: none;
        border: none;
        color: #0864c7;
        font: inherit;
    }
    div {
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2em;
    }

    @media only screen and (max-width: 800px) {
        div {
            grid-template-columns: 1fr;
        }
    }
</style>
