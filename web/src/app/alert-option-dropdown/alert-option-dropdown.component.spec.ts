import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertOptionDropdownComponent } from './alert-option-dropdown.component';

describe('AlertOptionDropdownComponent', () => {
  let component: AlertOptionDropdownComponent;
  let fixture: ComponentFixture<AlertOptionDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertOptionDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertOptionDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
