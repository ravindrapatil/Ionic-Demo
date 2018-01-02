import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { FCM } from "@ionic-native/fcm";

// declare var FCMPlugin: any;

@Component({
  selector: 'page-fcm-page',
  templateUrl: 'fcm-page.html',
})
export class FcmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private platform: Platform, private fcm: FCM, private alertCtrl: AlertController) {
      // this.fcm.subscribeToTopic('marketing');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FcmPage');
    this.firebaseMessage();
    this.platformReady();
  }

  firebaseMessage() {
    this.fcm.getToken().then(token => {
      console.log(token);
    });
  }

  platformReady() {
    this.platform.ready().then(() => {
      this.fcm.onNotification().subscribe(data => {
        if(data.wasTapped) {
          console.log('Received in background');
          this.alertCtrl.create({
            title: 'Push Notification',
            message: data.message,
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }, {
                text: 'See',
                handler: () => {
                  this.navCtrl.parent.select(1);
                }
              }
            ]
          }).present();
        } else {
          console.log('Received in foreground');
          this.alertCtrl.create({
            title: 'Push Notification',
            message: data.message,
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }, {
                text: 'See',
                handler: () => {
                  this.navCtrl.parent.select(1);
                }
              }
            ]
          }).present();
        }
      }, error => {
        console.log('Error ' + error);
      })
    });
  }

}
