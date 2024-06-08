import { ChangeDetectionStrategy, Component, effect, input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ContentFile } from '@analogjs/content';

export interface PostAttributes {
  title: string;
  slug: string;
  author?: string;
  authorInfo?: string;
  description: string;
  coverImage: string;
  coverAsBackground: boolean;
  lang: 'de'|'en' | '?'
  date?: Date;
  attributes?: Record<string,unknown>
}

@Component({
  selector: 'projects-blogtile',
  standalone: true,
  imports: [CommonModule,RouterLink,DatePipe],
  templateUrl: './blogtile.component.html',
  styleUrl: './blogtile.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogtileComponent {
  post  = input.required<ContentFile<PostAttributes>>();

  constructor(){
    effect(() => {
      console.log(this.post());
    })
  }
}
