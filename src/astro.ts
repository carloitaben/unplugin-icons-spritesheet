import type { Options } from "./types";
import unplugin from ".";

export default (maybeConfigs: Options | Options[]) => ({
  name: "unplugin-starter",
  hooks: {
    "astro:config:setup": async (astro: any) => {
      astro.config.vite.plugins ||= [];
      astro.config.vite.plugins.push(unplugin.vite(maybeConfigs));
    },
  },
});
