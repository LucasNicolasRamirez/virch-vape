import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Esto es útil si estás sirviendo tu aplicación desde un subdirectorio
  server: {
    historyApiFallback: true, // Esto ayuda a manejar el enrutamiento del lado del cliente
  },
});