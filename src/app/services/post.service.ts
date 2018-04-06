import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { State } from '../global/store/storage/app.store';
import { Post } from '../models/post';
import { CREATE_POST, deletePost, createPost, updatePost } from '../global/store/actions/actions';
import { PostState, getStatePosts } from '../global/store/reducers/postReducer';

@Injectable()
export class PostService {

  postsState: Store<PostState>;
  posts: Observable<Post[]>;
  test: any;
  constructor(private store: Store<State>) {
    this.posts = this.store.select((state) => state.post.posts);
  }
  deletePost = (id: number) => {
    this.store.dispatch(deletePost(id));
  }
  createPost = (post: Post) => {
     this.store.dispatch(createPost(post));
  }
  getPost = (id: number) => {
   let temp: Post[];
   this.posts.subscribe(posts => temp = posts);
   return temp.find(post => post.id === id);
  }
  updatePost = (post: Post) => {
    this.store.dispatch(updatePost(post));
  }
}
