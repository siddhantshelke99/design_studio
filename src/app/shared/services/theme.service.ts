import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly browser = isPlatformBrowser(this.platformId);
  readonly isDark = signal(false);

  constructor() {
    if (!this.browser) {
      return;
    }

    const saved = localStorage.getItem('hsm-theme');
    if (saved === 'dark') {
      this.enableDark(true);
    }
  }

  toggleTheme(): void {
    this.enableDark(!this.isDark());
  }

  private enableDark(isDark: boolean): void {
    this.isDark.set(isDark);

    if (!this.browser) {
      return;
    }

    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('hsm-theme', isDark ? 'dark' : 'light');
  }
}
