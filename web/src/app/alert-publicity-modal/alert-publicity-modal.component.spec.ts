import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPublicityModalComponent } from './alert-publicity-modal.component';

describe('AlertPublicityModalComponent', () => {
  let component: AlertPublicityModalComponent;
  let fixture: ComponentFixture<AlertPublicityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertPublicityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertPublicityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
