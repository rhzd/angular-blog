import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: any = [];

  constructor(public api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.posts = [];
    this.api.getAllPost().subscribe((data: {}) => {
      this.posts = data;
    });
  }
}
