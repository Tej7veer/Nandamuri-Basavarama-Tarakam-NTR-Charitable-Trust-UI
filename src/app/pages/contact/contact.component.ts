import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private api = inject(ApiService);

  submitting = false;
  submitted = false;
  failed = false;

  form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', Validators.required]
  });

  submit(): void {
    if (this.form.invalid) return;
    this.submitting = true;
    this.failed = false;

    this.api.submitContactMessage(this.form.value as any).subscribe({
      next: () => { this.submitting = false; this.submitted = true; this.form.reset(); },
      error: () => { this.submitting = false; this.failed = true; }
    });
  }
}
