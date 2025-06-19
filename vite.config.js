import {defineConfig} from 'vite';
import {resolve} from 'path';

export default defineConfig({
    root: './',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    server: {
        open: true,
        port: 3000,
        watch: {
            usePolling: true,
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
});
