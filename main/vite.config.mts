/// <reference types="vitest" />

import  analog, { PrerenderContentFile } from "@analogjs/platform";
import { defineConfig, Plugin, splitVendorChunkPlugin, UserConfig } from "vite";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { PrerenderRoute } from 'nitropack';
import { augmentAppWithServiceWorker } from '@angular-devkit/build-angular/src/utils/service-worker';
import * as path from 'path';

function swBuildPlugin(): Plugin {
  let config: UserConfig;
  return {
    name: 'analog-sw',
    config(_config) {
      config = _config;
    },
    async closeBundle() {
      if (config.build?.ssr) {
        return;
      }
      console.log('Building service worker');
      await augmentAppWithServiceWorker('./main', process.cwd(), path.join(process.cwd(), 'dist/main/client'), '/');
    }
  }
}

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
      open: true,
      fs: {
        allow: ['.'],
      },
    },
    plugins: [
      analog({  
      //  ssr: false, 
      //  static: true,
       nitro: {
        logLevel: 5,
        preset: "vercel"
       }, 
       prerender: {

        postRenderingHooks: [
          async (route: PrerenderRoute) => console.log(route),
        ],
        routes: [
          '/', 
          {
            contentDir: 'src/content/blog',
            transform: (file: PrerenderContentFile) => {
              // do not include files marked as draft in frontmatter
              if (file.attributes["draft"]) {
                return false;
              }
              // use the slug from frontmatter if defined, otherwise use the files basename
              const slug = file.attributes["slug"] || file.name;
              return `/blog/${slug}`;
            }
          }
        ],
        sitemap: {
          host: "localhost"
        }
       }
       }),
        nxViteTsPaths(), 
        splitVendorChunkPlugin(),
        swBuildPlugin()
      ],
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
