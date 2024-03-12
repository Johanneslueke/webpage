import { Component } from "@angular/core";

import { AnalogWelcomeComponent } from "./analog-welcome.component";
import { AsyncPipe, NgFor } from "@angular/common";
import { RouterOutlet, RouterLink } from "@angular/router";
import { MarkdownComponent, MarkdownRouteComponent, injectContent, injectContentFiles } from "@analogjs/content";

export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}


@Component({
  selector: "main-home",
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor,MarkdownComponent,MarkdownRouteComponent, AsyncPipe], 
  template: `
    <ul>
      <li *ngFor="let post of posts">
        <a [routerLink]="['/blog', 'posts', post.slug]">{{
          post.attributes.title
        }}</a>
      </li>
    </ul>
    <ng-container *ngIf="post$ | async as post">
      <h1>{{ post.attributes.title }}</h1>
      <analog-markdown [content]="post.content"></analog-markdown>
    </ng-container>
  `,
})
export default class HomeComponent {
  readonly posts = injectContentFiles<PostAttributes>((contentFile) =>
  contentFile.filename.includes('/src/content/blog/')
);
readonly post$ = injectContent<PostAttributes>();
}
