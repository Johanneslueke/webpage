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
  imports: [ ], 
  template: `
   <div class="hero">
    <div class="hero-content text-center max-w-md flex flex-col items-center">
      <h1> Wer bin Ich? </h1>

      <p class="py-6">
      Mein name lautet Johanens Lüke. Ich komme gebürtig aus dem wunderschönen Ruhrgebiet und hab mich 
      aktuell in Franken niedergelassen.
      </p>
    </div>
   </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
      }
    `,]
})
export default class IndexComponent {
 
}
