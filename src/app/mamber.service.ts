import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MamberService {
  
  members=[]
  constructor() { }
  addMember(member){
    this.members.push(member)
    console.log(this.members)
  }
  deleteMember(member){
    this.members = this.members.filter((element)=>{
      if(element!=member){
        return true;
      }
      else{
        return false
      }
    })
  }
}
