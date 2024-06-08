import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import { NgFor, NgIf } from '@angular/common';
import { BlogtileComponent } from '@projects/main-layout';

export interface PostAttributes {
  title: string;
  slug: string;
  author?: string;
  authorInfo?: string;
  description: string;
  coverImage: string;
  attributes?: Record<string,unknown>
}

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor,NgIf,BlogtileComponent],
  template: `
    <div class="bg-base-100 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="font-bold md:text-5xl text-3xl tracking-tigh">
            From the blog
          </h2>
          <p class="mt-2 text-lg leading-8">
           Thougths and Ideas
          </p>
        </div>
        <div
          class="mt-10 border-t border-gray-200 flex gap-4 pt-10 flex-wrap gap-y-8"
        >
        <ng-container  *ngFor="let post of posts" >
          <projects-blogtile [post]="post"></projects-blogtile>
        </ng-container>
         
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
        flex-direction: column;
      }
    `,
  ],
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>((contentFile) =>
    contentFile.filename.includes('/src/content/blog')
  );
}