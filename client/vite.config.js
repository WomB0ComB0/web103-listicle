import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ["**/*"]
      },
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: [
        "**/*"
      ],
    })
  ],
})
