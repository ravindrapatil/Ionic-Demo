import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// $IMPORTSTATEMENT

/**
 * Generated class for the Speakerdetails page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-speakerdetails',
  templateUrl: 'speakerdetails.html',
})
export class Speakerdetails {
  speaker: any;
  speakerInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.speakerInfo = this.navParams.get('speakerData')
    this.speaker = this.speakerInfo;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Speakerdetails');
  }

}
