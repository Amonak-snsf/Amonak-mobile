import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOptionDropdownComponent } from './post-option-dropdown.component';

describe('PostOptionDropdownComponent', () => {
  let component: PostOptionDropdownComponent;
  let fixture: ComponentFixture<PostOptionDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOptionDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOptionDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
