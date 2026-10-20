import { defineConfig } from 'vite'

// تعطيل المكون الإضافي لـ React مؤقتاً لتشغيل خادم Vite محلياً بدون حزم إنترنت
export default defineConfig({
  // تركنا مصفوفة الإضافات فارغة ليتجاوز خادم Vite البحث عن الحزمة المفقودة
  plugins: [], 
})
