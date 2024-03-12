import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideClientHydration } from "@angular/platform-browser";
import { provideFileRouter } from "@analogjs/router";
import { provideContent, withMarkdownRenderer } from "@analogjs/content";
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideContent(withMarkdownRenderer({
        loadMermaid: () => import('mermaid')
    })),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    }),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
],
};
