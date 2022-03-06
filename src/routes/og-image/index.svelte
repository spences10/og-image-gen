<script context="module">
  // export const load = async ({ url }) => {
  //   let title = url.searchParams.get('title')
  //   let author = url.searchParams.get('author')
  //   let website = url.searchParams.get('website')
  //   let image = url.searchParams.get('image')

  //   return {
  //     props: {},
  //   }
  // }
</script>

<script>
  import { page } from '$app/stores'
</script>

{$page.url.searchParams.get('image')}

<h1>Hellooo</h1>
