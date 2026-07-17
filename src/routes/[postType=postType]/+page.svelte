<script>
    let { data } = $props();

    const categories = $derived(
        new Set(data.posts.map((post) => post.category)),
    );

    let showPosts = $derived(
        data.posts.filter(
            (post) =>
                !data.filter ||
                data.filter === post.category ||
                data.filter === post.language,
        ),
    );
</script>

<h1>{data.title}</h1>
<p>{@html data.blurb}</p>

<p>
    Filter by category:
    <a href="?">All</a>{#each categories as category},
        <a href={`?filter=${category}`}>{category}</a>
    {/each}
</p>

<div id="main-content">
    {#each showPosts as post}
        <a href={`/${data.postType}/${post.route}`}>
            <h2>{post.title}</h2>
            <span></span>
            <p>{post.description}</p>
        </a>
    {/each}
</div>

<style>
    #main-content {
        margin-top: 3em;
    }
    #main-content a {
        display: block;
        color: black;
        text-decoration: none;
    }
    #main-content a:hover > h2 {
        text-decoration: underline;
    }
    /* h2 {
        display: inline;
        margin-right: 0.2em;
    } */
    span {
        color: #666;
        font-size: 14px;
    }
</style>
