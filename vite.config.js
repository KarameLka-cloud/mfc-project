import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://karamelka-cloud.github.io/mfc',
  plugins: [vue()],
})
