import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  name
  constructor() { }

  ngOnInit() {
  }
  whichBtnClicked(btnName){  // name button clicked with name jayneet
    console.log(btnName)
  }

}
