import { ApplicationConfig, mergeApplicationConfig } from "@angular/core";
import { provideServerRendering, ɵSERVER_CONTEXT as SERVER_CONTEXT } from "@angular/platform-server";
import { appConfig } from "./app.config";
import { provideClientHydration } from "@angular/platform-browser";

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(),
    provideClientHydration()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
