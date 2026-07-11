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
            {@html description}
            {#if credit}<i>({credit})</i>{/if}
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

    figcaption {
        margin-bottom: 1em;
    }

    @media only screen and (max-width: 800px) {
        figcaption,
        p {
            margin-bottom: 0;
        }
    }
</style>
