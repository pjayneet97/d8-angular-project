import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Member } from './models/member.model';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class MamberService {
  
  members=[]
  constructor(public db:AngularFirestore,public auth:AuthService) { 
    this.getAppMembers()
  }
  addMember(member){
   /*  this.members.push(member)
    console.log(this.members) */
    let tempmember:Member=member
    tempmember.name=member.name
    tempmember.age=member.age
    tempmember.timestamp=new Date();
    tempmember.createdBy=this.auth.getUserId();
    console.log(tempmember)
    this.db.collection("members").add(tempmember)
  }
  deleteMember(memberId){
/*     this.members = this.members.filter((element)=>{
      if(element!=member){
        return true;
      }
      else{
        return false
      }
    }) */
    this.db.collection("members").doc(memberId).delete()
  }
  getAppMembers(){
    this.db.collection("members",ref=>ref.where('createdBy','==',this.auth.getUserId()))
    .snapshotChanges().
    pipe(
      map(action => action.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
    .subscribe(res=>{
      
      this.members=res
    })
    
  }
  updateMember(id,data){
    this.db.collection("members").doc(id).set(data)
  }

  getMemberById(id){
    return this.db.collection('members').doc(id).valueChanges()
  }

}
