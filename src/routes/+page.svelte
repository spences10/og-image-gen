<script lang="ts">
	import { page } from '$app/stores';
	import Card from '$lib/components/card.svelte';
	import { Head } from 'svead';
	import '../global.css';
	let title = 'SvelteKit Open Graph Images';
	let author = 'Author Name';
	let website = 'website.com';
	let img =
		'https://res.cloudinary.com/defkmsrpw/image/upload/v1578491966/social/spencee.png';
	$: ogImgUrl = `${$page.url.toString()}og?title=${title}&author=${author}&website=${website}&img=${img}`;

	// This is to create the query string for the image in the head component
	const objectToQueryParams = (
		obj: { [s: string]: unknown } | ArrayLike<unknown>
	) => {
		const params = Object.entries(obj).map(
			([key, value]) => `${key}=${value}`
		);
		return '?' + params.join('&');
	};

	const ogImageUrl = (
		author: string,
		website: string,
		title: string
	) => {
		const params = {
			title,
			author,
			website: website || `website.com`,
		};
		return `${$page.url.toString()}og${objectToQueryParams(params)}`;
	};
</script>

<Head
	title={`SvelteKit Open Graph Images`}
	description={`SvelteKit Open Graph Images - with satori, satori-html and @resvg/resvg-js`}
	image={ogImageUrl(author, website, title)}
	url={$page.url.toString()}
	{website}
/>

<h1>Open Graph Images with Satori</h1>

<p>
	Visit the awesome <a
		href="https://geoffrich.net/posts/svelte-social-image/#main-content"
	>
		guide
	</a>
	from Geoff Rich to learn more.
</p>

<p>
	You can also play around with the variables here to generate an
	image.
</p>

<form>
	<label for="title">Title:</label>
	<input type="text" name="title" id="title" bind:value={title} />
	<label for="title">Author:</label>
	<input type="text" name="author" id="author" bind:value={author} />
	<label for="title">Website:</label>
	<input
		type="text"
		name="website"
		id="website"
		bind:value={website}
	/>
	<label for="title">Image:</label>
	<input type="text" name="img" id="img" bind:value={img} />
</form>

<p>
	URL query string: <a
		target="_blank"
		rel="noopener noreferrer"
		href={ogImgUrl}
	>
		<code>
			{ogImgUrl}
		</code>
	</a>
</p>

<img
	src={`/og?title=${title}&author=${author}&website=${website}&img=${img}`}
	alt="example"
/>

<p>
	This is the actual component with default props, fixed height and
	width:
</p>

<div class="card">
	<Card />
</div>

<style>
	@font-face {
		font-family: 'Victor Mono';
		src: url('/src/lib/fonts/VictorMono-Regular.ttf')
			format('tryuetype');
		font-weight: normal;
		font-style: normal;
	}

	.card {
		font-family: 'Victor Mono';
		font-style: italic;
		height: 630px;
		width: 1200px;
	}
	form {
		display: flex;
		flex-direction: column;
		max-width: 50%;
	}
	form input {
		margin-bottom: 10px;
	}
</style>
