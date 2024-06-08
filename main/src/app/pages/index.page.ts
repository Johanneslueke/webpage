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
  selector: 'main-home',
  standalone: true,
  template: `
    <div class="hero">
      <div class="hero-content text-center">
        <div class="max-w-md flex flex-col items-center">
          <figure>
            <img src="/analog.svg" alt="AnalogJs logo" />
            <figcaption>Hier findest du Information über meine Person</figcaption>
          </figure>
          <p class="py-6">
          Herzlich Willkommen auf meiner Webseite
          </p>
          <button class="btn items-center bg-base-300">
            <a routerLink="/blog">Go to Blog Posts</a>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
      }
    `,
  ],
  imports: [RouterLink],
})
export default class IndexComponent {
 
}
