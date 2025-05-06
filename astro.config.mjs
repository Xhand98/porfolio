// astro.config.mjs
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "server",
  adapter: vercel({
    // Add these configurations
    edgeMiddleware: true,
    webAnalytics: {
      enabled: false,
    },
  }),
  integrations: [tailwind()],
  // Remove image service or properly configure it
  vite: {
    ssr: {
      noExternal: ["@astrojs/vercel"],
    },
  },
});
