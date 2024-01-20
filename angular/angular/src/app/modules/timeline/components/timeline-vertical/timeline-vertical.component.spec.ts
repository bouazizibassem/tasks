import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineVerticalComponent } from './timeline-vertical.component';

describe('TimelineVerticalComponent', () => {
  let component: TimelineVerticalComponent;
  let fixture: ComponentFixture<TimelineVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
