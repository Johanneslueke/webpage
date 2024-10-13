import { Component, DestroyRef, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SwUpdate, VersionEvent } from "@angular/service-worker";
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
  class="min-h-screen min-w-screen  flex justify-between  flex-col"
>
  <projects-main-layout></projects-main-layout>


  <router-outlet  ></router-outlet> 
  
  
  
    <footer class="footer p-10 bg-neutral text-neutral-content">
    <nav>
      <h6 class="footer-title">Services</h6> 
      <a class="link link-hover">Consulting</a> 
    </nav> 
    <nav>
      <h6 class="footer-title">Company</h6> 
      <a class="link link-hover">About me</a>
      <a class="link link-hover">Impressum</a> 
    </nav> 
    <nav>
      <h6 class="footer-title">Legal</h6> 
      <!-- <a class="link link-hover">Terms of use</a> -->
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </nav>
  </footer>
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
