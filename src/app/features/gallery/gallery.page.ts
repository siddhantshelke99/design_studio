import { Component } from '@angular/core';
import { galleryMedia } from '../../shared/data/content.data';

@Component({
  selector: 'app-gallery-page',
  imports: [],
  templateUrl: './gallery.page.html',
  styleUrl: './gallery.page.scss'
})
export default class GalleryPage {
  readonly media = galleryMedia;
}
