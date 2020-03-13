import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isSignedIn=false;
  constructor() { }
  signIn(email,password){
    // code to sign in from server
    // after success from server
    this.isSignedIn=true
    return this.isSignedIn
  }
}
