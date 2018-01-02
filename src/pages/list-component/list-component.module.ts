import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListComponent } from './list-component';

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    IonicPageModule.forChild(ListComponent),
  ],
})
export class ListComponentModule {}
