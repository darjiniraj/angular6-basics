import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-conditional-validation',
  templateUrl: './conditional-validation.component.html',
  styleUrls: ['./conditional-validation.component.css']
})
export class ConditionalValidationComponent implements OnInit {


  loginForm: FormGroup;

  pincodePattern = "[LI]";

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, [Validators.required, Validators.maxLength(8)]],
      phonenumber: [null],
      pincode: [],
      proviance: ['on']
    });

    this.formControlValueChanged()
  }


  formControlValueChanged() {

    const pincodeControl = this.loginForm.get('pincode');

    this.loginForm.get('proviance').valueChanges.subscribe(
      (mode: string) => {
        console.log(mode);

        if (mode === 'on') {
          pincodeControl.setValidators([Validators.required, Validators.pattern(this.pincodePattern)])
        } else if (mode === 'off') {
          pincodeControl.clearValidators();
        }
        pincodeControl.updateValueAndValidity();
      });
  }

  loginUser() {
    console.log(this.loginForm.status);
    console.log(this.loginForm.value);
  }

}
