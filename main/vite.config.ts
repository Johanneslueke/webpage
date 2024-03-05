/// <reference types="vitest" />

import analog from "@analogjs/platform";
import { defineConfig, Plugin, splitVendorChunkPlugin } from "vite";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { PrerenderRoute } from 'nitropack';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    publicDir: "src/public",
    base: "/", 
    build: {
      outDir: "../dist/./main/client",
      reportCompressedSize: true,
      commonjsOptions: { transformMixedEsModules: true },
      target: ["es2020"],
      copyPublicDir: true,
      
    },
    server: {
      port: 4200,
      host: 'localhost',
      open: true
    },
    plugins: [analog({
       ssr: false, 
      
       nitro: {
        preset: 'vercel',
        logLevel: 5
       }, 
       prerender: {

        postRenderingHooks: [
          async (route: PrerenderRoute) => console.log(route),
        ],
        routes: [
         // '/', 
        ],
        sitemap: {
          host: "localhost"
        }
       }
       }), nxViteTsPaths(), splitVendorChunkPlugin()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["src/test-setup.ts"],
      include: ["**/*.spec.ts"],
      reporters: ["default"],
      cache: {
        dir: `../node_modules/.vitest`,
      },
    },
    define: {
      "import.meta.vitest": mode !== "production",
    },
  };
});
