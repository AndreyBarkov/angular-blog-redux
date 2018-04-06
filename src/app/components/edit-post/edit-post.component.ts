import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../../services/post.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  post: Post;
  constructor(private postService: PostService,  private route: ActivatedRoute, private location: Location ) { }

  ngOnInit() {
    this.getPost();
  }
  submitForm(form: NgForm) {
    this.postService.updatePost(this.post);
    this.goBack();
  }
  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.post = this.postService.getPost(id);
  }
  goBack(): void {
    this.location.back();
  }
}
