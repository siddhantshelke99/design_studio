import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isIntroVisible = signal(true);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.isIntroVisible.set(false);
      return;
    }

    setTimeout(() => this.isIntroVisible.set(false), 900);
  }
}
