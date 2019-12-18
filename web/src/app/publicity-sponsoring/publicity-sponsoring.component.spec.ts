import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicitySponsoringComponent } from './publicity-sponsoring.component';

describe('PublicitySponsoringComponent', () => {
  let component: PublicitySponsoringComponent;
  let fixture: ComponentFixture<PublicitySponsoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicitySponsoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicitySponsoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
