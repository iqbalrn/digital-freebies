import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  },
  integrations: [
    tailwind()
  ],
});
