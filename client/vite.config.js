import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      workbox: {
        cleanupOutdatedCaches: true,
      },
    }),
  ],
  build: {
    outDir: '../server/public',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/top-movies': {
        target: 'http://localhost:3001'
      }
    }
  }
})
