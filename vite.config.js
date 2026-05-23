import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to GitHub Pages under a sub-path (e.g. https://user.github.io/repo/),
  // uncomment and set the repo name:
  // base: '/diego-portfolio/',
});
