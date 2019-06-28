import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './_layouts/main-layout/main-layout.component';
import { LoginLayoutComponent } from './_layouts/login-layout/login-layout.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';

import { GeneralService } from './_services/general.service';
import { AuthService } from './_services/auth.service';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
    LoginComponent,
    NavBarComponent,
    PatientsComponent,
    PatientDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    GeneralService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
