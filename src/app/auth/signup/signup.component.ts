import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email=""
  password=""
  constructor(public authService:AuthService) { }

  ngOnInit() {
  }
  SignUp(){
    // code to sign in user
    this.authService.signup(this.email,this.password)
  }

}
