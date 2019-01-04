import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LecturePage } from './lecture';

@NgModule({
  declarations: [
    LecturePage,
  ],
  imports: [
    IonicPageModule.forChild(LecturePage),
  ],
})
export class LecturePageModule {}
