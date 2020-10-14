import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  posts: any = {};
  comments: any = [];

  constructor(
    public api: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getPost(params.id);
      this.getComment(params.id);
    });
  }

  getPost(id: string) {
    this.posts = {};
    this.api.getPost(id).subscribe((data: {}) => {
      this.posts = data;
    });
  }

  getComment(id: string) {
    this.comments = [];
    this.api.getPostComment(id).subscribe((data: {}) => {
      this.comments = data;
    });
  }
}
