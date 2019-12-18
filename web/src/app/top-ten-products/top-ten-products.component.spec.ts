import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenProductsComponent } from './top-ten-products.component';

describe('TopTenProductsComponent', () => {
  let component: TopTenProductsComponent;
  let fixture: ComponentFixture<TopTenProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
