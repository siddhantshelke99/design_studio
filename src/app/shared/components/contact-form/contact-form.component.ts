import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
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

    this.http.post('https://hsm-pjpt.onrender.com/api/contact', this.form.value).subscribe({
      next: () => {
        this.status.set('Message sent successfully.');
        this.form.reset();
        this.loading.set(false);
      },
      error: () => {
        this.status.set('Unable to send right now. Please email us directly.');
        this.loading.set(false);
      }
    });
  }
}
