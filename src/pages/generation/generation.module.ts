import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenerationPage } from './generation';

@NgModule({
  declarations: [
    GenerationPage,
  ],
  imports: [
    IonicPageModule.forChild(GenerationPage),
  ],
})
export class GenerationPageModule {}
