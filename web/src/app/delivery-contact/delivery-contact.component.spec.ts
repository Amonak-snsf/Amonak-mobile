import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryContactComponent } from './delivery-contact.component';

describe('DeliveryContactComponent', () => {
  let component: DeliveryContactComponent;
  let fixture: ComponentFixture<DeliveryContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
