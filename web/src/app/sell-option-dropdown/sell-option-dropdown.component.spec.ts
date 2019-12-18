import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOptionDropdownComponent } from './sell-option-dropdown.component';

describe('SellOptionDropdownComponent', () => {
  let component: SellOptionDropdownComponent;
  let fixture: ComponentFixture<SellOptionDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellOptionDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellOptionDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
