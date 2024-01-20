import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavSplitComponent } from './nav-split/nav-split.component';
import { NavbarV2Component } from './navbar-v2/navbar-v2.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
     path: '', component: NavbarComponent,
     children: [
       {
         path: '',
         loadChildren: () =>
           import('../../modules/user-management/user-management.module').then((m) => m.UserManagementModule),
       },
       {
        path: '',
        loadChildren: () =>
          import('../../modules/notification/notification.module').then((m) => m.NotificationModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/cards/cards.module').then((m) => m.CardsModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/form/form.module').then((m) => m.FormModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/timeline/timeline.module').then((m) => m.TimelineModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/steppers/steppers.module').then((m) => m.SteppersModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('../../modules/workflow/workflow.module').then((m) => m.WorkflowModule),
      },
      
    ],
  },
  {
    path: 'nav2', component: NavbarV2Component,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../modules/user-management/user-management.module').then((m) => m.UserManagementModule),
      },
      {
       path: '',
       loadChildren: () =>
         import('../../modules/notification/notification.module').then((m) => m.NotificationModule),
     },
     {
       path: '',
       loadChildren: () =>
         import('../../modules/cards/cards.module').then((m) => m.CardsModule),
     },
     {
       path: '',
       loadChildren: () =>
         import('../../modules/form/form.module').then((m) => m.FormModule),
     },
     {
       path: '',
       loadChildren: () =>
         import('../../modules/timeline/timeline.module').then((m) => m.TimelineModule),
     },
     {
       path: '',
       loadChildren: () =>
         import('../../modules/steppers/steppers.module').then((m) => m.SteppersModule),
     },
   ],
  },
  {
    path: 'nav-split', component: NavSplitComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaoutRoutingModule { }
