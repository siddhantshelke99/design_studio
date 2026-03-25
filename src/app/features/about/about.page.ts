import { Component } from '@angular/core';
import { aboutHighlights, academyInfo } from '../../shared/data/content.data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll/reveal-on-scroll.directive';

@Component({
  selector: 'app-about-page',
  imports: [RevealOnScrollDirective],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss'
})
export default class AboutPage {
  readonly highlights = aboutHighlights;
  readonly academy = academyInfo;
}
