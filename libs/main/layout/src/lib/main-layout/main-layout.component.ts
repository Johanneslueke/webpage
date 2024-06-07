import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MainLayoutService, THEMES } from './main-layout.service';
@Component({
  selector: 'projects-main-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  links = [
    { path: '/about', label: 'About' },
    //{ path: '/contact', label: 'Contact' },
    {
      path: '/blog',
      label: 'Blog',
    },
  ];

  themeService = inject(MainLayoutService);
  selectedTheme = this.themeService.selectedTheme;
  themes = THEMES;

  onThemeChange(event: any) {
    this.themeService.selectedTheme.set(event?.target.value);
  }
}
