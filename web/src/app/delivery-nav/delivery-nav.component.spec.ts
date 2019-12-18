import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryNavComponent } from './delivery-nav.component';

describe('DeliveryNavComponent', () => {
  let component: DeliveryNavComponent;
  let fixture: ComponentFixture<DeliveryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
