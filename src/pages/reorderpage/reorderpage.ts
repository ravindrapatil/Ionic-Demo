import { Component } from '@angular/core';
import { NavController, NavParams, reorderArray, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Speakerdetails } from '../speakerdetails/speakerdetails';

@Component({
  selector: 'page-reorderpage',
  templateUrl: 'reorderpage.html',
})
export class Reorderpage {
  userList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: ""
    });
    loader.present();
    this.http.get('https://raw.githubusercontent.com/planetoftheweb/barcamp/master/_/data/speakers.json')
    .subscribe(res => {
      this.userList = res['speakers'];
      loader.dismiss();
    }, (err) => {
      console.log("Error " + err);
      loader.dismiss();
    });
  }

  reorderItems(Indexes) {
    this.userList = reorderArray(this.userList, Indexes);
  }

  viewMore(user) {
    this.navCtrl.push(Speakerdetails, {
      speakerData: user
    });
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.http.get('https://raw.githubusercontent.com/planetoftheweb/barcamp/master/_/data/speakers.json')
      .subscribe(res => {
        this.userList = res['speakers'];
      });
      infiniteScroll.complete();
    }, 500)
  }

}
