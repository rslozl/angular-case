import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./views/homepage/homepage.component";
import {PostsComponent} from "./views/posts/posts.component";

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'home',
    component:HomepageComponent
  },
  {
    path:'posts',
    component:PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
