import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import * as path from "node:path";


// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), react()],
    base: '/visit_card/',
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        port: 3000,
        strictPort: true
    }

})




