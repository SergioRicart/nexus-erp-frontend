import { defineConfig } from "astro/config";
import path from "node:path";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@layouts": path.resolve("./src/layouts"),
      },
    },
  },
});
