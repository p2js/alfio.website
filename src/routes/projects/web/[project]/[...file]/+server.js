/**
 * Simple endpoint to serve my static html projects.
 * Serves the matching project in /static/web,
 * either from its src folder or root,
 * and rewrites any relative HTML paths accordingly.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { error } from "@sveltejs/kit";

export function GET({ params }) {
    const project = params.project;
    const file = params.file || "index.html";

    // Priority 1: static/web/[project]/src/[file]
    const srcPath = join("static", "web", project, "src", file);
    if (existsSync(srcPath)) {
        return serveFile(srcPath, project);
    }

    // Priority 2: static/web/[project]/[file]
    const rootPath = join("static", "web", project, file);
    if (existsSync(rootPath)) {
        return serveFile(rootPath, project);
    }

    return new Response(null, {
        status: 302,
        headers: { Location: `/notfound` },
    });
}

function serveFile(path, project) {
    let data = readFileSync(path);
    const ext = path.split(".").pop();

    // Only rewrite HTML
    if (ext === "html") {
        // Force relative asset paths
        data = data.toString("utf8").replaceAll(/(href|src)="\.?\/?([^"]+)"/g, (match, attr, value) => {
            // Skip external URLs
            if (value.startsWith("http") || value.startsWith("//")) {
                return match;
            }

            // Rewrite to absolute project path
            return `${attr}="/projects/web/${project}/${value}"`;
        });
    }

    const types = {
        html: "text/html",
        css: "text/css",
        js: "application/javascript",
        png: "image/png",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        svg: "image/svg+xml",
        json: "application/json",
        webp: "image/webp",
        gif: "image/gif",
    };

    return new Response(data, {
        headers: {
            "Content-Type": types[ext] || "application/octet-stream",
        },
    });
}
