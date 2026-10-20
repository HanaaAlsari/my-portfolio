import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  base: './', // <-- هذه النقطة المائلة تجبر السيرفر على قراءة مسارات الملفات بشكل سليم ومنع الصفحة البيضاء
})
