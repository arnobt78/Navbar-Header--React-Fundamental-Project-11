/**
 * Vite config: build tool and dev server.
 * - @vitejs/plugin-react enables Fast Refresh and JSX for React.
 * - Dev server serves index.html for all routes (SPA); production build outputs to dist/.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
