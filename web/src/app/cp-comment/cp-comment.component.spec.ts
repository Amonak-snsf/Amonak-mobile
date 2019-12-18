import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpCommentComponent } from './cp-comment.component';

describe('CpCommentComponent', () => {
  let component: CpCommentComponent;
  let fixture: ComponentFixture<CpCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
