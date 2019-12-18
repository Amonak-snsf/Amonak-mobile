import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubPremiumComponent } from './pub-premium.component';

describe('PubPremiumComponent', () => {
  let component: PubPremiumComponent;
  let fixture: ComponentFixture<PubPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
