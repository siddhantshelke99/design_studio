import { Component } from '@angular/core';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact-page',
  imports: [ContactFormComponent, RevealOnScrollDirective],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss'
})
export default class ContactPage {}
