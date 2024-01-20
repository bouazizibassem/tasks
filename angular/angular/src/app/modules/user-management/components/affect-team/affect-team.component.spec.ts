import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectTeamComponent } from './affect-team.component';

describe('AffectTeamComponent', () => {
  let component: AffectTeamComponent;
  let fixture: ComponentFixture<AffectTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
