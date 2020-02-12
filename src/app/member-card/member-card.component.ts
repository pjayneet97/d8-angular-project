import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
  @Input('member') data;
  @Output('onDeleted') eventForDelete =new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  delete(event){
    console.log(event)
    this.eventForDelete.emit(this.data)
  }

}
