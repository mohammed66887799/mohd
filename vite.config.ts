import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // It's safer to use process.cwd() to locate the env files during build
    const env = loadEnv(mode, process.cwd(), ''); 
    
    return {
      base: './', // <--- ADDED: This fixes the blank screen on deployment
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // Fallback to empty string to prevent "process is not defined" crashes if env var is missing during deployment build
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || '')
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
