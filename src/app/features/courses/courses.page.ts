import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { courseBenefits, courseModelGallery, coursePrograms, upcomingBatches } from '../../shared/data/content.data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll/reveal-on-scroll.directive';

@Component({
  selector: 'app-courses-page',
  imports: [ReactiveFormsModule, RevealOnScrollDirective],
  templateUrl: './courses.page.html',
  styleUrl: './courses.page.scss'
})
export default class CoursesPage {
  private readonly WEB3FORMS_ACCESS_KEY = '8d114832-1f5c-47bc-9fa0-e2cc8b7b7991';
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  readonly programs = coursePrograms;
  readonly benefits = courseBenefits;
  readonly gallery = courseModelGallery;
  readonly batches = upcomingBatches;
  readonly inquiryLoading = signal(false);
  readonly inquiryStatus = signal('');

  readonly inquiryForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    courseInterest: ['Fundamentals of Transportation Design', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(15)]]
  });

  submitInquiry(): void {
    if (this.inquiryForm.invalid || this.inquiryLoading()) {
      this.inquiryForm.markAllAsTouched();
      return;
    }

    this.inquiryLoading.set(true);
    this.inquiryStatus.set('Submitting your inquiry...');

    const value = this.inquiryForm.getRawValue();
    const payload = {
      access_key: this.WEB3FORMS_ACCESS_KEY,
      subject: 'New Course Inquiry - HSMDA Website',
      from_name: 'HSMDA Course Inquiry Form',
      name: value.fullName ?? '',
      email: value.email ?? '',
      phone: value.phone ?? '',
      course_interest: value.courseInterest ?? '',
      message: value.message ?? ''
    };

    this.http.post<{ success: boolean; message?: string }>('https://api.web3forms.com/submit', payload).subscribe({
      next: (res) => {
        if (res?.success) {
          this.inquiryStatus.set('Inquiry submitted. Our team will contact you shortly.');
          this.inquiryForm.reset({
            courseInterest: 'Fundamentals of Transportation Design'
          });
        } else {
          this.inquiryStatus.set('Unable to submit right now. Please email infomail@hsmdesigns.in.');
        }
        this.inquiryLoading.set(false);
      },
      error: () => {
        this.inquiryStatus.set('Unable to submit right now. Please email infomail@hsmdesigns.in.');
        this.inquiryLoading.set(false);
      }
    });
  }
}
