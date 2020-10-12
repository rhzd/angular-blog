import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {
    path: 'post',
    component: PostComponent,
    data: { title: 'Post List' }
  },
  {
    path: 'post-details/:id',
    component: PostDetailsComponent,
    data: { title: 'Post Details' }
  },
  { path: '',
    redirectTo: '/post',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
