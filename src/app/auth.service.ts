import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isSignedIn=false;
  loggedInUserId
  constructor(public router:Router,public afAuth:AngularFireAuth) { 
    this.afAuth.user.subscribe(res=>{
      console.log(res)
      if(res.uid){
        this.loggedInUserId=res.uid
        this.router.navigateByUrl('/home')
        this.isSignedIn=true;
      }
      else{
        this.isSignedIn=false;
      }
    })
  }
  signIn(email,password){
      this.afAuth.signInWithEmailAndPassword(email,password).then(res=>{
        console.log(res)
        this.isSignedIn=true;
        this.loggedInUserId=res.user.uid
        this.router.navigateByUrl("/home")
      }).catch(res=>{
        console.log(res)
        alert(res)
      })
/*     if(email==this.email && password==this.password){
      this.isSignedIn=true
      this.router.navigateByUrl('/home')
    }
    else{
      this.isSignedIn=false
      alert("Wrong Id or Password")
    } */
    // after success from server
    
    return this.isSignedIn
  }
  isUserSignedIn(){
    return this.isSignedIn
  }
  logout(){
    this.isSignedIn=false;
    this.afAuth.signOut()
    location.reload()
    this.router.navigateByUrl("/auth/signin")
  }
  signup(email,password){
    this.afAuth.createUserWithEmailAndPassword(email,password).then(res=>{
      this.isSignedIn=true;
      this.loggedInUserId=res.user.uid
      this.router.navigateByUrl("/home")
    }).catch(err=>{
      alert(err)
    })
  }
  getUserId(){
    return this.loggedInUserId
  }
}
