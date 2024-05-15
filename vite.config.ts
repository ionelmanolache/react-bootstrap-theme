import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

import url from 'url';

const _dirname=url.fileURLToPath(new URL('.', import.meta.url));
// const _repodirname=url.fileURLToPath(new URL('../..', import.meta.url))
console.log('_dirname', _dirname);
// console.log('_repodirname', _repodirname)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~bootstrap': resolve(_dirname, 'node_modules/bootstrap')
    }
  },
  plugins: [react()],
})
