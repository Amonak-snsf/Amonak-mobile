import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryFollowComponent } from './delivery-follow.component';

describe('DeliveryFollowComponent', () => {
  let component: DeliveryFollowComponent;
  let fixture: ComponentFixture<DeliveryFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
