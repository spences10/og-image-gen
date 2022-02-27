import preprocess from 'svelte-preprocess'
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {},

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config
