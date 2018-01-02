import { Component } from '@angular/core';
import { NavController, NavParams, reorderArray, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-callandsms',
  templateUrl: 'callandsms.html',
})
export class Callandsms {
  speakers: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, 
    private callCtrl: CallNumber, private smsCtrl: SMS, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: ""
    });  
    loader.present();
    this.http.get('https://raw.githubusercontent.com/planetoftheweb/barcamp/master/_/data/speakers.json')
    .subscribe(res => {
      this.speakers = res['speakers'];
      loader.dismiss();
    });
  }

  reorderItems(Indexes) {
    this.speakers = reorderArray(this.speakers, Indexes);
  }

  makeAsms() {
    this.smsCtrl.send('9008093481', 'Hello, I want to speak with Smriti')
      .then(() => console.log('SMS successfully sent'))
      .catch(() => console.log('Error occurred'));
  }

  makeAcall() {
    this.callCtrl.callNumber('9008093481', true)
    .then(() => {
      console.log('Launched dialer!');
    })
    .catch(() => {
      console.log('Error launching dialer');
    })
  }

}
