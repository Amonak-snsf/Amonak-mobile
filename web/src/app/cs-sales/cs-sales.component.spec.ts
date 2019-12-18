import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsSalesComponent } from './cs-sales.component';

describe('CsSalesComponent', () => {
  let component: CsSalesComponent;
  let fixture: ComponentFixture<CsSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
