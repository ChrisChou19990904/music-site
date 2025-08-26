import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'  // 記得引入 path

export default defineConfig({
  plugins: [vue()],
  base: '/music-site/',
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // 加上這一行，設定 @ 指向 src 目錄
    },
  },
})

