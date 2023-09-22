import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
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
