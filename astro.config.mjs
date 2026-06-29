import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://iqbalrn.github.io/digital-freebies',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  },
  integrations: [
    tailwind()
  ],
});
