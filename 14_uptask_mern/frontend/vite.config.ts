import { defineConfig } from "vite"
import { fileURLToPath, URL } from "node:url"
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "@tailwindcss/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
