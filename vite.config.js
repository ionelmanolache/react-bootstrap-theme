import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url';
import fs from 'node:fs';
import https from 'node:https';

const _dirname = fileURLToPath(new URL('.', import.meta.url));

console.log('_dirname', _dirname);


export default ({ mode }) => {
  const isProd = mode === 'production';
  console.log(`[isProd=${isProd}]`, `[mode=${mode}]`);

  const ssl = isProd ? {} : {
    // key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
  }

  const devServer = isProd ? {} : {
    host: '127.0.0.1',
    cors: true,
    https: ssl,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        cookiePathRewrite: {
          '*': '/'
        },
        cookieDomainRewrite: 'localhost',
      },
      '/appStreamWebSocket': {
        target: 'wss://localhost:3001',
        changeOrigin: true,
        ws: true,
        secure: false,
        agent: new https.Agent({ keepAlive: true })
      }
    }
  }
  const _env = loadEnv(mode, process.cwd());
  console.log('_env', _env);

  const basePath = isProd ? '/__VITE_BASEPATH__/' : './';
  console.log(`basePath=${basePath}`);

  const htmlPlugin = () => {
    /*
    e.g. it will replace '/__VITE_BASEPATH__/' with './'
    */
    return {
      name: 'html-transform',
      transformIndexHtml(html) {
        console.log('***', html);
        return html.replace(/\/(.*?)__/g, function (match, p1) {
            return _env[p1] ?? './';
          });
      },
    };
  }
  // https://vitejs.dev/config/
  return defineConfig({

    resolve: {
      // preserveSymlinks:!isProd,
      alias: {
        '~bootstrap': resolve(_dirname, 'node_modules/bootstrap')
      }
    },
    plugins: [
      //---------------------------------------------------------------------
      react(),
      //---------------------------------------------------------------------
      !isProd && 
      (() => ({
        name: 'dev-server',
        config: () => ({
          server: devServer,
        }),
      }))(),
      //---------------------------------------------------------------------
      htmlPlugin(),
      //---------------------------------------------------------------------
    ]
    ,
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
}