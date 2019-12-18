import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStoriesComponent } from './edit-stories.component';

describe('EditStoriesComponent', () => {
  let component: EditStoriesComponent;
  let fixture: ComponentFixture<EditStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
