import { Component, inject } from "@angular/core";
 
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { RouterOutlet, RouterLink, ActivatedRoute } from "@angular/router";
import { MarkdownComponent, MarkdownRouteComponent, injectContent, injectContentFiles } from "@analogjs/content";
import { combineLatest, map, switchAll } from "rxjs";

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
      <article
        class="flex flex-col prose prose-slate  dark:prose-invert md:max-w-4xl py-16 w-full px-4"
      >
        <a routerLink="/blog" class="btn items-center mb-8 w-64 flex flex-row"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          <span>Back to Blog Posts</span></a
        >
        <analog-markdown
          class="markdown"
          [content]="post.content"
        ></analog-markdown>
        <a routerLink="/blog" class="btn items-center mb-8 w-64 flex flex-row"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          <span>Back to Blog Posts</span></a
        >
      </article>
    </ng-container>
  `,
  styles: [`
   :host {
        display: flex;
        justify-content: center;
      }
  `]
})
export default class BlogPostComponent { 
  readonly post$ = injectContent<PostAttributes>({
    param: 'slug',
    subdirectory: 'blog',
  });

}
