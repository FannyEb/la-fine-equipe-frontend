import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LandingListComponent } from './landing-list/landing-list.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingListComponent,
    DetailComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SigninComponent, LoginComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
