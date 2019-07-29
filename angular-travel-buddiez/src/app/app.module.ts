import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { ClickedContinentPageComponent } from './components/clicked-continent-page/clicked-continent-page.component';
import { EditContinentPageComponent } from './components/edit-continent-page/edit-continent-page.component';

import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';

const routes = [
  { path: 'home', component: LandingComponent, children: [
    { path: '', component: LandingComponent },
    { path: 'logged-in', component: LandingComponent }
  ]},
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, children: [
    { path: '', component: ProfileComponent },
    { path: 'edit-profile', component: EditprofileComponent }
  ]},
  { path: 'main', component: ClickedContinentPageComponent, children: [
    // { path: '', component: ClickedContinentPageComponent },
    { path: 'edit-continent-page', component: EditContinentPageComponent }
  ]},
  { path: '**', component: LandingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent,
    LoginComponent,
    LandingComponent,
    ProfileComponent,
    EditprofileComponent,
    ClickedContinentPageComponent,
    EditContinentPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    AuthService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
