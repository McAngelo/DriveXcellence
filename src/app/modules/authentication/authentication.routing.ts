import { Routes } from '@angular/router';

import {
  LoginComponent,
  RegisterComponent,
  ForgottenPasswordComponent,
  VerifyAccountComponent,
  ResetPasswordComponent
} from './components';

export const AuthenticationRoutes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'prefix'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'forgotten-password',
        component: ForgottenPasswordComponent
      },
      {
        path: 'verify-account',
        component: VerifyAccountComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      }
    ]
  }
];
