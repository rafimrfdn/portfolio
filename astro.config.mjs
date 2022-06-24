import { defineConfig } from 'astro/config'
import partytown from '@astrojs/partytown'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  // Enable the Preact integration to support Preact JSX components.
  integrations: [partytown(), preact()],
})
