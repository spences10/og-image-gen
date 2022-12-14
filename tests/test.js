import { expect, test } from '@playwright/test';
let pageURL = 'http://localhost:4173/';

let config = {
	title: `SvelteKit Open Graph Images`,
	description: `SvelteKit Open Graph Images - with satori, satori-html and @resvg/resvg-js`,
	image: ``,
	author: `Author Name`,
	url: pageURL,
	website: `website.com`,
	openGraphImage: `${pageURL}og?title=SvelteKit Open Graph Images&author=Author Name&website=website.com`,
};

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe(
		'Open Graph Images with Satori'
	);
});

test.describe('meta tags', () => {
	test('head has canonical', async ({ page }) => {
		await page.goto('/');
		const metaDescription = page.locator('link[rel="canonical"]');
		await expect(metaDescription).toHaveAttribute('href', pageURL);
	});

	test('head has description', async ({ page }) => {
		await page.goto('/');
		const metaDescription = page.locator('meta[name="description"]');
		await expect(metaDescription).toHaveAttribute(
			'content',
			config.description
		);
	});

	test('has open graph type', async ({ page }) => {
		await page.goto('/');
		const metaDescription = page.locator('meta[property="og:type"]');
		await expect(metaDescription).toHaveAttribute(
			'content',
			'website'
		);
	});

	test('has open graph title', async ({ page }) => {
		await page.goto('/');
		const metaDescription = page.locator('meta[property="og:title"]');
		await expect(metaDescription).toHaveAttribute(
			'content',
			config.title
		);
	});

	test('has open graph description', async ({ page }) => {
		await page.goto('/');
		const metaDescription = page.locator(
			'meta[property="og:description"]'
		);
		await expect(metaDescription).toHaveAttribute(
			'content',
			config.description
		);
	});

	test('has open graph image', async ({ page }) => {
		await page.goto('/');
		const metaDescription = page.locator('meta[property="og:image"]');
		await expect(metaDescription).toHaveAttribute(
			'content',
			config.openGraphImage
		);
	});

	test('has open graph twitter domain', async ({ page }) => {
		await page.goto('/');
		const metaDescription = page.locator(
			'meta[property="twitter:domain"]'
		);
		await expect(metaDescription).toHaveAttribute(
			'content',
			config.website
		);
	});

	test('has open graph twitter url', async ({ page }) => {
		await page.goto('/');
		const metaDescription = page.locator(
			'meta[property="twitter:url"]'
		);
		await expect(metaDescription).toHaveAttribute('content', pageURL);
	});

	test('has open graph twitter title', async ({ page }) => {
		await page.goto('/');
		const metaDescription = page.locator(
			'meta[name="twitter:title"]'
		);
		await expect(metaDescription).toHaveAttribute(
			'content',
			config.title
		);
	});

	test('has open graph twitter description', async ({ page }) => {
		await page.goto('/');
		const metaDescription = page.locator(
			'meta[name="twitter:description"]'
		);
		await expect(metaDescription).toHaveAttribute(
			'content',
			config.description
		);
	});

	test('has open graph twitter image', async ({ page }) => {
		await page.goto('/');
		const metaDescription = page.locator(
			'meta[name="twitter:image"]'
		);
		await expect(metaDescription).toHaveAttribute(
			'content',
			config.openGraphImage
		);
	});
});
