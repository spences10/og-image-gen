import fs from 'fs';
import { chromium } from 'playwright';

export const get = async () => {
	const browser = await chromium.launch();
	const context = await browser.newContext();

	const page = await context.newPage();

	await page.goto('https://www.google.com');

	await page.screenshot({ path: './tmp/favicon.png' });

	await browser.close();
	const img = fs.readFileSync('./tmp/favicon.png');
	return {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public,immutable,no-transform,s-max-age=21600,max-age=21600'
		},
		body: img
	};
};
