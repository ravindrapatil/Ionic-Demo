import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-fmr',
  templateUrl: 'fmr.html',
})
export class Fmr {
  maxSubs: any;
  sum: any;
  originalData: any = [];
  modifiedData: any = [];
  resultHolder: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.originalData = [
      { name: 'Joshnu', subscribers: 1700, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com' },
      { name: 'Phillip', subscribers: 4989876, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com' },
      { name: 'Casey', subscribers: 5367678, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com' },
      { name: 'Hutch', subscribers: 9786532, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com' },
      { name: 'Ionic', subscribers: 17890, avatar: 'http://placehold.it/100', channel_url: 'https://www.youtube.com' }
    ]
    // JSON parse and stringify are used so that a new array is created,
    // rather than a reference to the original array
    this.modifiedData = JSON.parse(JSON.stringify(this.originalData));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Fmr');
  }

  resetData() {
    this.modifiedData = JSON.parse(JSON.stringify(this.originalData));
    this.reduceData();
    this.resultHolder = false;
  }

  filterData() {
    this.modifiedData = this.modifiedData.filter(item => {
      return item.subscribers > 1000000;
    });
    this.reduceData();
    this.resultHolder = true;
  }

  mapData() {
    this.modifiedData = this.modifiedData.map(item => {
      item.name = item.name.toUpperCase();
      item.subscribers = item.subscribers * 10;
      return item;
    });
    this.reduceData();
    this.resultHolder = true;
  }

  reduceData() {
    let sum = this.modifiedData.reduce((previous, current) => {
      let prevResult = Number.isInteger(previous) ? previous : previous.subscribers;
      return prevResult + current.subscribers;
    });
    this.sum = sum;

    let max = this.modifiedData.reduce((previous, current) => {
      let prevResult = Number.isInteger(previous) ? previous : previous.subscribers;
      let max = Math.max(prevResult, current.subscribers);
      return max;
    })
    this.maxSubs = max;
    this.resultHolder = true;
  }

}
