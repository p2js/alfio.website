import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { static_highlight } from './src/lib/static-highlight/plugin.js';

export default defineConfig({
	plugins: [
		await static_highlight(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			preprocess: [mdsvex({ extensions: ['.svx'] })],
			extensions: ['.svelte', '.svx']
		})
	]
});
