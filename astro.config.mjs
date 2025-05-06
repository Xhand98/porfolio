import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "server",
  adapter: vercel({
    // Vercel adapter options
    edgeMiddleware: true,
    // Other Vercel-specific configurations if needed
  }),
  integrations: [tailwind()],
  site: "https://xhand98.github.io/porfolio",
});
