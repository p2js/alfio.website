import { createHighlighter } from "shiki";

let highlighter = await createHighlighter({
    themes: ["material-theme"],
    langs: ["javascript", "typescript", "html"],
});

export async function highlight(code, lang) {
    return highlighter.codeToHtml(code, {
        lang,
        theme: "material-theme",
    });
}
