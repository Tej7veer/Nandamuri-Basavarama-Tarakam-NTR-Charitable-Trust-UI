import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

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

  form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    amount: [null as number | null, [Validators.required, Validators.min(1)]],
    note: ['']
  });

  submit(): void {
    if (this.form.invalid) return;
    this.submitting = true;
    this.failed = false;

    this.api.submitDonationInquiry(this.form.value as any).subscribe({
      next: () => { this.submitting = false; this.submitted = true; this.form.reset(); },
      error: () => { this.submitting = false; this.failed = true; }
    });
  }
}
