import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapFormComponent } from './components/bootstrap-form/bootstrap-form.component';
import { FormAppComponent } from './components/form-app/form-app.component';


const routes: Routes = [
    { path: 'form-app', component: FormAppComponent },
    { path: 'bootstrap-form', component: BootstrapFormComponent },
    { path: '', redirectTo: 'form-app', pathMatch: 'full' },
  
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class FormRoutingModule { }