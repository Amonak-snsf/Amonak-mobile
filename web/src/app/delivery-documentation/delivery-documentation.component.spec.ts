import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDocumentationComponent } from './delivery-documentation.component';

describe('DeliveryDocumentationComponent', () => {
  let component: DeliveryDocumentationComponent;
  let fixture: ComponentFixture<DeliveryDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
