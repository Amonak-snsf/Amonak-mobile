import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPublicityModalComponent } from './sell-publicity-modal.component';

describe('SellPublicityModalComponent', () => {
  let component: SellPublicityModalComponent;
  let fixture: ComponentFixture<SellPublicityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellPublicityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellPublicityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
