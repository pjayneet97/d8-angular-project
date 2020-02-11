import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-project';
  regForm={name:'',age:''}
  registeredMembers=[]
  constructor(){

  }
  addName(){
    this.registeredMembers.push(this.regForm)
    this.regForm={name:'',age:''}
  }
}
