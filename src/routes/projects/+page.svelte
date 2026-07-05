<script>
    import Project from "./Project.svelte";
    import { projects } from "./projects";

    const categories = new Set(projects.map((p) => p.category));
    const languages = new Set(projects.map((p) => p.language));

    let showCategory = $state("");
    let showLanguage = $state("");

    let showProjects = $derived(
        projects.filter(
            (project) =>
                (!showCategory || project.category === showCategory) &&
                (!showLanguage || project.language === showLanguage),
        ),
    );
</script>

<h1>Projects</h1>

<p>
    Filter by category:
    <button onclick={() => (showCategory = "")}>
        All
    </button>{#each categories as category},
        <button onclick={() => (showCategory = category)}>{category}</button>
    {/each}
</p>
<p>
    Or by language:
    <button onclick={() => (showLanguage = "")}>
        All
    </button>{#each languages as language},
        <button onclick={() => (showLanguage = language)}>{language}</button>
    {/each}
</p>

<hr />
<div>
    {#each showProjects as project}
        <Project {...project} />
    {/each}
</div>

<style>
    div {
        width: 75%;
        margin: auto;
        margin-top: 2em;
    }

    @media only screen and (max-width: 800px) {
        div {
            width: 90% !important;
        }
    }
</style>
