import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPublicationComponent } from './alert-publication.component';

describe('AlertPublicationComponent', () => {
  let component: AlertPublicationComponent;
  let fixture: ComponentFixture<AlertPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
