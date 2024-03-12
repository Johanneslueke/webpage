import { Component, DestroyRef, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SwUpdate, VersionEvent,VersionDetectedEvent , VersionInstallationFailedEvent , VersionReadyEvent , NoNewVersionDetectedEvent } from "@angular/service-worker";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from "rxjs";

@Component({
  selector: "main-root",
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {

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
