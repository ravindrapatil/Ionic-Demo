import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Weather } from './weather';

@NgModule({
  declarations: [
    Weather,
  ],
  imports: [
    IonicPageModule.forChild(Weather),
  ],
})
export class WeatherModule {}
