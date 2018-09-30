import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-input-style1',
  templateUrl: './address-input-style1.component.html',
  styleUrls: ['./address-input-style1.component.css']
})
export class AddressInputStyle1Component implements OnInit {

  nameString: string;

  @Input('name') userName: string;
  constructor() { }

  ngOnInit() {
    this.nameString = this.userName;
  }

}
