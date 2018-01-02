import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Register } from './register';

@NgModule({
  declarations: [
    Register,
  ],
  imports: [
    IonicPageModule.forChild(Register),
  ],
})
export class RegisterModule {}
