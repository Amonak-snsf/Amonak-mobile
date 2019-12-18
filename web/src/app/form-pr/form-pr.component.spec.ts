import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrComponent } from './form-pr.component';

describe('FormPrComponent', () => {
  let component: FormPrComponent;
  let fixture: ComponentFixture<FormPrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
