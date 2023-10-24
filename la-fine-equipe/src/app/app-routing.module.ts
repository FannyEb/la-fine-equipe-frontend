import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LandingListComponent } from './landing-list/landing-list.component';

const routes: Routes = [
    { path: 'landing', component: LandingListComponent },
  { path: "", component: HomeComponent },
  { path: "detail", component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
