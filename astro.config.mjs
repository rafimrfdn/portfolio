import { defineConfig } from 'astro/config'
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  // https://astro.build/config/plugins
  integrations: [partytown()],
})
