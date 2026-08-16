import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {

  private fb = inject(FormBuilder);
  private api = inject(ApiService);

  submitting = false;
  submitted = false;
  failed = false;

  form = this.fb.group({

    fullName: [
      '',
      [
        Validators.required,
        Validators.maxLength(120)
      ]
    ],

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

    dob: [
      null
    ],

    panCardNo: [
      '',
      [
        Validators.pattern(
          /^[A-Z]{5}[0-9]{4}[A-Z]$/
        )
      ]
    ],

    state: [
      '',
      Validators.required
    ],

    city: [
      '',
      Validators.required
    ],

    pinCode: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\d{6}$/)
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
        Validators.min(1)
      ]
    ]

  });

  submit(): void {

    this.submitted = false;
    this.failed = false;

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;
    }

    this.submitting = true;

    const value = this.form.getRawValue();

    const payload = {
      fullName: value.fullName!,
      mobileNo: value.mobileNo!,
      email: value.email!,
      dob: value.dob || null,
      panCardNo: value.panCardNo || null,
      state: value.state!,
      city: value.city!,
      pinCode: value.pinCode!,
      address: value.address!,
      amount: Number(value.amount)
    };

    this.api
      .submitDonationInquiry(payload)
      .subscribe({

        next: () => {

          this.submitting = false;

          this.submitted = true;

          this.form.reset();

        },

        error: (error) => {

          console.error(
            'Donation submission failed',
            error
          );

          this.submitting = false;

          this.failed = true;

        }

      });
  }
}