<script>
    import Snippet from "../../components/Snippet.svelte";

    let { name, description, repo, href, language, thumbnail, snippet } =
        $props();
</script>

<div>
    <h2>{name}</h2>
    <p>
        {description}
        <br />
        {#if href}
            <a {href} target="_blank" rel="noreferrer">link</a> -
        {/if}
        {#if repo}
            <a
                href={`https://github.com/${repo}`}
                target="_blank"
                rel="noreferrer"
            >
                View on Github
            </a>
        {/if}
    </p>

    <div class="showcase">
        {#if snippet}
            <Snippet wrap --width="100%" {language} code={snippet} />
        {:else if thumbnail}
            <img src={thumbnail} alt={`Project thumbnail for ${name}`} />
        {/if}
    </div>
</div>

<style>
    .showcase {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        max-width: 100%;
        filter: drop-shadow(0 0 0.3em #0006);
    }
    br {
        margin-bottom: 0.5em;
    }
</style>
