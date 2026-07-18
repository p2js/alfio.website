<script>
    import { format } from "$lib/datetime";
    import Figure from "../../../components/Figure.svelte";

    const { data } = $props();

    let {
        title,
        published,
        last_modified,
        category,
        section,
        cover_image,
        description,
        Content,
        route,
    } = $derived(data);
</script>

<article>
    <header>
        <p class="small"><a href={route}>{section}</a> / {category}</p>
        <h1>{title}</h1>
        <p class="small">
            Published
            <time datetime={published}>
                {format(published)}
            </time>
            {#if last_modified}
                <span class="last-modified">
                    Last modified
                    <time datetime={last_modified}>
                        {format(last_modified)}
                    </time>
                </span>
            {/if}
        </p>
        {#if cover_image}
            <Figure
                src={cover_image.src}
                alt={cover_image.alt}
                {description}
                credit={cover_image.credit}
            />
        {:else}
            <p>{@html description}</p>
        {/if}
    </header>
    <main id="main-content">
        <Content />
    </main>
    <footer>
        <p>
            Thank you for reading. Written with love by
            <a href="/">Alfio</a>.
        </p>
        <p>
            Thoughts?
            <a href="mailto:tomarchioalfio5@gmail.com">e-mail</a> me about them!
        </p>
    </footer>
</article>

<style>
    h1 {
        margin-top: 0.5em;
        margin-bottom: 0.2em;
    }

    @media only screen and (max-width: 800px) {
        h1 {
            margin-top: -0.5em;
        }
        header span {
            display: block;
        }
        .last-modified::before {
            display: none;
        }
    }

    .small {
        color: #666;
        font-size: 14px;
        margin: 0;
    }

    .last-modified::before {
        content: " — ";
    }

    main {
        margin: 2em 0;
    }

    main::before,
    main::after {
        content: "";
        display: block;
        border-top: 1px solid #555;
        width: 12.5%;
        margin-block: 2em;
    }
</style>
