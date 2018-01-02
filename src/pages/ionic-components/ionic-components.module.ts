import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicComponents } from './ionic-components';

@NgModule({
  declarations: [
    IonicComponents,
  ],
  imports: [
    IonicPageModule.forChild(IonicComponents),
  ],
})
export class IonicComponentsModule {}
