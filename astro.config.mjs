// bad but works
import 'dotenv/config'

import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import { VitePWA } from 'vite-plugin-pwa'

const { DOMAIN_NAME } = process.env

// https://astro.build/config
export default defineConfig({
  site: `${DOMAIN_NAME}`,
  // https://astro.build/config/plugins
  experimental: {
    integrations: true,
  },
  integrations: [partytown(), react(), sitemap(), robotsTxt()],
  vite: {
    plugins: [
      VitePWA({
        manifest: {
          short_name: 'Mohammad Abu Mattar | Portfolio',
          name: 'Mohammad Abu Mattar | Portfolio',
          description:
            'Personal website, to show my software engineering skills at web development.',
          icons: [
            {
              src: 'assets/icon/favicon.ico',
              sizes: '64x64 32x32 24x24 16x16',
              type: 'image/x-icon',
              purpose: 'any maskable',
            },
            {
              src: 'assets/icon/logo192.png',
              type: 'image/png',
              sizes: '192x192',
            },
            {
              src: 'assets/icon/logo512.png',
              type: 'image/png',
              sizes: '512x512',
            },
          ],
          start_url: '.',
          display: 'standalone',
          theme_color: '#000000',
          background_color: '#ffffff',
          scope: '/',
          shortcuts: [
            {
              name: 'Portfolio | Mohammad Abu Mattar',
              short_name: 'Portfolio | Mohammad Abu Mattar',
              description:
                'Personal website, to show my software engineering skills at web development.',
              url: '.',
              icons: [
                {
                  src: 'assets/icon/favicon.ico',
                  sizes: '64x64 32x32 24x24 16x16',
                  type: 'image/x-icon',
                  purpose: 'any maskable',
                },
                {
                  src: 'assets/icon/logo192.png',
                  type: 'image/png',
                  sizes: '192x192',
                },
                {
                  src: 'assets/icon/logo512.png',
                  type: 'image/png',
                  sizes: '512x512',
                },
              ],
            },
            {
              name: 'Blog | Mohammad Abu Mattar',
              short_name: 'Blog | Mohammad Abu Mattar',
              description:
                'Personal website, to show my software engineering skills at web development.',
              url: './blog',
              icons: [
                {
                  src: 'assets/icon/favicon.ico',
                  sizes: '64x64 32x32 24x24 16x16',
                  type: 'image/x-icon',
                  purpose: 'any maskable',
                },
                {
                  src: 'assets/icon/logo192.png',
                  type: 'image/png',
                  sizes: '192x192',
                },
                {
                  src: 'assets/icon/logo512.png',
                  type: 'image/png',
                  sizes: '512x512',
                },
              ],
            },
            {
              name: 'Link tree | Mohammad Abu Mattar',
              short_name: 'Link tree | Mohammad Abu Mattar',
              description:
                'Personal website, to show my software engineering skills at web development.',
              url: './linktr.ee',
              icons: [
                {
                  src: 'assets/icon/favicon.ico',
                  sizes: '64x64 32x32 24x24 16x16',
                  type: 'image/x-icon',
                  purpose: 'any maskable',
                },
                {
                  src: 'assets/icon/logo192.png',
                  type: 'image/png',
                  sizes: '192x192',
                },
                {
                  src: 'assets/icon/logo512.png',
                  type: 'image/png',
                  sizes: '512x512',
                },
              ],
            },
            {
              name: 'RSS | Mohammad Abu Mattar',
              short_name: 'RSS | Mohammad Abu Mattar',
              description:
                'Personal website, to show my software engineering skills at web development.',
              url: './rss.xml',
              icons: [
                {
                  src: 'assets/icon/favicon.ico',
                  sizes: '64x64 32x32 24x24 16x16',
                  type: 'image/x-icon',
                  purpose: 'any maskable',
                },
                {
                  src: 'assets/icon/logo192.png',
                  type: 'image/png',
                  sizes: '192x192',
                },
                {
                  src: 'assets/icon/logo512.png',
                  type: 'image/png',
                  sizes: '512x512',
                },
              ],
            },
          ],
        },
      }),
    ],
  },
})
