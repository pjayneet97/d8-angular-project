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
  deleteMember(member){
   this.registeredMembers = this.registeredMembers.filter((element)=>{
      if(element!=member){
        return true;
      }
      else{
        return false
      }
    })
  }
  whichBtnClicked(btnName){
    console.log(btnName)
  }
}
