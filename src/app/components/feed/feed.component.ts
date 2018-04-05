import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  posts: Post[] = [];
  testNum = 3;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.posts.subscribe(posts => this.posts = posts);
  }

}
