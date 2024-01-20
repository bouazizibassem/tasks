import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperHorizontalComponent } from './components/stepper-horizontal/stepper-horizontal.component';
import { StepperVerticalComponent } from './components/stepper-vertical/stepper-vertical.component';


const routes: Routes = [
   { path: 'stepper-horizontal', component: StepperHorizontalComponent },  
   { path: 'stepper-vertical', component: StepperVerticalComponent },  
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

  export class SteppersRoutingModule { }