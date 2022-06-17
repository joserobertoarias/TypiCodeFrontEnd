import { AlbumsComponent } from './components/albums/albums.component';
import { PhotoComponent } from './components/users/photo/photo.component';
import { CommentComponent } from './components/users/comment/comment.component';
import { ListComponent } from './components/users/list/list.component';
import { IndexComponent } from './components/index/index.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  {path: 'users', component: ListComponent},
  {path: 'comments/:postId/:userId', component: CommentComponent },
  {path: 'photos/:albumId/:userId', component: PhotoComponent},
  {path: 'posts/:userId', component: PostsComponent},
  {path: 'albums/:userId', component: AlbumsComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
