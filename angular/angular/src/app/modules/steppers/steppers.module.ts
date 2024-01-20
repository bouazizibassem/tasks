import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperHorizontalComponent } from './components/stepper-horizontal/stepper-horizontal.component';
import { SteppersRoutingModule } from './steppers-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { StepperVerticalComponent } from './components/stepper-vertical/stepper-vertical.component';



@NgModule({
  declarations: [
    StepperHorizontalComponent,
    StepperVerticalComponent
  ],
  imports: [
    CommonModule,
    SteppersRoutingModule,
    MatButtonModule,
    MatInputModule, 
    MatStepperModule,
    ReactiveFormsModule,
  ]
})
export class SteppersModule { }
