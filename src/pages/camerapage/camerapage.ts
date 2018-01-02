import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import { storage } from 'firebase'; AlertController, 
import firebase from 'firebase';

@Component({
  selector: 'page-camerapage',
  templateUrl: 'camerapage.html',
})
export class Camerapage {
  public photos: any;
  public base64Image: string;

  picdata: any;
  picurl: any;
  mypicref: any;
  picArray: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cameraCtrl: Camera, private toastCtrl: ToastController,
    public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
      this.mypicref = firebase.storage().ref('/');
  }

  ionViewDidLoad() {
    // this.photos = [];
  }

  ngOnInit() {
    this.photos = [];
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      sourceType: this.cameraCtrl.PictureSourceType.CAMERA,
      destinationType: this.cameraCtrl.DestinationType.DATA_URL,
      encodingType: this.cameraCtrl.EncodingType.JPEG,
      mediaType: this.cameraCtrl.MediaType.PICTURE,
      targetWidth: 600,
      targetHeight: 600
    };
    this.cameraCtrl.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(this.base64Image);
      this.photos.reverse();
    }, (err) => {
      console.log(err);
    });
  }

  uploadToFirebase() {
    const options: CameraOptions = {
      quality: 50,
      sourceType: this.cameraCtrl.PictureSourceType.CAMERA,
      destinationType: this.cameraCtrl.DestinationType.DATA_URL,
      encodingType: this.cameraCtrl.EncodingType.JPEG,
      mediaType: this.cameraCtrl.MediaType.PICTURE,
      targetWidth: 600,
      targetHeight: 600
    };
    // const result = this.cameraCtrl.getPicture(options);
    // const image = `data:images/jpeg;base64,${result}`;
    // const pictures = firebase.storage().ref('pictures');
    // pictures.putString(image, 'data_url');

    this.cameraCtrl.getPicture(options).then(imageData => {
      this.picdata = imageData;
      this.upload();
    })
  }

  upload() {
    let loader = this.loadingCtrl.create({
      content: ""
    });  
    loader.present();
    this.mypicref.child(this.uid()).child('pic.png')
    .putString(this.picdata, 'base64',{contentType:'image/png'})
    .then(savepic => {
      this.picurl = savepic.downloadURL;
      loader.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Successfully uploaded picture to Firebase Storeage',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    })
  }

  uid() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  deletePhoto(index) {
    // this.photos.splice(index, 1);
    let confirm = this.alertCtrl.create({
      title: 'Want to delete',
      message: 'Sure you want to delete this photo? There is NO undo!',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Agree Clicked');
            this.photos.splice(index, 1);
          }
        }
      ]
    });
    confirm.present();
  }

}
