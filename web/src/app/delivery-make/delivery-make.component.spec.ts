import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryMakeComponent } from './delivery-make.component';

describe('DeliveryMakeComponent', () => {
  let component: DeliveryMakeComponent;
  let fixture: ComponentFixture<DeliveryMakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryMakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
