import { createHighlighter } from 'shiki';

function unescape_literal(string) {
	return string.replace(/\\([\s\S])/g, (_, char) => {
		if (char === '`') return '`';
		if (char === '$') return '$';
		if (char === '\\') return '\\';
		if (char === 'n') return '\n';
		if (char === 't') return '\t';
		if (char === 'r') return '\r';
		return char;
	});
}

const re = /\$highlight\(['"]([^'"]+)['"]\s*,\s*`((?:[^`\\]|\\.)*)`\)/gs;

export async function static_highlight() {
	// Strip the italics out of keywords in material-theme
	const { default: theme } = await import('shiki/themes/material-theme.mjs');
	for (const rule of theme.tokenColors ?? []) {
		if (rule.settings?.fontStyle) {
			rule.settings.fontStyle = rule.settings.fontStyle.replace('italic', '').trim();
		}
	}

	const highlighter = await createHighlighter({
		themes: [theme],
		langs: ['javascript', 'typescript', 'html']
	});

	return {
		name: 'static-highlight',
		async transform(code, id) {
			if (id.includes('node_modules')) return null;
			if (!code.includes('$highlight')) return null;
			const matches = [...code.matchAll(re)];
			if (!matches.length) return null;
			let result = code;
			for (let i = matches.length - 1; i >= 0; i--) {
				const { 0: full, 1: lang, 2: raw, index } = matches[i];
				const html = highlighter.codeToHtml(unescape_literal(raw), { lang, theme: 'material-theme' });
				result = result.slice(0, index) + JSON.stringify(html) + result.slice(index + full.length);
			}
			return { code: result, map: null };
		},
		buildEnd() {
			highlighter.dispose();
		}
	};
}
