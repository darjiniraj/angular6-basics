import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-input-style2',
  templateUrl: './address-input-style2.component.html',
  styleUrls: ['./address-input-style2.component.css']
})
export class AddressInputStyle2Component implements OnInit {


  @Input('user') user: User;


  constructor() { }

  ngOnInit() {


  }

}
