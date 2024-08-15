import spritesheet from "unplugin-icons-spritesheet/webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(
      spritesheet({
        withTypes: true,
        inputDir: "./src/icons",
        outputDir: "./public/icons",
        typesOutputFile: "./src/icons/types.ts"
      })
    );

    return config;
  }
};

export default nextConfig;
