import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'iconify-icon' || tag.startsWith('iconify-')
        }
      }
    }),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Separa cada biblioteca pesada em seu próprio arquivo isolado
            const matches = id.toString().split('node_modules/')[1].split('/')[0].toString()
            return `vendor-${matches}`
          }
        }
      }
    }
  }
})