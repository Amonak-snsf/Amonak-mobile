import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryWorkComponent } from './delivery-work.component';

describe('DeliveryWorkComponent', () => {
  let component: DeliveryWorkComponent;
  let fixture: ComponentFixture<DeliveryWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
