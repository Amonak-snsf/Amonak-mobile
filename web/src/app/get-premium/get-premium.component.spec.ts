import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPremiumComponent } from './get-premium.component';

describe('GetPremiumComponent', () => {
  let component: GetPremiumComponent;
  let fixture: ComponentFixture<GetPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
