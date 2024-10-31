import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/LinkedInFormatter/",
  build: {
    outDir: './build',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/styles/breakpoints.scss";`,
      },
    },
    modules: {
      scopeBehaviour: "local",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
});
