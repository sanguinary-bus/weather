import { fileURLToPath, URL } from 'node:url'

import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import obfuscator from 'vite-plugin-bundle-obfuscator'
import { VitePWA } from 'vite-plugin-pwa'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig((config) => {
  const isProduction = config.mode === 'production'
  const obfuscatorPlugin = !isProduction
    ? []
    : [
        obfuscator({
          log: true,
          enable: true,
          autoExcludeNodeModules: {
            enable: true,
            manualChunks: ['primevue', 'dayjs'],
          },
          threadPool: true,
        }),
      ]

  return {
    base: '/weather/',
    plugins: [
      vue(),
      vueDevTools(),
      tailwindcss(),
      Components({
        resolvers: [PrimeVueResolver()],
      }),
      VitePWA({
        devOptions: {
          enabled: !isProduction,
        },
        registerType: 'autoUpdate',
        includeAssets: [
          'favicon.ico',
          'apple-icon-180.png',
          'manifest-icon-512.maskable.png',
        ],
        manifest: {
          name: 'Weather',
          short_name: 'Weather',
          description: 'Weather',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'manifest-icon-192.maskable.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'maskable',
            },
            {
              src: 'manifest-icon-512.maskable.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          runtimeCaching: [
            {
              urlPattern: ({ request }) =>
                request.destination === 'style' ||
                request.destination === 'script' ||
                request.destination === 'worker',
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'static-resources',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 15 * 24 * 60 * 60, // 15 days
                },
              },
            },
            {
              urlPattern: ({ request }) => request.destination === 'image',
              handler: 'CacheFirst',
              options: {
                cacheName: 'images',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
                },
              },
            },
          ],
        },
      }),
      ...obfuscatorPlugin,
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      sourcemap: !isProduction,
    },
    optimizeDeps: {
      include: ['jquery'],
    },
    server: {
      allowedHosts: true,
      port: 3000,
    },
    preview: {
      allowedHosts: true,
      port: 3000,
    },
  }
})
