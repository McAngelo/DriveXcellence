import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { LessonsRoutes } from './lessons.routing';
import {
  StudyRoomComponent,
  ReviseComponent,
  CurriculumComponent,
  LibraryComponent
} from './components/';



@NgModule({
  declarations: [
    StudyRoomComponent,
    ReviseComponent,
    CurriculumComponent,
    LibraryComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forChild(LessonsRoutes)

  ]
})
export class LessonsModule { }
