import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSplitComponent } from './nav-split.component';

describe('NavSplitComponent', () => {
  let component: NavSplitComponent;
  let fixture: ComponentFixture<NavSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSplitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
