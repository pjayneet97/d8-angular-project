import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MamberService } from '../mamber.service';
import { Router } from '@angular/router';
import { isNumber } from 'util';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
  @Input('member') data;
  @Output() SendToAppComp=new EventEmitter();
  editMemberObject={name:"",age:"",createdBy:""}
  isformvisible=false
  num:number=0
  disableSubmitButton
  constructor(public memberService:MamberService,public router:Router) { }

  ngOnInit() {
    console.log(this.data)
  }

  delete(){
    this.memberService.deleteMember(this.data.id)
  }
  sendToApp(event){
    this.SendToAppComp.emit(event)
  }
  onUpdateClicked(){
    this.editMemberObject.name=this.data.name;
    this.editMemberObject.age=this.data.age;
    this.editMemberObject.createdBy=this.data.createdBy;
    this.isformvisible=!this.isformvisible;
  }
  update(){
    console.log(this.data)
    this.memberService.updateMember(this.data.id,this.editMemberObject)
    this.isformvisible=false
  }
/*   sendtoMemberDetails(){
    let url= '/home/members/'+this.data.id
    this.router.navigateByUrl(url)
  } */

}
