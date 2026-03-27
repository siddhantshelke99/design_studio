import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  private readonly WEB3FORMS_ACCESS_KEY = '8d114832-1f5c-47bc-9fa0-e2cc8b7b7991';
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  readonly loading = signal(false);
  readonly status = signal('');

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  submit(): void {
    if (this.form.invalid || this.loading()) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.status.set('Sending...');

    const value = this.form.getRawValue();
    const payload = {
      access_key: this.WEB3FORMS_ACCESS_KEY,
      subject: 'New Contact Form Submission - HSM Website',
      from_name: 'HSM Website Contact Form',
      name: value.name ?? '',
      email: value.email ?? '',
      message: value.message ?? ''
    };

    this.http.post<{ success: boolean; message?: string }>('https://api.web3forms.com/submit', payload).subscribe({
      next: (res) => {
        if (res?.success) {
          this.status.set('Message sent successfully.');
          this.form.reset();
        } else {
          this.status.set('Unable to send right now. Please email us directly.');
        }
        this.loading.set(false);
      },
      error: () => {
        this.status.set('Unable to send right now. Please email us directly.');
        this.loading.set(false);
      }
    });
  }
}
