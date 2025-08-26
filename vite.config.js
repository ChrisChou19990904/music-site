import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/music-site/',
  server: {
    port: 3000, // 你可以改成喜歡的端口
  }
})

