import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'test-site', // Replace with your actual repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});