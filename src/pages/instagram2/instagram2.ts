import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

// import * as firebase from 'firebase';

@Component({
  selector: 'page-instagram2',
  templateUrl: 'instagram2.html',
})
export class Instagram2 {

  photos: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public cameraCtrl: Camera, public af: AngularFireDatabase, public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: ""
    });
    loader.present();
    console.log('ionViewDidLoad Instagram2');
    this.photos = this.af.list('/photos');
    if(this.photos) {
      loader.dismiss();
    }
    console.log(this.photos);
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      sourceType: this.cameraCtrl.PictureSourceType.CAMERA,
      destinationType: this.cameraCtrl.DestinationType.DATA_URL,
      encodingType: this.cameraCtrl.EncodingType.JPEG,
      mediaType: this.cameraCtrl.MediaType.PICTURE,
      targetWidth: 600,
      targetHeight: 600,
      correctOrientation: true
    };
    this.cameraCtrl.getPicture(options)
      .then(imageData => {
        this.photos.push({ src: "data:image/jpeg;base64," + imageData, likes: 0 });
      }, (error) => {
        console.log(error);
      })
  }

  deletePhoto(photokey: string) {
    this.photos.remove(photokey);
  }

  likePhoto(photokey: string, likes: number) {
    this.photos.update(photokey, { likes: likes + 1 });
  }

}
