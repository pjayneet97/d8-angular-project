import { Component } from '@angular/core';
import { MamberService } from './mamber.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-project';
  regForm={name:'',age:''}
  objeReceivedfromChildMember
  registeredMembers=[]
  constructor(public memberService:MamberService){
  }



}
