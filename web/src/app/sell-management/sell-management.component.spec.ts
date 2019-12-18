import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellManagementComponent } from './sell-management.component';

describe('SellManagementComponent', () => {
  let component: SellManagementComponent;
  let fixture: ComponentFixture<SellManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
