import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutes } from './authentication.routing';

import {
  LoginComponent,
  RegisterComponent,
  ForgottenPasswordComponent,
  VerifyAccountComponent,
  ResetPasswordComponent
} from './components';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgottenPasswordComponent,
    VerifyAccountComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forChild(AuthenticationRoutes)
  ]
})
export class AuthenticationModule { }
