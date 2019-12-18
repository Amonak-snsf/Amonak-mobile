import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsSManagementComponent } from './comments-s-management.component';

describe('CommentsSManagementComponent', () => {
  let component: CommentsSManagementComponent;
  let fixture: ComponentFixture<CommentsSManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsSManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsSManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
