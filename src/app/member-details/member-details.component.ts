import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MamberService } from '../mamber.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {
  id
  member:any={name:'',age:''}
  constructor(public route:ActivatedRoute,public memberService:MamberService) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      console.log(res['id'])
      this.id=res['id']
      this.memberService.getMemberById(this.id).subscribe(res=>{
        console.log(res)
        this.member=res
      })
    })
  }


}
