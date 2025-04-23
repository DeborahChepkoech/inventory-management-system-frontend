import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'crypto': 'crypto-browserify', // Ensure the alias for crypto is correct
    },
  },
  define: {
    global: {}, // Ensures compatibility for global objects
    'process.env': {}, // Handles any issues related to process in the dev environment
  },
  
});