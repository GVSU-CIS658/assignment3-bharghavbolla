import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/assignment3-bharghavbolla/',
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // <- use modern Dart Sass API
      },
    },
  },
});
