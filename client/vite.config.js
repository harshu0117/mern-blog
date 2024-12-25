import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Corrected localhost URL
        // changeOrigin: true,  // Needed for CORS support
        secure: false,
      },
    },
  },
  plugins: [react()],
});
