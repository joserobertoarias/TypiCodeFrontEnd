import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { ListComponent } from './components/users/list/list.component';
import { CommentComponent } from './components/users/comment/comment.component';
import { PhotoComponent } from './components/users/photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';
import { AlbumsComponent } from './components/albums/albums.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ListComponent,
    CommentComponent,
    PhotoComponent,
    PostsComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
