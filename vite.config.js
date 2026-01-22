import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/knightctf26/', // ⚠️ repo name
  plugins: [react()],
})
