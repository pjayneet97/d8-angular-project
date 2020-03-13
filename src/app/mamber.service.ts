import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MamberService {
  
  members=[]
  constructor(public db:AngularFirestore) { 
    this.getAppMembers()
  }
  addMember(member){
   /*  this.members.push(member)
    console.log(this.members) */
    this.db.collection("members").add(member)
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
    this.db.collection("members",ref=>ref.orderBy('name','asc'))
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

}
