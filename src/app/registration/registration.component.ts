import { Component, OnInit, Input } from '@angular/core';
import {MamberService} from '../mamber.service'
import { Member } from '../models/member.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  member:Member={name:"",age:"",createdBy:"",timestamp:new Date()}
  num:number=0
  submitStatus=false;
  headingColor="blue"
  resetFlag=false;
  date:any
  constructor(public memberService:MamberService,public router:Router) { 

  }

  ngOnInit() {
    let data=new Date()
    console.log(data)
  }
  addMember(){
    
    if(this.isInputValid()){
      this.memberService.addMember(this.member)
      this.member={name:"",age:"",createdBy:"",timestamp:new Date()}
      this.submitStatus=true
      setTimeout(()=>{
        this.resetFlag=true;
        this.submitStatus=false
      },5000)
      // code to redirect to home 
      //this.router.navigateByUrl('/home')
    }

  }

  isSubmitted(){
    if(this.submitStatus==true){
      return false
    }
    else{
      return true
    }
  }
  getColor(){
    if(this.resetFlag==true){
      return "blue";
    }
    else{
      if(this.submitStatus==true){
        return "green"
      }
      else{
        return "red"
      }
    }
  }

  isInputValid(){
    let number= 100
    let str=number.toString()
    if(str.length==10){
      return false;
    }
    else{
      return true;
    }
  }

  testSubmit(submittedFrom:NgForm){
    console.log(submittedFrom)
    this.memberService.addMember(submittedFrom.value)
    submittedFrom.resetForm();
    //this.router.navigateByUrl('/home')
    console.log(this.date)
  }


}
