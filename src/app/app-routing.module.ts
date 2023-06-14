import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent, AuthLayoutComponent, ErrorLayoutComponent } from './layouts';

const routes: Routes = [
  { path: '', redirectTo: 'auth/', pathMatch: 'full' },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./modules/material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules').then(m => m.DashboardModule)
      },
      {
        path: 'lessons',
        loadChildren: () => import('./modules').then(m => m.LessonsModule)
      },
      {
        path: 'videos',
        loadChildren: () => import('./modules').then(m => m.VideosModule)
      },
      {
        path: 'tests',
        loadChildren: () => import('./modules').then(m => m.TestsModule)
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./modules').then(m => m.AuthenticationModule)
      },
    ]
  },
  {
    path: '',
    component: ErrorLayoutComponent,
    children: []
  },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //preloadingStrategy: ModulePreloaderService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
