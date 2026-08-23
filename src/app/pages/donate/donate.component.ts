import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { DonationInquiryPayload } from '../../core/models';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);

  submitting = false;
  submitted = false;
  failed = false;

  donationForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.maxLength(120)]],
    mobileNo: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    email: ['', [Validators.required, Validators.email]],
    dob: [''],
    panCardNo: ['', [Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)]],
    state: ['', [Validators.required, Validators.maxLength(100)]],
    city: ['', [Validators.required, Validators.maxLength(100)]],
    pinCode: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)]],
    address: ['', [Validators.required, Validators.maxLength(1000)]],
    amount: [null as number | null, [Validators.required, Validators.min(1), Validators.max(10000000)]]
  });

  submit(): void {
    this.submitted = false;
    this.failed = false;

    if (this.donationForm.invalid) {
      this.donationForm.markAllAsTouched();
      return;
    }

    this.submitting = true;

    const raw = this.donationForm.getRawValue();
    const payload: DonationInquiryPayload = {
      fullName: raw.fullName ?? '',
      mobileNo: raw.mobileNo ?? '',
      email: raw.email ?? '',
      dob: raw.dob || null,
      panCardNo: raw.panCardNo || null,
      state: raw.state ?? '',
      city: raw.city ?? '',
      pinCode: raw.pinCode ?? '',
      address: raw.address ?? '',
      amount: Number(raw.amount)
    };

    this.api.submitDonationInquiry(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.submitted = true;
        this.donationForm.reset();
      },
      error: (error: unknown) => {
        this.submitting = false;
        this.failed = true;
        console.error('Donation submission failed', error);
      }
    });
  }
}
