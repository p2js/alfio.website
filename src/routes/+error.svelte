<script>
    import { page } from "$app/state";
</script>

{#if page.status === 404}
    <h1>NOT FOUND</h1>
    <p>Couldn't find the page you're looking for. Sorry!</p>
{:else if page.status === 500}
    <h1>SOMETHING WENT WRONG</h1>
    <p>The server encountered an internal error. This one's on me. Sorry!</p>
{:else}
    <h1>SOMETHING WENT WRONG</h1>
    <p>An error seems to have occurred. Sorry!</p>
    <p>{page.status} {page.error.message}</p>
{/if}

<a href="/">Back to the fun</a>
