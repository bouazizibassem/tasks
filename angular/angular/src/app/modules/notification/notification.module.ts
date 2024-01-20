import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeNotificationsComponent } from './components/liste-notifications/liste-notifications.component';
import { NotificationRoutingModule } from './notification-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  declarations: [
    ListeNotificationsComponent,
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MatFormFieldModule,
    MatInputModule, 
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxMatSelectSearchModule
  ]
})
export class NotificationModule { }
