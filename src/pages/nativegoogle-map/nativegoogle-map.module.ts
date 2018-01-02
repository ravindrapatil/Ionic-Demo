import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativegoogleMap } from './nativegoogle-map';

@NgModule({
  declarations: [
    NativegoogleMap,
  ],
  imports: [
    IonicPageModule.forChild(NativegoogleMap),
  ],
})
export class NativegoogleMapModule {}
