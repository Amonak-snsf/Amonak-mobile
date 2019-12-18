import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFilComponent } from './news-fil.component';

describe('NewsFilComponent', () => {
  let component: NewsFilComponent;
  let fixture: ComponentFixture<NewsFilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
