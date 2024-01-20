import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowComponent } from './components/workflow/workflow.component';


const routes: Routes = [
  { path: 'workflow', component: WorkflowComponent },  
//   { path: '', redirectTo: 'liste-user', pathMatch: 'full' },
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class WorkflowRoutingModule { }