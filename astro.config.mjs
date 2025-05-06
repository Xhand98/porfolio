import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: { skewProtection: true },
  integrations: [tailwind()],
  site: "https://xhand98.github.io/porfolio",
});
