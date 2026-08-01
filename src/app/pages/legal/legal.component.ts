import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface LegalPage { title: string; body: string[]; }

const LEGAL_PAGES: Record<string, LegalPage> = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      "Nandamuri Basavarama Tarakam NTR Charitable Trust collects only the information you choose to share through our Contact, Volunteer, and Donate forms — your name, email, phone number, and any message you send us.",
      "We use this information solely to respond to your inquiry, process volunteer applications, or follow up on donation interest. We do not sell or share your information with third parties.",
      "This is placeholder text for a newly registered trust. Replace it with a policy reviewed by legal counsel before accepting real donations or personal data at scale."
    ]
  },
  terms: {
    title: 'Terms of Use',
    body: [
      "By using this website, you agree to use it only for lawful purposes related to learning about or supporting Nandamuri Basavarama Tarakam NTR Charitable Trust.",
      "Content on this site — including our name, description, and programs — belongs to Nandamuri Basavarama Tarakam NTR Charitable Trust and should not be reproduced without permission.",
      "This is placeholder text for a newly registered trust. Replace it with terms reviewed by legal counsel."
    ]
  },
  refund: {
    title: 'Refund Policy',
    body: [
      "Donations made to Nandamuri Basavarama Tarakam NTR Charitable Trust are generally non-refundable, as funds are allocated to our programs as they are received.",
      "If you believe a donation was made in error, please contact us within 7 days and we will review your request.",
      "This is placeholder text for a newly registered trust. Replace it with a policy reviewed by legal counsel before accepting real donations."
    ]
  }
};

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.css'
})
export class LegalComponent {
  private route = inject(ActivatedRoute);
  page: LegalPage = LEGAL_PAGES[this.route.snapshot.data['page']] ?? LEGAL_PAGES['privacy'];
}
