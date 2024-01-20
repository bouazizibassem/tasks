import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthRoutingModule } from './auth-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ChooseDomaineComponent } from './components/choose-domaine/choose-domaine.component';
import {MatButtonModule} from '@angular/material/button';
import { SelectAccountComponent } from './components/select-account/select-account.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CreatAccountComponent } from './components/creat-account/creat-account.component';
import { LoginGoogleComponent } from './components/login-google/login-google.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    ChangePasswordComponent,
    ChooseDomaineComponent,
    SelectAccountComponent,
    CreatAccountComponent,
    LoginGoogleComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    MatButtonModule,
    Ng2SearchPipeModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
    FormsModule,
  ]
})
export class AuthModule { }
