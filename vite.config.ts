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
            '@pages': resolve(__dirname, 'src/pages'),
            '@constants': resolve(__dirname, 'src/constants'),
            '@ui': resolve(__dirname, 'src/ui'),
            '@components': resolve(__dirname, 'src/components'),
            '@charts': resolve(__dirname, 'src/charts'),
            '@hooks': resolve(__dirname, 'src/hooks'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
    },
    plugins: [react(), tsconfigPaths()],
});
