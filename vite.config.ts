import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/cv/',
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      // Two separate pages: the portfolio and the printable resume
      input: {
        main: path.resolve(import.meta.dirname, 'index.html'),
        resume: path.resolve(import.meta.dirname, 'resume.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
