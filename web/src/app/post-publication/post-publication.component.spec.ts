import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPublicationComponent } from './post-publication.component';

describe('PostPublicationComponent', () => {
  let component: PostPublicationComponent;
  let fixture: ComponentFixture<PostPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
