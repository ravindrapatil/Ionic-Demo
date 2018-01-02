import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-image-gallery',
  templateUrl: 'image-gallery.html',
})
export class ImageGallery {
  imageGallery: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: ""
    });  
    loader.present();
    console.log('ionViewDidLoad ImageGallery');
    this.http.get('https://gist.githubusercontent.com/jesussmile/81070220dd5ef3f21787/raw/1e466e70d4599487ad3adfab87df218d3d30c739/gallery.json')
      .subscribe(res => {
        this.imageGallery = res;
        loader.dismiss();
      })
  }

}
