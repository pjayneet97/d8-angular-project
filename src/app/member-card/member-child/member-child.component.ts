import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-child',
  templateUrl: './member-child.component.html',
  styleUrls: ['./member-child.component.scss']
})
export class MemberChildComponent implements OnInit {
  @Input() name;
  @Input() age;
  constructor() { }

  ngOnInit() {
  }

}
