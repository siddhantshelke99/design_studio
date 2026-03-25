import { Component } from '@angular/core';
import { services } from '../../shared/data/content.data';

@Component({
  selector: 'app-services-page',
  imports: [],
  templateUrl: './services.page.html',
  styleUrl: './services.page.scss'
})
export default class ServicesPage {
  readonly services = services;
}
