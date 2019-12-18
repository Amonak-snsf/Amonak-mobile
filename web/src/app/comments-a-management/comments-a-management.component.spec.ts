import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsAManagementComponent } from './comments-a-management.component';

describe('CommentsAManagementComponent', () => {
  let component: CommentsAManagementComponent;
  let fixture: ComponentFixture<CommentsAManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsAManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsAManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
