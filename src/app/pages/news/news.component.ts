import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { NewsPost } from '../../core/models';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  // TEMP: hardcoded sample post, while the backend isn't running, just to show the
  // card layout. Edit directly below, or set back to `[]` to see the real empty state.
  // To switch back to the live API once the backend is up, delete this array and
  // uncomment the getNewsPosts() line below.
  posts: NewsPost[] = [
    { id: 1, title: 'Sample update - replace with your own', body: 'This is placeholder body text so you can see how a published update looks on this page.', publishedAt: new Date().toISOString() }
  ];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // Live API version - uncomment once the backend is running, and delete the
    // hardcoded `posts` array above.
    // this.api.getNewsPosts().subscribe({ next: (data) => (this.posts = data) });
  }
}
