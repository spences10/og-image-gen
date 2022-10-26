<script>
	export let title = 'Hello, world!';
	export let author = 'Scott Spence';
	export let website = 'scottspence.com';
	export let img = 'https://res.cloudinary.com/defkmsrpw/image/upload/v1578491966/social/spencee.png'
</script>

<div class="wrapper">
	<div class="container">
		<div class="title">
			{title}
		</div>
		<div class="website">
			{website}
		</div>
		<div class="author">
			{author}
		</div>
	</div>
	<img
		class="author-image"
		src={img}
		alt=""
	/>
</div>

<style>
	.wrapper {
		display: flex;
		position: relative;
		background: linear-gradient(
			45deg,
			rgb(102, 51, 153),
			rgb(170, 127, 212)
		);
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
	}
	.container {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		height: 90%;
		width: 95%;
		padding: 50px;
		background: white;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
			0 6px 6px rgba(0, 0, 0, 0.23);
		border-radius: 14px;
	}
	.title {
		font-style: italic;
		font-size: 85px;
		font-weight: bold;
		color: rgb(153, 108, 197);
		text-shadow: 2px 2px rgb(102, 51, 153);
	}

	.author-image {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		border: 4px solid white;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
			0 6px 6px rgba(0, 0, 0, 0.23);
		background: #fff;
	}
	.author {
		position: absolute;
		font-size: 30px;
		font-weight: bold;
    color: rgb(156, 163, 175);
		margin: 10px 20px;
		left: 0;
		bottom: 0;
	}
	.website {
		position: absolute;
		font-size: 20px;
		font-weight: bold;
    color: rgb(156, 163, 175);
		margin: 10px 20px;
		bottom: 0;
		right: 0;
	}
</style>
