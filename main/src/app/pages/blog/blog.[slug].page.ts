import { Component, inject } from "@angular/core";

import { AnalogWelcomeComponent } from "./analog-welcome.component";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { RouterOutlet, RouterLink, ActivatedRoute } from "@angular/router";
import { MarkdownComponent, MarkdownRouteComponent, injectContent, injectContentFiles } from "@analogjs/content";

export interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}


@Component({
  selector: "main-blog-post",
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor,NgIf,MarkdownComponent,MarkdownRouteComponent, AsyncPipe], 
  template: ` 
    <ng-container *ngIf="post$ | async as post">
      <h1>{{ post.attributes.title }}</h1>
      <analog-markdown [content]="post.content"></analog-markdown>
    </ng-container>
  `,
})
export default class BlogPostComponent {
    private readonly route = inject(ActivatedRoute);
    readonly post$ = injectContent<PostAttributes>({
    subdirectory: 'blog',
    param: ""
    });
}
