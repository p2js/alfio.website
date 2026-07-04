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
        repo: "p2js/xenon",
        description: `
        A lightweight implementation of a component system for static HTML,
        using less than 650 bytes of JavaScript.
        Its primary use was to display my projects on the old version
        of my website.
        `,
        category: "Library",
        language: "HTML",
        snippet: `<template _="greeting" name>
    <p>Hello, {name}!</p>
</template>
<greeting name="World"></greeting>
<!-- <p>Hello, World!</p> -->`,
    },
    {
        name: "RSFormat",
        repo: "p2js/rsformat",
        description: `
            A minimal, but powerful JavaScript formatting and printing library.
            It's inspired by Rust's formatting helpers, hence the name.
        `,
        category: "Library",
        language: "Javascript",
        snippet: `import { rs, println } from "rsformat";

let str = rs\`\${15} is \${rs.ref(0)}:X in hex\`;
// s == "15 is 0xF in hex"

println(rs\`\${'a'}:>7\`);
// prints "      a"`,
    },
];
