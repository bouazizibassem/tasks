import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsAgendaComponent } from './views-agenda.component';

describe('ViewsAgendaComponent', () => {
  let component: ViewsAgendaComponent;
  let fixture: ComponentFixture<ViewsAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
