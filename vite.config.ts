/* eslint-disable import/no-extraneous-dependencies */
import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteBasicSslPlugin()],
  base: '/dev-shavasado',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/mixins.scss";         
          @import "@/assets/styles/variables.scss";
        `,
      },
    },
  },
})
