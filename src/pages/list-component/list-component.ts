import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Restcountries } from '../../providers/restcountries';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-list-component',
  templateUrl: 'list-component.html',
})
export class ListComponent {
  countries: string[] = [];
  countries2: any;
  errorMessage: any;
  searchQuery: string = '';

  descending: boolean = false;
  order: number;
  column: string = 'name';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public countriesService: Restcountries, public storage: Storage,
    public loadingCtrl: LoadingController) {
    this.getCountries();
  }

  ionViewDidLoad() {
    // this.getCountries();
  }

  public getCountries() {
    let loader = this.loadingCtrl.create({
      content: ""
    });  
    loader.present();
    this.countriesService.getCountries().subscribe(res => {
      this.countries = res;
      loader.dismiss();
    }, error => {
      this.errorMessage = error;
      loader.dismiss();
    })
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.getCountries();
    // set val to the value of the searchbar
    // var val = ev.target.value;
    // if the value is an empty string don't filter the items
    // if(val && val.trim() != '') {
    //   this.countries = this.countries.filter((item) => {
    //     return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   });
    // }

    this.countriesService.getCountries().subscribe(res => {
      if (res) {
        let val = ev.target.value;
        if (val && val.trim() != '') {
          this.countries = this.countries.filter((item, index) => {
            return (item['name'].toLowerCase().indexOf(val.toLowerCase()) > -1);
          });
        }
      }
    });
  }

  sort() {
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}
