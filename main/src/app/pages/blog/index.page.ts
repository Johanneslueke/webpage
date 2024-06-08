import { Component, computed, effect, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContentFile, injectContentFiles } from '@analogjs/content';
import { NgFor, NgIf } from '@angular/common';
import { BlogtileComponent, PostAttributes } from '@projects/main-layout';


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
        <div class="flex justify-end">
          <label class="input input-bordered flex items-center gap-2">
            <input type="text" class="grow" placeholder="Search" #filter (input)="onfilter( filter.value )" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
          </label>
        </div>
        <div
          class="mt-10 border-t border-gray-200 flex gap-4 pt-10 flex-wrap gap-y-8"
        >
        
        <ng-container  *ngFor="let post of filtered()" >
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

  filter = signal('');
  filtered = computed(() => {
    const filter = this.filter().split(' ');
    const res = this.posts.filter( x => {
      const condition = RegExp(`${filter.join('|')}`).exec(x.attributes.title || '') !== null;
      console.log("RegExp: ",RegExp(`${filter.join('|')}`).exec(x.attributes.title || ''))
      console.log("Condition: ", condition);
      return condition;
    })
    
    console.log("Result: ", res)
    return res;
  }) 

  onfilter(filter:string){
    console.log(filter)
    this.filter.set(filter);
  }

}
