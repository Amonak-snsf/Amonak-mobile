import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPublicityModalComponent } from './ad-publicity-modal.component';

describe('AdPublicityModalComponent', () => {
  let component: AdPublicityModalComponent;
  let fixture: ComponentFixture<AdPublicityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPublicityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPublicityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
