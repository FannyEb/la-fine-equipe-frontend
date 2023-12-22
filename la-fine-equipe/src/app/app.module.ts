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
import { AppointmentService } from './service/appointment.service';
import { UserService } from './service/user.service';
import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import { heroCreditCard, heroCheck } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    AppComponent,
    LandingListComponent,
    DetailComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SigninComponent,
    LoginComponent,
    FooterComponent,
    HttpClientModule,
    NgIconsModule.withIcons({ heroCheck, heroCreditCard }),
  ],
  providers: [
    AppointmentService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHttpInterceptor,
      multi: true,
      deps: [AppointmentService, UserService],
    },
    provideNgIconsConfig({
      size: '1.5em',
      color: 'black',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
