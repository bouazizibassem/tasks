import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { WorkflowRoutingModule } from './workflow-routing.module';



@NgModule({
  declarations: [
    WorkflowComponent,
  ],
  imports: [
    CommonModule,
    WorkflowRoutingModule,
    
  ]
})
export class WorkflowModule { }
