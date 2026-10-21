// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://hxruya.github.io",
  // Old URLs from before Biography and Interests were merged into About.
  redirects: {
    "/biography": "/about/",
    "/interests": "/about/#interests",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
