import { Component, OnInit, Input } from '@angular/core';
import {MamberService} from '../mamber.service'
import { Member } from '../models/member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  member:Member={name:"",age:""}
  constructor(public memberService:MamberService,public router:Router) { }

  ngOnInit() {
  
  }
  addMember(){
    this.memberService.addMember(this.member)
    this.member={name:"",age:""}
    // code to redirect to home 
    this.router.navigateByUrl('/home')

  }


}
