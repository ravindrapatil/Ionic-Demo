import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Speakerdetails } from './speakerdetails';

@NgModule({
  declarations: [
    Speakerdetails,
  ],
  imports: [
    IonicPageModule.forChild(Speakerdetails),
  ],
})
export class SpeakerdetailsModule {}
