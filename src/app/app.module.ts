import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { MemberChildComponent } from './member-card/member-child/member-child.component';
import { AdminComponent } from './admin/admin.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import 'firebase/firestore';
import { auth } from 'firebase/app';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { TestPipe } from './test.pipe';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    MemberCardComponent,
    MemberChildComponent,
    AdminComponent,
    NavbarComponent,
    SigninComponent,
    HomeComponent,
    SignupComponent,
    AuthComponent,
    MemberDetailsComponent,
    TestPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
