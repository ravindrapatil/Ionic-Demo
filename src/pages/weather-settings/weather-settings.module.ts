import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeatherSettings } from './weather-settings';

@NgModule({
  declarations: [
    WeatherSettings,
  ],
  imports: [
    IonicPageModule.forChild(WeatherSettings),
  ],
})
export class WeatherSettingsModule {}
