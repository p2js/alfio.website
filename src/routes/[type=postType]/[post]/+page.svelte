<script>
    const { data } = $props();

    let { title, published, last_modified, category, Content, section } =
        $derived(data);

    $inspect(section);

    let back_to_route = $derived(
        section === "Things I love" ? "/loves" : "/blog",
    );

    function format(date) {
        return date.split("T")[0].replaceAll("-", "/");
    }
</script>

<a href={back_to_route}>{section}</a>

<article>
    <header>
        <p>{category}</p>
        <h1>{title}</h1>
        <p>
            Published {format(published)}
            {#if last_modified}
                — Last modified {format(last_modified)}
            {/if}
        </p>
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
    header {
        margin: 2em 0;
    }

    h1 {
        margin-top: 0;
        margin-bottom: 0;
    }

    header > p {
        color: #666;
        font-size: 14px;
        margin-top: 0.5em;
    }

    main {
        margin: 2em 0;
        padding: 1em 0;
        border-block: 1px solid #555;
    }
</style>
