import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeUserComponent } from './components/liste-user/liste-user.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { DialogAddUserComponent } from './components/dialog-add-user/dialog-add-user.component';
import { DialogEditUserComponent } from './components/dialog-edit-user/dialog-edit-user.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogViewUserComponent } from './components/dialog-view-user/dialog-view-user.component';
import { MatRadioModule} from '@angular/material/radio';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { ViewsAgendaComponent } from './components/views-agenda/views-agenda.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AddSprintComponent } from './components/add-sprint/add-sprint.component';
import { ViewSprintComponent } from './components/view-sprint/view-sprint.component'; 
import { FormRoutingModule } from '../form/form-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { AffectRoleComponent } from './components/affect-role/affect-role.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AffectTeamComponent } from './components/affect-team/affect-team.component';
import { CommentsComponent } from './components/comments/comments.component';



@NgModule({
  declarations: [
    ListeUserComponent,
    DialogAddUserComponent,
    DialogEditUserComponent,
    DialogViewUserComponent,
    ViewUserComponent,
    ViewsAgendaComponent,
    AddSprintComponent,
    ViewSprintComponent,
    AffectRoleComponent,
    TeamsComponent,
    AddTeamComponent,
    AffectTeamComponent,
    CommentsComponent,  
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule, 
    MatMenuModule,
    MatPaginatorModule,
    MatDialogModule,
    AngularSplitModule,
    FullCalendarModule,
    FormRoutingModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ]
  
})
export class UserManagementModule { }
