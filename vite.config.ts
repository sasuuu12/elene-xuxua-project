import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Better chunk splitting for caching
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/react-router')) {
            return 'router';
          }
          if (id.includes('node_modules/@reduxjs') || id.includes('node_modules/react-redux')) {
            return 'redux';
          }
        }
      }
    },
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
})
