import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { VideosRoutes } from './videos.routing'
import { VideoListComponent, PlayComponent, WatchedComponent } from './components';



@NgModule({
  declarations: [
    VideoListComponent,
    PlayComponent,
    WatchedComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forChild(VideosRoutes)
  ]
})
export class VideosModule { }
