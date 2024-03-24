import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://example.vitrix.cz/api/jakubizzaldin',
    },
  },
  plugins: [react()],
});
