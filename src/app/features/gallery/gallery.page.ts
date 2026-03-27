import { Component } from '@angular/core';
import { galleryMedia } from '../../shared/data/content.data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll/reveal-on-scroll.directive';

@Component({
  selector: 'app-gallery-page',
  imports: [RevealOnScrollDirective],
  templateUrl: './gallery.page.html',
  styleUrl: './gallery.page.scss'
})
export default class GalleryPage {
  readonly media = galleryMedia;
}
