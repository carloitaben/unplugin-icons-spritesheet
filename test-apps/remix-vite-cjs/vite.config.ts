import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import iconsSpritesheet from "vite-plugin-icons-spritesheet/vite";

installGlobals();

export default defineConfig({
  plugins: [
    remix(),
    tsconfigPaths(),
    iconsSpritesheet({
      withTypes: true,
      inputDir: "icons",
      outputDir: "public/icons",
    }),
  ],
});
