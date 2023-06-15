import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
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
    DemoMaterialModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forChild(TestsRoutes)
  ]
})
export class TestsModule { }
