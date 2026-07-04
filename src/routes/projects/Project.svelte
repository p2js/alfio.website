<script>
    import Snippet from "../../components/Snippet.svelte";

    let { name, description, repo, href, language, thumbnail, snippet } =
        $props();
</script>

<h2>{name}</h2>
<p>{description}</p>

{#if snippet}
    <Snippet
        wrap
        --width="75%"
        language={language.toLowerCase()}
        code={snippet}
    />
{/if}

<p>
    {#if repo}
        <a href={`https://github.com/${repo}`} target="_blank" rel="noreferrer">
            View on Github
        </a>
    {/if}

    {#if href}
        <a {href} target="_blank" rel="noreferrer">link</a>
    {/if}
</p>
