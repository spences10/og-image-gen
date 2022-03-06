import { chromium } from 'playwright';

export const launchChromium = async () => {
	const browser = await chromium.launch({ headless: false });

	const context = await browser.newContext();

	const page = await context.newPage();

	await page.goto('https://www.google.com');

	await page.screenshot({ path: './tmp/favicon.png' });

	await browser.close();
};
