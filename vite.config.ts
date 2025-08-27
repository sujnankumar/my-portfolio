import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Allow Vite to pre-bundle lucide-react so icons are included in deps chunks
  // and not fetched individually (e.g., fingerprint.js), which some blockers
  // may flag and block in dev.
  optimizeDeps: {
    include: ['lucide-react'],
  },
});
