import { Component, DestroyRef, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SwUpdate, VersionEvent,VersionDetectedEvent , VersionInstallationFailedEvent , VersionReadyEvent , NoNewVersionDetectedEvent } from "@angular/service-worker";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from "rxjs";

import {MainLayoutComponent, MainLayoutService } from '@projects/main-layout'
@Component({
  selector: "main-root",
  standalone: true,
  imports: [MainLayoutComponent,RouterOutlet],
  styles: [
    `
    :host {
        display: flex;
        flex-direction: column;
      }
    `
  ],
  template: ` 
  <div
  [attr.data-theme]="selectedTheme()"
  class="min-h-screen bg-base-100 flex justify-between flex-col"
>
  <projects-main-layout></projects-main-layout>
  <router-outlet></router-outlet> 
</div>
 
  
  `,
})
export class AppComponent {

  themeService = inject(MainLayoutService);
  selectedTheme = this.themeService.selectedTheme;

  swUpdate = inject(SwUpdate);
  destroy$ = inject(DestroyRef);

  updateNewVersion(){
     if(confirm("New version is available. Load new Version?")){
      window.location.reload();
     }
  }

  ngOnInit(){
    if(this.swUpdate.isEnabled){
      this.swUpdate.versionUpdates.pipe(
        tap( (event : VersionEvent)  => {
          //VersionDetectedEvent | VersionInstallationFailedEvent | VersionReadyEvent | NoNewVersionDetectedEvent;
          switch(event.type){
            case 'VERSION_DETECTED': this.updateNewVersion(); break;
            case 'VERSION_READY' : break;
            case 'VERSION_INSTALLATION_FAILED': break;
            case "NO_NEW_VERSION_DETECTED": break;
            default:
              break;
          }
        }),
        takeUntilDestroyed(this.destroy$)
      )
    }
  }
}
