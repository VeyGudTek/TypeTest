import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: "/TypeTest/",
  resolve:{
    alias:{
      "@Components": path.resolve(__dirname, './src/Components'),
      "@CSS": path.resolve(__dirname, './src/CSS'),
      "@Models": path.resolve(__dirname, './src/Models'),
      "@Functions": path.resolve(__dirname, './src/Functions')
    }
  },
  plugins: [react()],
})
