import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  base: "./",
    plugins: [
        vue(),
    ],
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
    },
    server: {
        host: "0.0.0.0",
        port: 5173,
        open: true,
        // 代理
        proxy: {
            "/api": {
                target: "http://10.1.20.104:3000/",
                // target: "http://localhost:3000/",
                changeOrigin: true,
                rewrite: function (path) { return path.replace(/^\/api/, ""); },
            },
        },
    },
})
