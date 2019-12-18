import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPublicationComponent } from './sell-publication.component';

describe('SellPublicationComponent', () => {
  let component: SellPublicationComponent;
  let fixture: ComponentFixture<SellPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
