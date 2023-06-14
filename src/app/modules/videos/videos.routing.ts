import { Routes } from '@angular/router';


import { VideoListComponent, PlayComponent, WatchedComponent } from './components';

export const VideosRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'video-list',
        pathMatch: 'full'
      },
      {
        path: 'video-list',
        component: VideoListComponent
      },
      {
        path: 'play',
        component: PlayComponent
      },
      {
        path: 'watched',
        component: WatchedComponent
      }
    ]
  }
];
