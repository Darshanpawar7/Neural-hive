import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [tailwind()],
  adapter: netlify(),
  site: "https://your-site-url.netlify.app"
});
