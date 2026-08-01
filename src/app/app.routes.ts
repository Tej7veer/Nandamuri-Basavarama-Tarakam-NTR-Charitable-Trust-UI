import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';
import { DonateComponent } from './pages/donate/donate.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsComponent } from './pages/news/news.component';
import { LegalComponent } from './pages/legal/legal.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home | Nandamuri Basavarama Tarakam NTR Charitable Trust' },
  { path: 'about', component: AboutComponent, title: 'About Us | Nandamuri Basavarama Tarakam NTR Charitable Trust' },
  { path: 'programs', component: ProgramsComponent, title: 'Programs | Nandamuri Basavarama Tarakam NTR Charitable Trust' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects & Events | Nandamuri Basavarama Tarakam NTR Charitable Trust' },
  { path: 'gallery', component: GalleryComponent, title: 'Gallery | Nandamuri Basavarama Tarakam NTR Charitable Trust' },
  { path: 'volunteer', component: VolunteerComponent, title: 'Volunteer | Nandamuri Basavarama Tarakam NTR Charitable Trust' },
  { path: 'donate', component: DonateComponent, title: 'Donate | Nandamuri Basavarama Tarakam NTR Charitable Trust' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us | Nandamuri Basavarama Tarakam NTR Charitable Trust' },
  { path: 'news', component: NewsComponent, title: 'News & Updates | Nandamuri Basavarama Tarakam NTR Charitable Trust' },
  { path: 'legal/privacy', component: LegalComponent, data: { page: 'privacy' }, title: 'Privacy Policy | Nandamuri Basavarama Tarakam NTR Charitable Trust' },
  { path: 'legal/terms', component: LegalComponent, data: { page: 'terms' }, title: 'Terms of Use | Nandamuri Basavarama Tarakam NTR Charitable Trust' },
  { path: 'legal/refund', component: LegalComponent, data: { page: 'refund' }, title: 'Refund Policy | Nandamuri Basavarama Tarakam NTR Charitable Trust' },
  { path: '**', redirectTo: '' }
];
