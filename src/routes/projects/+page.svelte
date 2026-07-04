<script>
    import Project from "./Project.svelte";
    import { projects } from "./projects";
</script>

<h1>Projects</h1>

<p>Filter by type:</p>
<p>Or by language:</p>

{#each projects as project}
    <Project {...project} />
{/each}
