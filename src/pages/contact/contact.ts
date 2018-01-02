import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  imagesList: any;
  datas = [];
  url ="https://raw.githubusercontent.com/Ecodev/natural-gallery-js/master/demo/data.json";
  galleryType = "regular";
  
  constructor(public navCtrl: NavController, public http: HttpClient, 
    public loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({
      content: ""
    });  
    loader.present();

    setTimeout(() => {
      this.http.get(this.url).subscribe(res => {
        loader.dismiss();
        this.imagesList = res;
        for(let i=0; i<this.imagesList.length; i++) {
          this.datas.push(this.imagesList[i].thumbnail);
        }
      })
    }, 500);
    
  }

  // public loadingPopup() {
  //   let loading = this.loadingCtrl.create({
  //     content: 'Please wait....',
  //     duration: 3000
  //   });
  //   loading.present();
  // }

}
