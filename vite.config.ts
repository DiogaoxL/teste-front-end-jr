import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/lista_produto': {
        target: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/lista_produto/, ''),
      }
    }
  }
})
