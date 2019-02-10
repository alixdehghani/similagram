import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { FallowingComponent } from './fallowing/fallowing.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard]},
  {path: 'fallowing', component: FallowingComponent, canActivate: [AuthGuard]},
  {path: 'myposts', component: MyPostsComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
