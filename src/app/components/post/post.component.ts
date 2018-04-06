import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor(private postService: PostService,  private route: ActivatedRoute, private location: Location ) { }

  ngOnInit() {
    if (!this.post) {
      this.getPost();
    }
  }
  deletePost(id: number) {
    this.postService.deletePost(id);
  }
  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.post = this.postService.getPost(id);
  }
  goBack(): void {
    this.location.back();
  }
}
