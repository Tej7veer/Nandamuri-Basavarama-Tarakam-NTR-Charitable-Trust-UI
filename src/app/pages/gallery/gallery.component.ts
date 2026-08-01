import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { GalleryImage, Video } from '../../core/models';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  images: GalleryImage[] = [];

  // TEMP: hardcoded from assets/videos/, while the backend isn't running. Swap
  // videoUrl/posterUrl paths for your own files (same folder, any filename). To
  // switch back to the live API once the backend is up, delete this array and
  // uncomment the getVideos() line below.
  videos: Video[] = [
    { id: 1, caption: 'Sample video 1', videoUrl: 'assets/videos/video-1.mp4', posterUrl: 'assets/videos/video-1-poster.jpg' },
    { id: 2, caption: 'Sample video 2', videoUrl: 'assets/videos/video-2.mp4', posterUrl: 'assets/videos/video-2-poster.jpg' }
  ];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getGalleryImages().subscribe({ next: (data) => (this.images = data) });
    // Live API version - uncomment once the backend is running, and delete the
    // hardcoded `videos` array above.
    // this.api.getVideos().subscribe({ next: (data) => (this.videos = data) });
  }
}
