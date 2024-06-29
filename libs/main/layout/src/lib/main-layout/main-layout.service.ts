import { Injectable, effect, inject, signal } from '@angular/core';

export const DATA_KEY = 'analog-blog-theme';
export const THEMES = ['light', 'dark', 'cupcake','forest'];
@Injectable({
  providedIn: 'root',
})
export class MainLayoutService {
  selectedTheme = signal('dark');
}