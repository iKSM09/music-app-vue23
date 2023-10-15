import path from "node:path"
// import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3002,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
