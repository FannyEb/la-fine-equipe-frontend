import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingListComponent } from './landing-list/landing-list.component';

const routes: Routes = [{ path: 'landing', component: LandingListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
