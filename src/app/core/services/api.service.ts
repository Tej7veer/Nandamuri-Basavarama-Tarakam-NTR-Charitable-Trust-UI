import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ProgramItem, ProjectEvent, GalleryImage, TeamMember, Certificate, Video, NewsPost,
  ContactMessagePayload, VolunteerApplicationPayload, DonationInquiryPayload
} from '../models';
import { environment } from '../../../environments/environment';

// Single source of truth for the API's base URL. Dev value lives in
// src/environments/environment.ts, prod value in environment.prod.ts -
// `ng build` (production) swaps the file automatically via angular.json's
// fileReplacements, so nothing here needs to change between environments.
const API_BASE = environment.apiBase;

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getPrograms(): Observable<ProgramItem[]> {
    return this.http.get<ProgramItem[]>(`${API_BASE}/programs`);
  }

  getProjects(): Observable<ProjectEvent[]> {
    return this.http.get<ProjectEvent[]>(`${API_BASE}/projects`);
  }

  getGalleryImages(): Observable<GalleryImage[]> {
    return this.http.get<GalleryImage[]>(`${API_BASE}/gallery`);
  }

  getTeamMembers(): Observable<TeamMember[]> {
    return this.http.get<TeamMember[]>(`${API_BASE}/team`);
  }

  getCertificates(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(`${API_BASE}/certificates`);
  }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(`${API_BASE}/videos`);
  }

  getNewsPosts(): Observable<NewsPost[]> {
    return this.http.get<NewsPost[]>(`${API_BASE}/news`);
  }

  submitContactMessage(payload: ContactMessagePayload): Observable<unknown> {
    return this.http.post(`${API_BASE}/contact`, payload);
  }

  submitVolunteerApplication(payload: VolunteerApplicationPayload): Observable<unknown> {
    return this.http.post(`${API_BASE}/volunteer`, payload);
  }

  submitDonationInquiry(payload: DonationInquiryPayload): Observable<unknown> {
    return this.http.post(`${API_BASE}/donate`, payload);
  }
}
