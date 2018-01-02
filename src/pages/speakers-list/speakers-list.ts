import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Speakerdetails } from '../speakerdetails/speakerdetails';

@Component({
  selector: 'page-speakers-list',
  templateUrl: 'speakers-list.html',
})
export class SpeakersList {
  speakersList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: ""
    });
    loader.present();
    console.log('ionViewDidLoad SpeakersList');
    this.http.get('https://raw.githubusercontent.com/planetoftheweb/barcamp/master/_/data/speakers.json')
    .subscribe(res => {
      this.speakersList = res['speakers'];
      loader.dismiss();
    }, (err) => {
      loader.dismiss();
      console.log('Error' + err);
    });
  }

  public gotoSpeakersDetails(speaker) {
    this.navCtrl.push(Speakerdetails, {
      speakerData: speaker
    })
  }

}
