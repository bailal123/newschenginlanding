import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(), // Inject CSS via JS to avoid render-blocking
  ],
  build: {
    // Optimize chunk sizes
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core in separate chunk
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-core';
          }
          // React Router in separate chunk
          if (id.includes('react-router')) {
            return 'react-router';
          }
          // Framer Motion - loaded lazily with sections that use it
          if (id.includes('framer-motion')) {
            return 'framer-motion';
          }
        },
      },
    },
    // Smaller chunks for better caching
    chunkSizeWarningLimit: 500,
    // CSS code splitting
    cssCodeSplit: true,
  },
})
