import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FcmPage } from './fcm-page';

@NgModule({
  declarations: [
    FcmPage,
  ],
  imports: [
    IonicPageModule.forChild(FcmPage),
  ],
})
export class FcmPageModule {}
