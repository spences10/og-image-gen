<script>
	export let title = 'Hello, world!';
	export let author = 'Scott Spence';
	export let website = 'scottspence.com';
</script>

<div
	style="
    display: flex;
    background: linear-gradient(45deg, rgb(102, 51, 153), rgb(170, 127, 212));
    height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
  "
>
	<div
		style="
      display: flex;
      position: relative;
      height: 80vh;
      width: 80vw;
      padding: 50px;
      background: white;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
        0 6px 6px rgba(0, 0, 0, 0.23);
      border-radius: 14px;
    "
	>
		<div
			style="
        font-style: italic;
        font-size: 80px;
        font-weight: bold;
      "
		>
			{title}
		</div>
	</div>
	<div style="
      position: absolute;
    "
  >
		{author}
	</div>
	<img
		src="https://res.cloudinary.com/defkmsrpw/image/upload/v1578491966/social/spencee.png"
		alt=""
		style="
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 0 1rem;
        border: 4px solid white;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
      "
	/>
	<div style="
      position: absolute;
      bottom: 0;
      left: 0;
    "
  >{website}</div>
</div>
