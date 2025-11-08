// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 1. ПРОКСИ ДЛЯ API: Убирает '/api' из пути (для /products/1)
      '/api/products': {
        target: 'http://localhost:3333',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // /api/products/1 -> /products/1
      },
      // 2. ПРОКСИ ДЛЯ ИЗОБРАЖЕНИЙ: Использует прямой путь без /api (для /product_img1.jpeg)
      '/api': {
        target: 'http://localhost:3333',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // /api/product_img1.jpeg -> /product_img1.jpeg
      },
    },
  },
})
