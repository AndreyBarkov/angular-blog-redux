import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostComponent } from './components/post/post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { postReducer } from './global/store/reducers/postReducer';
import {getInitialState } from './global/store/storage/app.store';
import { PostService } from './services/post.service';

const appRoutes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: '', redirectTo: '/feed', pathMatch: 'full'}
];

export function rootReducerFactory() {
  return postReducer;
}

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    StoreModule.forRoot({} as any, {reducerFactory: rootReducerFactory }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
