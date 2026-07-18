<script>
    import { format } from "$lib/datetime";

    let { data } = $props();

    const categories = $derived(
        new Set(data.posts.map((post) => post.category)),
    );

    let showPosts = $derived(
        data.posts
            .filter((post) => !data.filter || data.filter === post.category)
            .sort(
                (p1, p2) =>
                    Date.parse(p2.published).valueOf() -
                    Date.parse(p1.published).valueOf(),
            ),
    );
</script>

<h1>{data.title}</h1>
<p>{@html data.blurb}</p>

<p>
    <span class="filter-label">Filter by category:</span>
    <a href="?">All</a>{#each categories as category},
        <a href={`?filter=${category}`}>{category}</a>
    {/each}
</p>

<div id="main-content">
    {#each showPosts as post}
        <a class="post" href={`/${data.postType}/${post.route}`}>
            {#if post.cover_image}
                <img src={post.cover_image.src} alt={post.cover_image.alt} />
            {/if}
            <span>
                <time datetime={post.published}>
                    {format(post.published)}
                </time>
                — {post.category}
            </span>
            <h2>{post.title}</h2>
            <p class="description">{@html post.description}</p>
        </a>
    {/each}
</div>

<style>
    .post {
        margin-block: 2em;
    }
    .post {
        display: block;
        /* display: grid;
        grid-template-columns: 1fr max-content; */
        color: black;
        text-decoration: none;
    }
    .post::before {
        content: "";
        display: block;
        border-top: 1px solid #555;
        width: 12.5%;
        margin-bottom: 2em;
    }
    .post:hover h2 {
        text-decoration: underline;
    }
    .post h2 {
        margin-block: 0.75em;
    }
    .post span {
        color: #666;
        font-size: 14px;
    }
    img {
        float: right;
        max-height: 100px;
    }

    @media only screen and (max-width: 800px) {
        .filter-label {
            display: block;
        }
        img {
            display: block;
            float: none;
            margin-bottom: 1.5em;
        }
    }
</style>
