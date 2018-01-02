import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageGallery } from './image-gallery';

@NgModule({
  declarations: [
    ImageGallery,
  ],
  imports: [
    IonicPageModule.forChild(ImageGallery),
  ],
})
export class ImageGalleryModule {}
