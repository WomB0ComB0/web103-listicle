import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        swSrc: 'sw.js',
        enabled: true,
      },
      injectRegister: 'auto',
      injectManifest: true,
      includeAssets: ['favicon.svg', 'favicon.ico'],
      workbox: {
        cleanupOutdatedCaches: true,
      },
    })
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
