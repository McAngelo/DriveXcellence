import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
    RouterModule.forChild(LessonsRoutes)

  ]
})
export class LessonsModule { }
