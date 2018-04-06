import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  model: Post;
  constructor(private postService: PostService, private location: Location) { }

  submitForm(form: NgForm) {
    this.postService.createPost(this.model);
    this.goBack();
  }

  ngOnInit() {
    this.model = {
      id: null,
      title: null,
      text: null,
      datePosted: null,
    };
  }
  goBack(): void {
    this.location.back();
  }
}
