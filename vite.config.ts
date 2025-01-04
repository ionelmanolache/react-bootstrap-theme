import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'url';

const _dirname = fileURLToPath(new URL('.', import.meta.url));

console.log('_dirname', _dirname);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~bootstrap': resolve(_dirname, 'node_modules/bootstrap')
    }
  },
  plugins: [react()],
  // Github Pages
  base: '/react-bootstrap-theme/',

  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
      },
    },
  },
})