import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-sharing',
  templateUrl: 'sharing.html',
})
export class Sharing {
  movies: any = [];
  url: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private sharingCtrl: SocialSharing, private http: HttpClient, public loadingCtrl: LoadingController) {
      this.url = 'https://gist.githubusercontent.com/yannski/3019778/raw/dfb34d018165f47b61b3bf089358a3d5ca199d96/movies.json';
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: ""
    });  
    loader.present();
    this.http.get(this.url).subscribe(res => {
      this.movies = res;
      loader.dismiss();
    });
  }

  whatsappShare(whatsappMsg) {
    this.sharingCtrl.shareViaWhatsApp(whatsappMsg.description, whatsappMsg.cover_url, null)
      .then(() => {
        console.log('Message sent!');
      })
      .catch((error) => {
        console.log('Failed messaging to Whatsapp' + error);
      })
  }

  facebookShare(fbMsg) {
    this.sharingCtrl.shareViaFacebook(fbMsg.description, fbMsg.cover_url, null)
      .then(() => {
        console.log('Posted successfully!');
      })
      .catch((error) => {
        console.log('Failed posting to Facebook' + error);
      })
  }

}
