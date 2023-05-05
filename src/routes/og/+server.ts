import Card from '$lib/components/card.svelte';
import VictorMonoBold from '$lib/fonts/VictorMono-Bold.ttf';
import VictorMonoBoldItalic from '$lib/fonts/VictorMono-BoldItalic.ttf';
import VictorMonoItalic from '$lib/fonts/VictorMono-Italic.ttf';
import VictorMono from '$lib/fonts/VictorMono-Regular.ttf';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { html as toReactNode } from 'satori-html';

const height = 630;
const width = 1200;

export const GET = async ({ url }) => {
	const title = url.searchParams.get('title') ?? undefined;
	const author = url.searchParams.get('author') ?? undefined;
	const website = url.searchParams.get('website') ?? undefined;
	const img = url.searchParams.get('img') ?? undefined;
	// @ts-ignore
	const result = Card.render({ title, author, website, img });
	const markup = toReactNode(
		`${result.html}<style>${result.css.code}</style>`
	);

	const svg = await satori(markup, {
		fonts: [
			{
				name: 'Victor Mono',
				data: Buffer.from(VictorMono),
				style: 'normal',
				weight: 400,
			},
			{
				name: 'Victor Mono',
				data: Buffer.from(VictorMonoItalic),
				style: 'italic',
				weight: 400,
			},
			{
				name: 'Victor Mono',
				data: Buffer.from(VictorMonoBold),
				style: 'normal',
				weight: 700,
			},
			{
				name: 'Victor Mono',
				data: Buffer.from(VictorMonoBoldItalic),
				style: 'italic',
				weight: 700,
			},
		],
		height,
		width,
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width,
		},
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png',
			'cache-control': 'public, max-age=31536000',
		},
	});
};
