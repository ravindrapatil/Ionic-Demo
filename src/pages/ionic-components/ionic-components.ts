import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-ionic-components',
  templateUrl: 'ionic-components.html',
})
export class IonicComponents {
  myDate: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController,
    private callNumberCtrl: CallNumber, private smsCtrl: SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IonicComponents');
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'My action sheet',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Clicked Destructive');
          }
        }, {
          text: 'Archive',
          role: 'archive',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  public getNewDate() {
    let alert = this.alertCtrl.create({
      title: 'Selected Date',
      subTitle: `Selected date time is: ${this.myDate}`,
      buttons: ['OK']
    });
    alert.present();
  }

  public facebookClick() {
    window.open('https://www.facebook.com');
  }

  public loadingPopup() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait....',
      duration: 3000
    });
    loading.present();
  }

  public makeAcall() {
    this.callNumberCtrl.callNumber("7022640287", true)
      .then(() => {
        console.log('Launched dialer!');
      })
      .catch(() => {
        console.log('Error launching dialer');
      })
  }

  public makeAsms() {
    this.smsCtrl.send("7022640287", "Hello, I want to speak with Smriti")
      .then(() => {
        console.log('Launched SMS!');
      })
      .catch(() => {
        console.log('Error launching SMS');
      })
  }

}
