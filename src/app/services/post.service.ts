import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../global/store/storage/app.store';
import { Post } from '../models/post';
import { CREATE_POST, deletePost, initializeStore } from '../global/store/actions/actions';

@Injectable()
export class PostService {

  posts: Observable<Post[]>;

  constructor( private store: Store<AppState>) {
       this.posts = store.select('posts');
   }

}
