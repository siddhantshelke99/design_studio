import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { courseBenefits, courseModelGallery, coursePrograms, upcomingBatches } from '../../shared/data/content.data';

@Component({
  selector: 'app-courses-page',
  imports: [ReactiveFormsModule],
  templateUrl: './courses.page.html',
  styleUrl: './courses.page.scss'
})
export default class CoursesPage {
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

    const payload = {
      ...this.inquiryForm.value,
      source: 'HSMDA Courses'
    };

    this.http.post('https://hsm-pjpt.onrender.com/api/contact', payload).subscribe({
      next: () => {
        this.inquiryStatus.set('Inquiry submitted. Our team will contact you shortly.');
        this.inquiryForm.reset({
          courseInterest: 'Fundamentals of Transportation Design'
        });
        this.inquiryLoading.set(false);
      },
      error: () => {
        this.inquiryStatus.set('Unable to submit right now. Please email infomail@hsmdesigns.in.');
        this.inquiryLoading.set(false);
      }
    });
  }
}
