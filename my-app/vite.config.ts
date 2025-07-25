// vite.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({ // This function helps with type safety and better IDE support when writing the configuration. It ensures your config is correctly structured for Vitest.
  plugins: [react()], // Enables React support in Vite
  test: {
    globals: true,// Allows using global functions like `describe`, `it`,'test','expect'  etc.
    environment: 'jsdom',// Used to simulate a browser environment for testing
    setupFiles: './src/setupTests.ts',
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}']
  },
});
