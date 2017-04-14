import { Component, OnInit, Input } from '@angular/core';
import {Post} from './../../models/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  private post:Post;
  @Input() Post: Post;
  constructor() { }

  ngOnInit() {
    this.post = this.Post;
  }

}
