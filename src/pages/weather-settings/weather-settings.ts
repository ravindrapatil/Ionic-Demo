import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Weather } from '../weather/weather';

@Component({
  selector: 'page-weather-settings',
  templateUrl: 'weather-settings.html',
})
export class WeatherSettings {
  city: any;
  state: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get('location').then((val) => {
      if(val != null) {
        let location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;
      } else {
        this.city = 'Miami';
        this.state = 'FL';
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherSettings');
  }

  saveForm() {
    let location = {
      city: this.city,
      state: this.state
    }
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(Weather);
  }

}
