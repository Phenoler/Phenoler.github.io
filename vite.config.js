import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  
  // 🔥 添加这行关键配置 - GitHub Pages必须的
  base: './',
  
  // 添加构建配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    // 如果你需要代理，取消注释下面部分
    /* proxy: {
      '/api': {
        target: 'https://zenquotes.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    } */
  },
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})