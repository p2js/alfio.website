/**
 * {
 *   name:
 *   description:
 *   category: "web" | "library" (| "misc")
 *   language: "HTML" | "JavaScript" | "C" | "Rust"
 * }
 */

export const projects = [
    {
        name: "Xenon",
        description: `
        A lightweight implementatino of a component system for static HTML,
        using less than 650 bytes of JavaScript.
        Its primary use was to display my projects on the old version
        of my website.
        `,
        category: "library",
        language: "HTML",
        snippet: `<template _="greeting" name>
    <p>Hello, {name}!</p>
</template>
<greeting name="world"></greeting>
<!-- <p>Hello, World!</p> -->`,
    },
    {
        name: "RSFormat",
        description: "Minimal yet powerful JavaScript formatting and printing library.",
    },
];
