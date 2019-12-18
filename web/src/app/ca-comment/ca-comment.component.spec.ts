import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaCommentComponent } from './ca-comment.component';

describe('CaCommentComponent', () => {
  let component: CaCommentComponent;
  let fixture: ComponentFixture<CaCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
