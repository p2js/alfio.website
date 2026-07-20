<script>
    import Snippet from "../../components/Snippet.svelte";

    let { name, description, repo, href, thumbnail, snippet } =
        $props();
</script>

<div class="root">
    <h2>{name}</h2>
    <div>
        {#if href}
            <a {href} target="_blank" rel="noreferrer">Link</a> -
        {/if}
        <a href={`https://github.com/${repo}`} target="_blank" rel="noreferrer">
            View on Github
        </a>
    </div>
    <p>
        {description}
    </p>
    <div class="showcase">
        {#if snippet}
            <Snippet --font-size="14px" --width="100%">
                {@html snippet}
            </Snippet>
        {:else if thumbnail}
            <img src={thumbnail} alt={`Project thumbnail for ${name}`} />
        {/if}
    </div>
</div>

<style>
    .root {
        display: grid;
        grid-template-rows: repeat(3, min-content) 1fr;
    }

    h2 {
        margin-bottom: 0.5em;
    }

    .showcase {
        margin-top: auto;
        display: flex;
    }

    img {
        max-width: 100%;
    }
</style>
