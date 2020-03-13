import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'home/add-member',component:RegistrationComponent},
  {path:'home/members',component:HomeComponent},
  {path:'signin',component:SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
