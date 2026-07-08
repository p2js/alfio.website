<script>
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

    function format(date) {
        return date.split("T")[0].replaceAll("-", "/");
    }
</script>

<article>
    <header>
        <p><a href={route}>{section}</a> / {category}</p>
        <h1>{title}</h1>
        <p>
            Published {format(published)}
            {#if last_modified}
                — Last modified {format(last_modified)}
            {/if}
        </p>
        {#if cover_image}
            <Figure
                src={cover_image.src}
                alt={cover_image.alt}
                {description}
                credit={cover_image.credit}
            />
        {/if}
    </header>
    <main id="main-content">
        <Content />
    </main>
    <footer>
        <p>Written with love by <a href="/about">Alfio</a>.</p>
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

    header > p {
        color: #666;
        font-size: 14px;
        margin: 0;
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
