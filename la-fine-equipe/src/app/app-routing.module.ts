import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { LandingListComponent } from './landing-list/landing-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: LandingListComponent },
  { path: 'landing', component: LandingListComponent },
  { path: 'detail', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
