import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: ["express"], // Avoid bundling Express
  },
});