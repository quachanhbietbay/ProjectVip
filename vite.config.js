import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",   // thư mục build (mặc định là dist, nhưng ghi rõ cho chắc)
  },
  base: "./",         // quan trọng để deploy, tránh lỗi đường dẫn trắng
})
