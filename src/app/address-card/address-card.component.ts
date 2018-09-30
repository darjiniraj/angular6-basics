import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any
  isCollapse: boolean = true;
  buttonText: string = 'Expand'

  nameText : string = "Hello"

  constructor() {
    this.user = {
      name: 'Nirav Darji',
      title: 'Electrical Engineer',
      address: 'Ahmedabad, Gujarat, India',
      phone: [
        '8460828683',
        '9913399133',
        '154656465'
      ]
    }
  }

  toggleCollapese() {
    this.isCollapse = !this.isCollapse;

    if (this.isCollapse)
      this.buttonText = 'Expand'
    else
      this.buttonText = 'Collapse'
  }

  ngOnInit() {
  }

}
