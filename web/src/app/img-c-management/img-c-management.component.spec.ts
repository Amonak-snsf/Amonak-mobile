import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCManagementComponent } from './img-c-management.component';

describe('ImgCManagementComponent', () => {
  let component: ImgCManagementComponent;
  let fixture: ComponentFixture<ImgCManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgCManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
