import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaAnswersComponent } from './ca-answers.component';

describe('CaAnswersComponent', () => {
  let component: CaAnswersComponent;
  let fixture: ComponentFixture<CaAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
