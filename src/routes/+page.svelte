<script>
	let title = 'Title goes here';
	let author = 'Author Name';
	let website = 'website.com';
	let img =
		'https://res.cloudinary.com/defkmsrpw/image/upload/v1578491966/social/spencee.png';
</script>

<h1>Open Graph Images with Satori</h1>

<p>
	Visit the awesome <a
		href="https://geoffrich.net/posts/svelte-social-image/#main-content"
	>
		guide
	</a>
	from Geoff Rich to learn more.
</p>

<p>You can also check play around with the vriables here.</p>

<input type="text" bind:value={title} />
<input type="text" bind:value={author} />
<input type="text" bind:value={website} />
<input type="text" bind:value={img} />

<p>
	URL query string: <code>
		{`/og?title=${title}&author=${author}&website=${website}&img=${img}`}
	</code>
</p>

<img
	src={`/og?title=${title}&author=${author}&website=${website}&img=${img}`}
	alt="example"
/>
