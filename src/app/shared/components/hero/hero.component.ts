import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Input, PLATFORM_ID, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

type HeroSlide = {
  title: string;
  subtitle: string;
  image: string;
  eyebrow?: string;
};

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() image = '';
  @Input() images: string[] = [];
  @Input() slides: HeroSlide[] = [];

  activeIndex = 0;
  scrollProgress = 0;
  heroLoaded = false;

  private readonly platformId = inject(PLATFORM_ID);

  constructor(private readonly hostElement: ElementRef<HTMLElement>) {}

  get resolvedSlides(): HeroSlide[] {
    if (this.slides.length > 0) {
      return this.slides;
    }

    if (this.images.length > 0) {
      return this.images.map((img, idx) => ({
        title: this.title || `Slide ${idx + 1}`,
        subtitle: this.subtitle || 'Designing future mobility experiences.',
        image: img,
        eyebrow: 'Highway Star Mobility'
      }));
    }

    if (this.image) {
      return [
        {
          title: this.title,
          subtitle: this.subtitle,
          image: this.image,
          eyebrow: 'Highway Star Mobility'
        }
      ];
    }

    return [];
  }

  get activeSlide(): HeroSlide | undefined {
    return this.resolvedSlides[this.activeIndex];
  }

  get activeSlideNumber(): number {
    return this.activeIndex + 1;
  }

  get totalSlides(): number {
    return this.resolvedSlides.length;
  }

  markHeroLoaded(): void {
    this.heroLoaded = true;
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.updateImageFromScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.updateImageFromScroll();
  }

  private updateImageFromScroll(): void {
    const slides = this.resolvedSlides;
    if (slides.length <= 1) {
      this.activeIndex = 0;
      this.scrollProgress = 1;
      return;
    }

    const scrollContainer = this.hostElement.nativeElement.querySelector<HTMLElement>('.hero-scroll');
    if (!scrollContainer) {
      return;
    }

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const start = scrollContainer.offsetTop;
    const end = start + scrollContainer.offsetHeight - viewportHeight;
    const distance = Math.max(1, end - start);
    const progress = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
    const nextIndex = Math.min(slides.length - 1, Math.floor(progress * slides.length));

    this.activeIndex = nextIndex;
    this.scrollProgress = progress;
  }
}
