<script lang="ts">
  // import * as htmlToImage from 'html-to-image'
  import { onMount } from 'svelte'

  export let title: string = 'Default title'
  export let image: string = 'https://scottspence.com/favicon.ico'
  export let author: string = 'Scott Spence'
  export let website: string = 'scottspence.com'

  let node: HTMLElement

  onMount(() => {
    // node = document.getElementById('card-wrapper')
    // htmlToImage
    //   .toPng(node, {})
    //   .then(dataUrl => {
    //     var img = new Image()
    //     img.src = dataUrl
    //     document.body.appendChild(img)
    //   })
    //   .catch(error => {
    //     console.error('oops, something went wrong!', error)
    //   })
  })
</script>

<div id="card-wrapper" class="card-wrapper">
  <div class="container">
    <div class="title">{title}</div>
    <div class="author">
      <img src={image} class="author-image" alt={title} />
      {author}
    </div>
    <div class="website">{website}</div>
  </div>
</div>

<style>
  .card-wrapper {
    position: relative;
    --color-1: rgb(102, 51, 153);
    --color-2: rgb(170, 127, 212);
    --background: rgb(247, 250, 252);
    --text: rgb(156, 163, 175);
    --height: 630px;
    --width: 1200px;
    background: linear-gradient(
      0.25turn,
      var(--color-1),
      var(--color-2)
    );
    height: var(--height);
    width: var(--width);
    font-family: 'Space Mono', sans-serif;
    font-size: 18px;
    padding: 50px;
  }
  .container {
    position: relative;
    height: calc(var(--height) - 100px);
    padding: 50px;
    background: var(--background);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 14px;
  }
  .title {
    font-size: 5.4em;
    height: 4em;
    overflow: hidden;
    color: var(--color-1);
    word-spacing: 5px;
    /* https://github.com/bubkoo/html-to-image/issues/237 */
    /* background: linear-gradient(var(--color-2), var(--color-1)); */
    /* -webkit-background-clip: text; */
    /* background-clip: text; */
    /* -webkit-text-fill-color: transparent; */
  }
  .author {
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding: 0px 50px 50px 50px;
    font-size: 3em;
    color: var(--text);
  }
  .author-image {
    width: 1.5em;
    border-radius: 50%;
    margin-bottom: -20px;
  }
  .website {
    position: absolute;
    bottom: 0px;
    right: 0px;
    padding: 0px 50px 50px 50px;
    font-size: 2em;
    color: var(--text);
  }
</style>
