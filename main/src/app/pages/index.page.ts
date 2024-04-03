import { Component } from "@angular/core";

import { AnalogWelcomeComponent } from "./analog-welcome.component";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { RouterOutlet, RouterLink } from "@angular/router";
import { MarkdownComponent, MarkdownRouteComponent, injectContent, injectContentFiles } from "@analogjs/content";

export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}


@Component({
  //selector: "main-home",
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor,NgIf,MarkdownComponent,MarkdownRouteComponent, AsyncPipe], 
  template: `
    <router-outlet></router-outlet>
  `,
})
export default class IndexComponent {
 
}
