<script>
    import { mdsvex } from "mdsvex";
    import { onMount } from "svelte";
    import { highlight } from "$lib/shiki";

    const { language, code, wrap = false } = $props();

    let html = $state("");

    $effect(async () => {
        html = await highlight(code, language);
    });

    const trafficLightColors = [
        ["#FF5F56", "#E0443E"],
        ["#FFBD2E", "#DEA123"],
        ["#27C93F", "#1AAB29"],
    ];
</script>

<div class="root" {wrap}>
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
        min-width: var(--width);
        background-color: #263238;
        border-radius: 10px;
        padding: 0.5em 1em;
        filter: drop-shadow(0 0 0.5em #0006);
        line-height: 1.5em;
    }

    .root[wrap="true"] {
        width: var(--width);
    }

    @media only screen and (max-width: 800px) {
        .root {
            width: 90% !important;
        }
    }

    .trafficLight {
        margin-left: -4px;
        width: 80px;
        height: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .trafficLight > span {
        width: 10px;
        height: 10px;
        background: #eee;
        margin: 0 4px;
        border-radius: 100%;
    }

    .root[wrap="true"] :global(.shiki) {
        white-space: pre-wrap;
        word-break: break-word;
        overflow-wrap: anywhere;
    }

    :global(.shiki code) {
        font-family: "Consolas Ligaturized V3";
    }
</style>
