import { sveltekit } from '@sveltejs/kit/vite';
import * as fs from 'fs';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), rawFonts(['.ttf'])],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
});

function rawFonts(ext: string[]) {
	return {
		name: 'vite-plugin-raw-fonts',
		transform(code: any, id: fs.PathOrFileDescriptor) {
			if (
				typeof id === 'string' &&
				ext.some((e: string) => id.endsWith(e))
			) {
				const buffer = fs.readFileSync(id);
				return {
					code: `export default ${JSON.stringify(buffer)}`,
					map: null,
				};
			}
		},
	};
}
