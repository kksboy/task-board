import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages(https://kksboy.github.io/task-board/)でホストするため、
  // リポジトリ名をベースパスとして設定する
  base: '/task-board/',
})
