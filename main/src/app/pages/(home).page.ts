import { Component } from "@angular/core";

import { AnalogWelcomeComponent } from "./analog-welcome.component";
import { NgFor } from "@angular/common";
import { RouterOutlet, RouterLink } from "@angular/router";
import { injectContentFiles } from "@analogjs/content";

export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}


@Component({
  selector: "main-home",
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor], 
  template: `
    <ul>
      <li *ngFor="let post of posts">
        <a [routerLink]="['/blog', 'posts', post.slug]">{{
          post.attributes.title
        }}</a>
      </li>
    </ul>
  
  `,
})
export default class HomeComponent {
  readonly posts = injectContentFiles<PostAttributes>((contentFile) =>
  contentFile.filename.includes('/src/content/blog/')
);
}
