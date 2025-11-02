import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: '/BillTheBrick',
  plugins: [react(),tailwindcss(),
    VitePWA({
          registerType: 'autoUpdate', // Or 'prompt' for manual update
          // includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
          manifest: {
            name: 'BillTheBrick',
            short_name: 'BillTheBrick',
            description: 'BillTheBrick',
            theme_color: '#ffffff',
            icons: [
              {
                src: '/android-launchericon-192-192.png',
                sizes: '192x192',
                type: 'image/png',
              },
              {
                src: '/android-launchericon-512-512.png',
                sizes: '512x512',
                type: 'image/png',
              },
              {
                src: '/android-launchericon-512-512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable',
              },
            ],
          },
          // Other Workbox options if needed
        })
  ],
})
