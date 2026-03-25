import { Component } from '@angular/core';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-page',
  imports: [ContactFormComponent],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss'
})
export default class ContactPage {}
