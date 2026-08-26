import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'zener_theme_mode';
  readonly currentTheme = signal<Theme>(this.getInitialTheme());

  constructor() {
    // Apply theme on document when signal changes
    effect(() => {
      const theme = this.currentTheme();
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme);
        if (theme === 'light') {
          document.documentElement.classList.add('theme-light');
          document.body.classList.add('theme-light');
        } else {
          document.documentElement.classList.remove('theme-light');
          document.body.classList.remove('theme-light');
        }
        try {
          localStorage.setItem(this.THEME_KEY, theme);
        } catch (e) {}
      }
    });
  }

  private getInitialTheme(): Theme {
    if (typeof localStorage !== 'undefined') {
      try {
        const saved = localStorage.getItem(this.THEME_KEY) as Theme;
        if (saved === 'dark' || saved === 'light') {
          return saved;
        }
      } catch (e) {}
    }
    return 'dark'; // Default to luxury dark theme
  }

  toggleTheme(): void {
    this.currentTheme.set(this.currentTheme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
  }
}
