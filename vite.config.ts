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
    // Optimize for production
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    // Optimize chunk sizes
    rollupOptions: {
      output: {
        // Granular chunking for better caching and lazy loading
        manualChunks: (id) => {
          // React core - critical, loaded immediately
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react';
          }
          // Scheduler (React dependency)
          if (id.includes('node_modules/scheduler/')) {
            return 'react';
          }
          // React Router - separate chunk
          if (id.includes('react-router')) {
            return 'router';
          }
          // Framer Motion - separate chunk for lazy loading
          if (id.includes('framer-motion')) {
            return 'motion';
          }
          // EmailJS - separate chunk
          if (id.includes('@emailjs')) {
            return 'emailjs';
          }
        },
      },
    },
    // Smaller chunks for better caching
    chunkSizeWarningLimit: 500,
    // CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
