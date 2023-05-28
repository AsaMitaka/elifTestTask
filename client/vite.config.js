import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'css',
      modules: true, // Enable CSS modules
    },
  ],
  base: '/elifTestTask/',
});
