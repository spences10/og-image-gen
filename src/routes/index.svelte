<script>
  import html2canvas from 'html2canvas'
  import { onMount } from 'svelte'

  export let title, image, author, website

  // export let width = 1200, height = 630;

  // let card
  // onMount(async () => {
  //   await html2canvas(
  //     document.querySelectorAll('#card-wrapper')
  //   ).then(canvas => {
  //     card = canvas
  //   })
  // })

  onMount(() => {
    let element = document.getElementsByClassName('card-wrapper')
    html2canvas(element[0]).then(canvas => {
      console.log('=====================')
      console.log(canvas.toDataURL())
      console.log('=====================')
    })
  })
</script>

<div class="card-wrapper">
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
    background: linear-gradient(
      0.25turn,
      var(--color-1),
      var(--color-2)
    );
    height: 630px;
    width: 1200px;
    font-family: 'Space Mono', sans-serif;
    font-size: 18px;
    padding: 50px;
  }
  .container {
    /* position: relative; */
    /* height: calc(100vh - 100px); */
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
    color: var(--background);
    word-spacing: -20px;
    background: linear-gradient(var(--color-2), var(--color-1));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .author {
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding: 50px;
    font-size: 3em;
    color: var(--text);
  }
  .author-image {
    width: 1.5em;
    border-radius: 50%;
    margin-bottom: -9px;
  }
  .website {
    position: absolute;
    bottom: 0px;
    right: 0px;
    padding: 50px;
    font-size: 2em;
    color: var(--text);
  }
</style>
