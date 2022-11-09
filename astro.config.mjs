// bad but works
import 'dotenv/config';

import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';

const { DOMAIN_NAME } = process.env;

// https://astro.build/config
export default defineConfig({
  site: `${DOMAIN_NAME}`,
  sitemap: true,
  // https://astro.build/config/plugins
  experimental: {
    integrations: true,
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dracula',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
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
                'Blog, to share my knowledge and experience with the world.',
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
              name: 'CheatSheets | Mohammad Abu Mattar',
              short_name: 'CheatSheets | Mohammad Abu Mattar',
              description:
                'CheatSheets, A collection of cheatsheets for various programming languages, markup languages, databases, devops tools, and more.',
              url: './cheatsheets',
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
              name: 'Daily Quote | Mohammad Abu Mattar',
              short_name: 'Daily Quote | Mohammad Abu Mattar',
              description:
                'Daily Quote, A collection of quotes from famous people, to inspire you and motivate you to do your best.',
              url: './daily-quote',
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
                'Link tree, A collection of links to my social media accounts, and other useful links.',
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
                'RSS, A collection of RSS feeds for my blog posts, and other useful RSS feeds.',
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
});
