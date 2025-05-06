import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel"; // Remove "/serverless"
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/vercel/image-service",
    }),
  ],
  // Remove or update the site URL if deploying to Vercel
  // site: "https://xhand98.github.io/porfolio",
});
