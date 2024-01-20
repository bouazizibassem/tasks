import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNotificationsComponent } from './liste-notifications.component';

describe('ListeNotificationsComponent', () => {
  let component: ListeNotificationsComponent;
  let fixture: ComponentFixture<ListeNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
