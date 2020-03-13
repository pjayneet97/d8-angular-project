import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MamberService } from '../mamber.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
  @Input('member') data;
  @Output() SendToAppComp=new EventEmitter();
  editMemberObject={name:"",age:""}
  isformvisible=false
  constructor(public memberService:MamberService) { }

  ngOnInit() {
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
    this.isformvisible=!this.isformvisible;
  }
  update(){
    console.log(this.data)
    this.memberService.updateMember(this.data.id,this.editMemberObject)
    this.isformvisible=false
  }

}
