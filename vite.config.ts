import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/personal-website/', // Replace with the correct base URL path
  plugins: [react()],
})