import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestsRoutes } from './tests.routing';
import { TestInstructionsComponent, TestRoomComponent, TestResultsComponent } from './components';



@NgModule({
  declarations: [
    TestInstructionsComponent,
    TestRoomComponent,
    TestResultsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TestsRoutes)
  ]
})
export class TestsModule { }
