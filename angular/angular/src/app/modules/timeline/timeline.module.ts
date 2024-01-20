import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineVerticalComponent } from './components/timeline-vertical/timeline-vertical.component';
import { TimelinetRoutingModule } from './timeline-routing.module';


@NgModule({
  declarations: [
    TimelineVerticalComponent
  ],
  imports: [
    CommonModule,
    TimelinetRoutingModule
  ]
})
export class TimelineModule { }
