import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';

const manifestForPlugIn = {
  registerType:'autoUpdate',
  includeAssets:["logo.png","android-launchericon-512-512.png","android-launchericon-192-192.png","apple-touch-icon.png"],
  manifest:{
    name:"BillTheBrick",
    short_name:"BillTheBrick",
    description:"BillTheBrick",
    icons:[{
      src: '/android-launchericon-192-192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'any'
    },
    {
      src: '/apple-touch-icon.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'any',
    },
    {
      src: '/android-launchericon-512-512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  },
  workbox: {
        // Cache localStorage-related files and assets
        globPatterns: ['**/*.{js,css,html,png,jpg,svg}'],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst', // Try network first, fallback to cache
            options: {
              cacheName: 'html-cache',
            },
          },
          {
            urlPattern: ({ request }) => ['script', 'style', 'image'].includes(request.destination),
            handler: 'StaleWhileRevalidate', // Serve from cache, update in background
            options: {
              cacheName: 'asset-cache',
            },
          },
        ],
      },
}

// https://vite.dev/config/
export default defineConfig({
  base: '/BillTheBrick',
  plugins: [react(),tailwindcss(),
    VitePWA(manifestForPlugIn)
  ],
})
