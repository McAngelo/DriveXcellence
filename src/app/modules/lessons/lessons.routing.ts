import { Routes } from '@angular/router';

import {
  CurriculumComponent,
  ReviseComponent,
  StudyRoomComponent,
  LibraryComponent } from './components';

export const LessonsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'curriculum',
        pathMatch: 'full'
      },
      {
        path: 'curriculum',
        component: CurriculumComponent
      },
      {
        path: 'study-room',
        component: StudyRoomComponent
      },
      {
        path: 'revision',
        component: ReviseComponent
      },
      {
        path: 'library',
        component: LibraryComponent
      }
    ]
  }
];
