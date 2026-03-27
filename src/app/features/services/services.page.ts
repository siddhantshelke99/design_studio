import { Component } from '@angular/core';
import { services } from '../../shared/data/content.data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll/reveal-on-scroll.directive';

@Component({
  selector: 'app-services-page',
  imports: [RevealOnScrollDirective],
  templateUrl: './services.page.html',
  styleUrl: './services.page.scss'
})
export default class ServicesPage {
  readonly services = services;
}
