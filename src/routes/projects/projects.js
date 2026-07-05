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
        name: "Web Televideo",
        repo: "p2js/televideo-web",
        description: `
        A web-based browser for Televideo, RAI's Italian teletext service, made to provide
        a better experience than the standard browser.
        This project was (admittedly coincidentally) published on Televideo's 40th anniversary.
        `,
        category: "Web",
        language: "HTML",
        thumbnail: "thumbnails/televideo.png",
        href: "/projects/web/televideo",
    },
    {
        name: "Xenon",
        repo: "p2js/xenon",
        description: `
        Lightweight implementation of a component system for static HTML,
        using less than 650 bytes of Javascript.
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
        Minimal, but powerful Javascript library for string formatting and printing.
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
    {
        name: "Verbena",
        repo: "p2js/verbena",
        description: `
        Javascript library that transcompiles mathematical function definitions
        to native JS functions, in an end-user-safe way. This was my first 
        parser/compiler-related project.
        `,
        category: "Library",
        language: "Javascript",
    },
    {
        name: "PGImg",
        repo: "p2js/pgimg",
        description: `
        Webtoy that generates unique 19x9 images from text seeds using their SHA-512 hash.
        It was a small gift to my girlfriend over a summer break from university;
        I wanted to create something that could be beautiful and unique to her
        despite not being very artsy.`,
        category: "Web",
        language: "HTML",
        href: "/projects/web/pgimg",
    },
    {
        name: "cpk",
        repo: "p2js/cpk",
        description: `
        Modern TOML-based dependency manager and project runner for C, designed around unity builds.
        Inspired by Rust's cargo.
        `,
        category: "Misc",
        language: "C",
    },
    {
        name: "unique-enum",
        repo: "p2js/unique-enum",
        description: `
        Runtime-safe alternative to Typescript enums that maintains type safety and ergonomics.
        Each variant is stored as a unique object rather than a number at runtime which allows for
        some extra features, and autocomplete still works as normal.
        `,
        category: "Library",
        language: "Javascript",
        snippet: `import { Enum } from 'unique-enum';

const Direction = Enum(
    'North',
    'East',
    'South',
    'West'
);`,
    },
    {
        name: "rstypes",
        repo: "p2js/rstypes",
        description: `
        A type-safe implementation of extremely lightweight option and result types for Typescript and Javascript.`,
        category: "Library",
        language: "Javascript",
    },
    // quickmc, propositional, xenon, ??structured-args?
];
