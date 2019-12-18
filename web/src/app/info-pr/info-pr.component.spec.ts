import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPrComponent } from './info-pr.component';

describe('InfoPrComponent', () => {
  let component: InfoPrComponent;
  let fixture: ComponentFixture<InfoPrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
