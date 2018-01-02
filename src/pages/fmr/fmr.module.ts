import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Fmr } from './fmr';

@NgModule({
  declarations: [
    Fmr,
  ],
  imports: [
    IonicPageModule.forChild(Fmr),
  ],
})
export class FmrModule {}
