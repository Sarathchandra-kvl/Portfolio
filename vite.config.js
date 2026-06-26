import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Force Vite to restart to pick up Tailwind Config
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})
