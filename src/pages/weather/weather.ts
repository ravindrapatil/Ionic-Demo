import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { WeatherProviders } from '../../providers/weather-providers';
import { Storage } from '@ionic/storage';
import { WeatherSettings } from '../weather-settings/weather-settings';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class Weather {

  weather: any;
  location: {
    city: string,
    state: string
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public weatherServ: WeatherProviders, public storage: Storage,
    public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Weather');
  }

  ionViewWillEnter() {
    let loader = this.loadingCtrl.create({
      content: ""
    });  
    loader.present();
    this.storage.get('location').then((val) => {
      if(val != null) {
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'Bangalore',
          state: 'India'
        }
      }

      this.weatherServ.getWeather(this.location.city, this.location.state).subscribe(weatherData => {
        this.weather = weatherData['current_observation'];
        loader.dismiss();
      });
    });
  }

  gotoSettings() {
    this.navCtrl.push(WeatherSettings);
  }

}
