import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingListComponent } from './landing-list/landing-list.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiHttpInterceptor } from './service/api-http-interceptor';
import { InterventionService } from './service/intervention.service';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingListComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SigninComponent,
    LoginComponent,
    HttpClientModule,
  ],
  providers: [
    InterventionService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHttpInterceptor,
      multi: true,
      deps: [InterventionService, UserService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
