import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-member-child',
  templateUrl: './member-child.component.html',
  styleUrls: ['./member-child.component.scss']
})
export class MemberChildComponent implements OnInit {
  @Input() name;
  @Input() age;
  @Output() btnClicked=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onbtnClicked(btnType){
    console.log(btnType)
    let objectTobeSend={type:"",value:""};
    if(btnType=="name"){
      objectTobeSend.type=btnType;
      objectTobeSend.value=this.name
    }else{
      objectTobeSend.type=btnType;
      objectTobeSend.value=this.age
    }
    this.btnClicked.emit(objectTobeSend)
  }

}
