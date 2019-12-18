import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicityPageComponent } from './publicity-page.component';

describe('PublicityPageComponent', () => {
  let component: PublicityPageComponent;
  let fixture: ComponentFixture<PublicityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
