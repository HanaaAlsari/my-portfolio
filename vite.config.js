import { defineConfig } from 'vite'
import react from '@vitejs/config-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  base: './', // <-- أضيفي هذا السطر بدقة هنا لحل مشكلة الصفحة البيضاء
})
