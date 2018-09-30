import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInputStyle1Component } from './address-input-style1.component';

describe('AddressInputStyle1Component', () => {
  let component: AddressInputStyle1Component;
  let fixture: ComponentFixture<AddressInputStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressInputStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressInputStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
