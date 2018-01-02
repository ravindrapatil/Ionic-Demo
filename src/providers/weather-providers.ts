import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProviders {

  apikey = '230f87b983aea7f6';
  url: string;

  constructor(public http: HttpClient) {
    this.url = 'http://api.wunderground.com/api/'+this.apikey+'/conditions/q';
  }

  getWeather(city, state) {
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
      .map(res => res);
  }
  
}
