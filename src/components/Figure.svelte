<script>
    const { src, alt, children, description, credit } = $props();
</script>

<figure>
    {#if children}
        {@render children()}
    {:else}
        <img {src} {alt} />
    {/if}
    <figcaption>
        <p>
            {#if credit}<span>{credit}</span>{/if}
            {description}
        </p>
    </figcaption>
</figure>

<style>
    figure {
        margin-inline: 0;
        width: var(--width, 100%);
    }

    img {
        max-width: 100%;
        max-height: 500px;
    }

    figcaption,
    span {
        margin-bottom: 1em;
    }

    span {
        float: right;
        font-style: italic;
        margin-left: 30%;
    }
</style>
