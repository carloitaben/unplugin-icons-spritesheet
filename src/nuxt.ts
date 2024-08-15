import { addVitePlugin, addWebpackPlugin, defineNuxtModule } from "@nuxt/kit";
import vite from "./vite";
import webpack from "./webpack";
import type { Options } from "./types";
import "@nuxt/schema";

export interface ModuleOptions extends Options {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-unplugin-starter",
    configKey: "unpluginStarter",
  },
  setup(maybeConfigs) {
    addVitePlugin(() => vite(maybeConfigs));
    addWebpackPlugin(() => webpack(maybeConfigs));
  },
});
