import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDomaineComponent } from './choose-domaine.component';

describe('ChooseDomaineComponent', () => {
  let component: ChooseDomaineComponent;
  let fixture: ComponentFixture<ChooseDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseDomaineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
