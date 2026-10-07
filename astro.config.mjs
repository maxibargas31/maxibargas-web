// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://maxibargas.com',
  // 'file' genera servicios.html, igual que la V1: Netlify la sirve en /servicios
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // /blog no se promociona hasta que tenga contenido real
      filter: (page) => !/\/(404|blog)(\.html)?$/.test(page),
    }),
  ],
});
