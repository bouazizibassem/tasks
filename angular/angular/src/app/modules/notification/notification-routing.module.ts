import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeNotificationsComponent } from './components/liste-notifications/liste-notifications.component';

const routes: Routes = [
   { path: 'liste-notification', component: ListeNotificationsComponent },
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class NotificationRoutingModule { }