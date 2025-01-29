// import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// // import vueJsx from '@vitejs/plugin-vue-jsx'
// // import vueDevTools from 'vite-plugin-vue-devtools'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//     },
//   },
//   base: process.env.VITE_ENV === 'production' ? '/test-task/' : '/',
// })

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'



// https://vite.dev/config/
export default defineConfig({
  base: 'https://mariiapmm.github.io/test-task/',
  plugins: [vue()],
  build: {
    outDir: 'dist', // Вказуємо, щоб Vite будував проект у папку docs
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // base: env === 'production' ? '/test-task/' : '/', // Налаштування шляху залежно від середовища
})
