import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  email=""
  password=""
  constructor(public authService:AuthService,public router:Router) { }

  ngOnInit() {
  }
  SignIn(){
    // code to sign in user
    let status=false
    status=this.authService.signIn(this.email,this.password)
    if(status==true){
      this.router.navigateByUrl('/home')
    }
  }

}
