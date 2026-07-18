export const projects = [
    {
        name: "RSFormat",
        repo: "p2js/rsformat",
        description: `
        Library that offers powerful alternative string formatting and printing for Javascript,
        building on modern template literals.  It's inspired by Rust's formatting
        helpers, hence the name.
        `,
        category: "Library",
        language: "Javascript",
        snippet: `let n = 15,
s = rs\`\${n} in hex: \${n}:#X\`;
// s == "15 in hex: 0xF"

println(rs\`\${'a'}:>7\`);
// prints "      a"`,
    },
    {
        name: "Web Televideo",
        repo: "p2js/televideo-web",
        description: `
        A web-based browser for Televideo, RAI's Italian Teletext service.
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
        A lightweight component system for static HTML,
        using less than 650 bytes of Javascript.
        I used it to display my projects on the old version
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
        name: "PGImg",
        repo: "p2js/pgimg",
        description: `
        Webtoy that generates unique 19x9 images from text seeds using their SHA-512 hash.
        It was a small gift to my girlfriend over a summer break from university;
        I wanted to create something that could be beautiful and unique to her
        despite the fact that i'm not very artsy.`,
        category: "Web",
        language: "HTML",
        thumbnail: "thumbnails/pgimg.png",
        href: "/projects/web/pgimg",
    },
    {
        name: "rstypes",
        repo: "p2js/rstypes",
        description: `
        Type-safe implementation of extremely lightweight option and result types for Typescript and Javascript.`,
        category: "Library",
        language: "Javascript",
        snippet: `function divide(a,b) {
    if (b == 0) return None;
    return Some(a / b);
}

let x = divide(1, 2);
console.log(x.match(
    n => n.toString(),
    () => "Division by 0"
));`,
    },
    {
        name: "unique-enum",
        repo: "p2js/unique-enum",
        description: `
        Runtime-safe alternative to Typescript enums that maintains type safety and ergonomics.
        Each variant is stored as a unique object rather than a number at runtime which allows for
        more resiliency and some extra features, while intellisense still works as normal.
        `,
        category: "Library",
        language: "Javascript",
        snippet: `const Direction = Enum(
    'North',
    'East',
    'South',
    'West'
);`,
    },
    {
        name: "cpk",
        repo: "p2js/cpk",
        description: `        
        Modern TOML-based dependency manager and project runner for C, 
        designed around unity (one-file) builds.
        Inspired by Rust's cargo.
        `,
        category: "Miscellaneous",
        language: "C",
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
        name: "Shaditor",
        repo: "p2js/shaditor",
        description: `
        Older project from 2022, a client-side browser GLSL shader editor with flexible controls.
        `,
        category: "Web",
        language: "HTML",
        href: "/projects/web/shaditor",
    },
];
