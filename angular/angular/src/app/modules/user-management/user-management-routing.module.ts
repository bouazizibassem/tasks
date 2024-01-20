import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeUserComponent } from './components/liste-user/liste-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ViewsAgendaComponent } from './components/views-agenda/views-agenda.component';
import { ViewSprintComponent } from './components/view-sprint/view-sprint.component';
import { AddSprintComponent } from './components/add-sprint/add-sprint.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: 'liste-user', component: ListeUserComponent },
  { path: 'view-user', component: ViewUserComponent },
  { path: 'view-sprint', component: ViewSprintComponent },
  { path: 'add-sprint', component: AddSprintComponent },
  { path: 'view-agenda', component: ViewsAgendaComponent },
  { path: 'teams', component: TeamsComponent },
  { path: '', redirectTo: 'add-sprint', pathMatch: 'full' },
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class UserManagementRoutingModule { }