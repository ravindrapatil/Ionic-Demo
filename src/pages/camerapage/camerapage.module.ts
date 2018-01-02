import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Camerapage } from './camerapage';

@NgModule({
  declarations: [
    Camerapage,
  ],
  imports: [
    IonicPageModule.forChild(Camerapage),
  ],
})
export class CamerapageModule {}
