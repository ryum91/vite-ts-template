import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'build' ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1]}/` : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
}));
