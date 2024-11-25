import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import tsconfigPaths from 'vite-plugin-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@routes': resolve(__dirname, 'src/routes'),
            '@layout': resolve(__dirname, 'src/layout'),
        },
    },
    plugins: [react(), tsconfigPaths()],
});
