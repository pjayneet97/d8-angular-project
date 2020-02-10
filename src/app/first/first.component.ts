import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  enteredName="";
  names=[]
  constructor() { 
    
  }

  ngOnInit() {
    console.log("in ngoninit")
  }
  addName(){
    this.names.push(this.enteredName)
    this.enteredName=""
    console.log(this.names)
  }


}
