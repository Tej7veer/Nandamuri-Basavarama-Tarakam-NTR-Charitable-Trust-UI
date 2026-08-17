import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {

  submitting = false;

  donationForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.maxLength(120)]],

    mobileNo: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    dob: [''],

    panCardNo: [
      '',
      [
        Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)
      ]
    ],

    state: [
      '',
      [
        Validators.required,
        Validators.maxLength(100)
      ]
    ],

    city: [
      '',
      [
        Validators.required,
        Validators.maxLength(100)
      ]
    ],

    pinCode: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[1-9][0-9]{5}$/)
      ]
    ],

    address: [
      '',
      [
        Validators.required,
        Validators.maxLength(1000)
      ]
    ],

    amount: [
      null,
      [
        Validators.required,
        Validators.min(1),
        Validators.max(10000000)
      ]
    ]
  });

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) {}

  submit(): void {

    if (this.donationForm.invalid) {
      this.donationForm.markAllAsTouched();
      return;
    }

    this.submitting = true;

    const payload = this.donationForm.getRawValue();

    this.api.submitDonation(payload).subscribe({
      next: () => {
        this.submitting = false;

        this.donationForm.reset();

        // Show success message
      },

      error: (error) => {
        this.submitting = false;

        console.error('Donation submission failed', error);

        // Show error message
      }
    });
  }
}
