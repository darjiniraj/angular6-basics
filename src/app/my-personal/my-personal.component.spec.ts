import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPersonalComponent } from './my-personal.component';

describe('MyPersonalComponent', () => {
  let component: MyPersonalComponent;
  let fixture: ComponentFixture<MyPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
