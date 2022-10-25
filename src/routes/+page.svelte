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

<input type="text" bind:value={title}>
<input type="text" bind:value={author}>
<input type="text" bind:value={website}>
<input type="text" bind:value={img}>

<p>
	You can also check out the <a
		href={`/og?title=${title}&author=${author}&website=${website}&img=${img}`}
		target="_blank"
		rel="noreferrer">demo</a
	>.
</p>

<img
	src={`/og?title=${title}&author=${author}&website=${website}&img=${img}`}
	alt="example"
/>
