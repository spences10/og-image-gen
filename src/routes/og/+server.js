import VictorMono from '$lib/fonts/VictorMono-Regular.ttf';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { html as toReactNode } from 'satori-html';
import Card from '$lib/components/card.svelte';

const height = 630;
const width = 1200;

/** @type {import('./$types').RequestHandler} */
export const GET = async ({url}) => {
	const message = url.searchParams.get('message') ?? undefined;
	// @ts-ignore
	const result = Card.render({ message });
	/** @type {any} */
	const element = toReactNode(
		`${result.html}<style>${result.css.code}</style>`
	);

	const svg = await satori(element, {
		fonts: [
			{
				name: 'Victor Mono',
				data: Buffer.from(VictorMono),
				style: 'normal',
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
		},
	});
};
