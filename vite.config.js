import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), svgr(),],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@audios': resolve(__dirname, 'src/assets/audios'),
      '@images': resolve(__dirname, 'src/assets/images'),
      '@icos': resolve(__dirname, 'src/assets/icos'),
      '@styles': resolve(__dirname, 'src/assets/styles'),
      '@components': resolve(__dirname, 'src/components/components'),
      '@constants': resolve(__dirname, 'src/assets/constants'),
    },
  },
})