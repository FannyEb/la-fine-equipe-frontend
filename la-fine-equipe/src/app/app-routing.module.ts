import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LandingListComponent } from './landing-list/landing-list.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: 'landing', component: LandingListComponent },
  { path: '', component: HomeComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
