import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/duna-imoveis/', // Tem que ter a barra antes e depois
})