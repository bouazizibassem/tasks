import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCardComponent } from './liste-card.component';

describe('ListeCardComponent', () => {
  let component: ListeCardComponent;
  let fixture: ComponentFixture<ListeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
