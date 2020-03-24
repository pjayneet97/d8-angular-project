import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuardService } from './auth-guard.service';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { MemberDetailsComponent } from './member-details/member-details.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
  {path:'home/add-member',component:RegistrationComponent,canActivate:[AuthGuardService]},
  {path:'home/members',component:HomeComponent,canActivate:[AuthGuardService]},
  {path:'home/members/:id',component:MemberDetailsComponent},
/*   {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent}, */
  
  {path:'auth',component:AuthComponent,children:[
    {path:'',redirectTo:'signin',pathMatch:'full'},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent}
  ]},
  {path:'**',component:SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
