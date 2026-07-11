<script>
    const { children } = $props();
</script>

<div>
    {@render children()}
</div>

<style>
    div {
        display: grid;
        grid-template-columns: repeat(var(--columns, 2), 1fr);
        column-gap: var(--gap, 2em);
        margin-block: -1em;
    }

    @media only screen and (max-width: 800px) {
        div {
            grid-template-columns: 1fr;
        }
    }
</style>
