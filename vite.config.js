import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// GitHub Pages 项目站地址为 https://<user>.github.io/<repo>/
// 仓库名：reolink-
const REPO_NAME = 'reolink-'

export default defineConfig(({ command }) => ({
  // 生产构建时资源路径需带仓库前缀，否则 /assets/... 会 404
  base: command === 'serve' ? '/' : `/${REPO_NAME}/`,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
