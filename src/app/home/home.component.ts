import { Component, OnInit } from '@angular/core';
import { MamberService } from '../mamber.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'first-project';
  regForm={name:'',age:''}
  objeReceivedfromChildMember
  registeredMembers=[]
  receivedData;
  constructor(public memberService:MamberService) { }

  ngOnInit() {
  }

}
