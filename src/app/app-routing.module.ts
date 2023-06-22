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
      },
      {
        path: 'courses',
        loadChildren: () => import('./modules').then(m => m.CoursesModule)
      },
      {
        path: 'schools',
        loadChildren: () => import('./modules').then(m => m.SchoolsModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./modules').then(m => m.SettingsModule)
      },
      {
        path: 'fleet',
        loadChildren: () => import('./modules').then(m => m.FleetModule)
      },
      {
        path: 'branches',
        loadChildren: () => import('./modules').then(m => m.BranchesModule)
      },
      {
        path: 'invoices',
        loadChildren: () => import('./modules').then(m => m.InvoicesModule)
      },
      {
        path: 'communications',
        loadChildren: () => import('./modules').then(m => m.CommunicationsModule)
      },
      {
        path: 'employees',
        loadChildren: () => import('./modules').then(m => m.EmployeesModule)
      },
      {
        path: 'financials',
        loadChildren: () => import('./modules').then(m => m.FinancialsModule)
      },
      {
        path: 'scheduling',
        loadChildren: () => import('./modules').then(m => m.SchedulingModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./modules').then(m => m.NotificationsModule)
      },
      {
        path: 'students',
        loadChildren: () => import('./modules').then(m => m.StudentsModule)
      },
      {
        path: 'instructors',
        loadChildren: () => import('./modules').then(m => m.InstructorsModule)
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
