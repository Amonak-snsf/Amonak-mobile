import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionShortcutComponent } from './discussion-shortcut.component';

describe('DiscussionShortcutComponent', () => {
  let component: DiscussionShortcutComponent;
  let fixture: ComponentFixture<DiscussionShortcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionShortcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
