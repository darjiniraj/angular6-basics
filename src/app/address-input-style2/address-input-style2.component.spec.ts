import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInputStyle2Component } from './address-input-style2.component';

describe('AddressInputStyle2Component', () => {
  let component: AddressInputStyle2Component;
  let fixture: ComponentFixture<AddressInputStyle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressInputStyle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressInputStyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
