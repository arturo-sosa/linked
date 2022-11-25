import {defineConfig} from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

const config = {
  integrations: [tailwind()]
};

if (import.meta.env.PROD && process.env.DEPLOY_URL)
  config.site = process.env.DEPLOY_URL;

// https://astro.build/config
export default defineConfig(config);