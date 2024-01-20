import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineVerticalComponent } from './components/timeline-vertical/timeline-vertical.component';


const routes: Routes = [
   { path: 'timeline-vertical', component: TimelineVerticalComponent },  
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

  export class TimelinetRoutingModule { }