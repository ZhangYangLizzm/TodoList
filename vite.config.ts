import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr";
import path from "path";
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server:{
    port:5174
  }
})
