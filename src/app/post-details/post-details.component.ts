import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  posts:any = {};

  constructor(public api:ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPost(params.id)
    });
  }

  getPost(id: string) {
    this.posts = {};
    this.api.getPost(id).subscribe((data: {}) => {
      console.log(data);
      this.posts = data;
    });
  }
}