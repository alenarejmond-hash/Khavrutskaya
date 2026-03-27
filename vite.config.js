import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Если ссылка: username.github.io/repo/ -> пишем '/repo/'
  // Если купила свой домен: mysite.com -> пишем '/'
  base: '/', 
})