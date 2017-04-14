import { Component, OnInit } from '@angular/core';
import {PostsService} from './../../services/posts.service';
import {Post} from './../../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  private posts:Post[];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPosts()
      .then(response => this.posts = response);
  }

}
