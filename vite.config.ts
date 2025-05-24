import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { BootstrapVueNextResolver } from 'bootstrap-vue-next';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/eduport_v/",
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    proxy: {
      '/stepik-api': {
        target: 'https://stepik.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/stepik-api/, ''),
        configure: (proxy) => {
          // Настраиваем прокси, чтобы следовать перенаправлениям
          proxy.on('proxyRes', (proxyRes, req, res) => {
            // Логируем ответы для отладки
            console.log(`Ответ от Stepik: ${req.method} ${req.url} → ${proxyRes.statusCode}`);
          });
        }
      }
    }
  }

  
});
