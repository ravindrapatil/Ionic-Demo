import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sharing } from './sharing';

@NgModule({
  declarations: [
    Sharing,
  ],
  imports: [
    IonicPageModule.forChild(Sharing),
  ],
})
export class SharingModule {}
