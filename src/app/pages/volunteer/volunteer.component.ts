import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
export class VolunteerComponent {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);

  submitting = false;
  submitted = false;
  failed = false;

  form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    areaOfInterest: [''],
    message: ['']
  });

  submit(): void {
    if (this.form.invalid) return;
    this.submitting = true;
    this.failed = false;

    this.api.submitVolunteerApplication(this.form.value as any).subscribe({
      next: () => { this.submitting = false; this.submitted = true; this.form.reset(); },
      error: () => { this.submitting = false; this.failed = true; }
    });
  }
}
