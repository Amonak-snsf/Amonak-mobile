import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsCommentComponent } from './cs-comment.component';

describe('CsCommentComponent', () => {
  let component: CsCommentComponent;
  let fixture: ComponentFixture<CsCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
