import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostComponent } from './components/post/post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { postReducer } from './global/store/reducers/postReducer';
import {getInitialState} from './global/store/storage/app.store';
import { PostService } from './services/post.service';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { authReducer } from './global/store/reducers/authReducer';

const appRoutes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: '', redirectTo: '/feed', pathMatch: 'full'},
  {path: 'create', component: CreatePostComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'edit/:id', component: EditPostComponent}
];

/*export function rootReducerFactory() {
  return {postReducer, authReducer};
}*/
export const reducers: ActionReducerMap<any> = {
  post: postReducer,
  auth: authReducer,
};

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent,
    EditPostComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    FormsModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument()
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
