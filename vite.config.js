import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    base: '/',
    build: {
        // react-snap runs on an old Chromium runtime, so transpile optional chaining/nullish syntax.
        target: 'es2018',
    },
})
