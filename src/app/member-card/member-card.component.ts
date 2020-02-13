import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MamberService } from '../mamber.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
  @Input('member') data;

  constructor(public memberService:MamberService) { }

  ngOnInit() {
  }
  delete(){
    this.memberService.deleteMember(this.data)
  }

}
