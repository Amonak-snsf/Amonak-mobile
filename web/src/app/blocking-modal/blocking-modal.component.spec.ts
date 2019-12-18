import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockingModalComponent } from './blocking-modal.component';

describe('BlockingModalComponent', () => {
  let component: BlockingModalComponent;
  let fixture: ComponentFixture<BlockingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
