import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPublicityComponent } from './nav-publicity.component';

describe('NavPublicityComponent', () => {
  let component: NavPublicityComponent;
  let fixture: ComponentFixture<NavPublicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPublicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
