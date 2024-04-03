import { Component } from "@angular/core";
 
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
  selector: "main-blog",
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor,NgIf,MarkdownComponent,MarkdownRouteComponent, AsyncPipe], 
  template: `
    <ul>
      <li *ngFor="let post of posts">
        <a [routerLink]="['/blog', post.slug]">{{
          post.attributes.title
        }}</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>((contentFile) =>
  contentFile.filename.includes('/src/content/blog/')
);
readonly post$ = injectContent<PostAttributes>({
  subdirectory: 'blog',
  param: "slug"
});
}
