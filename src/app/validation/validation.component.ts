import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  model: any = {};
  constructor() { }
  
  ngOnInit() {
  }


  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))

  // conditional validation


  }
}
