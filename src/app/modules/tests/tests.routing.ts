import { Routes } from '@angular/router';


import { TestInstructionsComponent, TestRoomComponent, TestResultsComponent } from './components';

export const TestsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'test-instructions',
        pathMatch: 'full'
      },
      {
        path: 'test-instructions',
        component: TestInstructionsComponent
      },
      {
        path: 'test-room',
        component: TestRoomComponent
      },
      {
        path: 'test-results',
        component: TestResultsComponent
      }
    ]
  }
];
