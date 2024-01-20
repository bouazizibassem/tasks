import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAccordionComponent } from './liste-accordion.component';

describe('ListeAccordionComponent', () => {
  let component: ListeAccordionComponent;
  let fixture: ComponentFixture<ListeAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
