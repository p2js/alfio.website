<script>
    import { mdsvex } from "mdsvex";
    import { onMount } from "svelte";
    import { highlight } from "$lib/shiki";

    const { language, code, style } = $props();

    let html = $state("");

    $effect(async () => {
        html = await highlight(code, language.toLowerCase());
    });

    const trafficLightColors = [
        ["#FF5F56", "#E0443E"],
        ["#FFBD2E", "#DEA123"],
        ["#27C93F", "#1AAB29"],
    ];
</script>

<div class="root" {style}>
    <div class="trafficLight">
        {#each trafficLightColors as [fill, stroke]}
            <span style={`background: ${fill}; border: 0.1px solid ${stroke}`}>
            </span>
        {/each}
    </div>
    <div class="code">
        {@html html}
    </div>
</div>

<style>
    .root {
        display: flex;
        flex-direction: column;
        min-width: calc(var(--width, 100%) - 2em);
        background-color: #263238;
        border-radius: 10px;
        padding: 0.5em 1em 0;
        line-height: 1.5em;
        font-size: var(--font-size, 14px);
    }

    .trafficLight {
        margin: 10px -4px 10px;
        display: flex;
        align-items: center;
    }

    /* For a copy button which I may implement later */
    /*
    .trafficLight > button {
        margin-left: auto;
        margin-right: -0.5em;
        padding: 0.6em 0.5em 0.5em;
        display: none;
        background-color: transparent;
        color: #546e7a;
        border: none;
        border-radius: 10px;
        font-family: "Consolas Ligaturized V3";
    }

    .trafficLight > button:hover {
        background-color: #34444c;
    }

    .root:hover button {
        display: inline;
    } */

    .trafficLight > span {
        width: 10px;
        height: 10px;
        background: #eee;
        margin: 0 4px;
        border-radius: 100%;
    }

    .root :global(.shiki) {
        margin-top: 0.5em;
        overflow-x: scroll;
    }

    :global(code) {
        font-family: "Consolas Ligaturized V3";
    }
</style>
