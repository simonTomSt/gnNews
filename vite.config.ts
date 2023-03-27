import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [react(), EnvironmentPlugin(['API_URL', 'API_KEY', 'FLAGS_URL'])],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@scss', replacement: '/src/styles/' },
    ],
  },
});
