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
      includeAssets: [
        "**/*"
      ],
      manifest: {
        "scope": "/",
        "start_url": "/",
        "short_name": "Vite PWA",
        "description": "Vite PWA Demo",
        "name": "Vite PWA",
        "theme_color": "#f69435",
        "background_color": "#f69435",
        "dir": "ltr",
        "orientation": "portrait-primary",
        "display_override": ["minimal-ui", "browser", "fullscreen"],
        "display": "standalone",
        "icons": [
          {
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
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
