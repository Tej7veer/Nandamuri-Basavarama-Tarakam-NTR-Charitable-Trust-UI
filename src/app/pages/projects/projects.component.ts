import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { ProjectEvent } from '../../core/models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  events: ProjectEvent[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getProjects().subscribe({ next: (data) => (this.events = data) });
  }
}
