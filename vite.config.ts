import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/'], // Include all files in `src`
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Entry point of your library
      formats: ['es'], // Output as ES modules
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Mark peer dependencies as external
      output: {
        preserveModules: true, // Keep module structure intact
        dir: 'dist', // Output directory
        entryFileNames: '[name].js', // Use clean file names
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
