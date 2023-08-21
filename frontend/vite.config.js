import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), eslint()],
  server: {
    host: true,
  },
});
