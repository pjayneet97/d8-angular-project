import { Component, OnInit } from '@angular/core';
import { MamberService } from '../mamber.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public memberService:MamberService) { }

  ngOnInit() {
   
  }

}
