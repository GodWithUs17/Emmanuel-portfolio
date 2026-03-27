import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // This helps Vercel build the files into proper .js for the browser
  build: {
    outDir: 'dist',
  }
})
