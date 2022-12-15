import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // antd 按需引入
    createStyleImportPlugin({
      resolves: [AntdResolve()]
    })
  ],
  resolve: {
    // 配置别名
    // alias: {
    //   '@': path.resolve(__dirname, 'src')
    // }
  },
  server: {
    // 配置proxy代理
    proxy: {
      '/api': {
        target: '',
        ws: false,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
