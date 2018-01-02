import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeakersList } from './speakers-list';

@NgModule({
  declarations: [
    SpeakersList,
  ],
  imports: [
    IonicPageModule.forChild(SpeakersList),
  ],
})
export class SpeakersListModule {}
