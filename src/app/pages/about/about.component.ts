import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { TeamMember, Certificate } from '../../core/models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  // TEMP: hardcoded from assets/team/ and known cert status, while the backend isn't
  // running. Swap photoUrl paths for your own files (same folder, any filename), and
  // edit name/role/status directly below. To switch back to the live API once the
  // backend is up, delete this block and uncomment the ngOnInit body below it.
  team: TeamMember[] = [
    { id: 1, name: 'Nandamuri Mohan Krishna', role: 'Chairman', photoUrl: 'assets/team/Mohan N.jpeg', displayOrder: 1 },
    { id: 2, name: 'Nandamuri Mohana Rupa', role: 'President', photoUrl: 'assets/team/Rupa N.jpeg', displayOrder: 2 },
    { id: 3, name: 'Nandamuri Seema', role: 'Secretary', photoUrl: 'assets/team/Seema N.jpeg', displayOrder: 3 },
    { id: 4, name: 'Tummala Prasanna Kumar', role: 'Treasurer', photoUrl: 'assets/team/Prasanna T.jpeg', displayOrder: 4 }
  ];

  certificates: Certificate[] = [
    { id: 1, name: 'Trust Registration', status: 'Pending upload', documentUrl: null, displayOrder: 1 },
    { id: 2, name: '80G Certificate', status: 'Applied for', documentUrl: null, displayOrder: 2 },
    { id: 3, name: '12A Certificate', status: 'Applied for', documentUrl: null, displayOrder: 3 },
    { id: 4, name: 'PAN Card', status: 'Pending upload', documentUrl: null, displayOrder: 4 }
  ];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // Live API version - uncomment once the backend is running, and delete the
    // hardcoded `team`/`certificates` arrays above.
    // this.api.getTeamMembers().subscribe({ next: (data) => (this.team = data) });
    // this.api.getCertificates().subscribe({ next: (data) => (this.certificates = data) });
  }
}
