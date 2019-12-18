import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPrComponent } from './navbar-pr.component';

describe('NavbarPrComponent', () => {
  let component: NavbarPrComponent;
  let fixture: ComponentFixture<NavbarPrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
