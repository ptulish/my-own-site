import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/a
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    base: '/',
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // Выделяем всю админку Sanity в отдельный файл
                    if (id.includes('@sanity') || id.includes('sanity')) {
                        return 'sanity-vendor';
                    }
                    // Выделяем React и роутер
                    if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
                        return 'react-vendor';
                    }
                    // Если используешь framer-motion для анимаций (он тяжелый), тоже выносим
                    if (id.includes('framer-motion')) {
                        return 'framer-motion';
                    }
                    // Остальные библиотеки
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                }
            }
        }
    }
});
