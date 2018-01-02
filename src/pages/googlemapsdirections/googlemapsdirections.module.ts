import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Googlemapsdirections } from './googlemapsdirections';

@NgModule({
  declarations: [
    Googlemapsdirections,
  ],
  imports: [
    IonicPageModule.forChild(Googlemapsdirections),
  ],
})
export class GooglemapsdirectionsModule {}
