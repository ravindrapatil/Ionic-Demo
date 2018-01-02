import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   GoogleMapOptions,
//   CameraPosition,
//   MarkerOptions,
//   Marker
//  } from '@ionic-native/google-maps';

@Component({
  selector: 'page-nativegoogle-map',
  templateUrl: 'nativegoogle-map.html',
})
export class NativegoogleMap {
  // map: GoogleMap;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    ) {
      // private googleMaps: GoogleMaps
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NativegoogleMap');
    // this.loadMap();
  }

  // loadMap() {
  //   let mapOptions: GoogleMapOptions = {
  //     camera: {
  //       target: {
  //         let: 43.0741904,
  //         log: -89.3809802
  //       },
  //       zoom: 18,
  //       tilt: 30
  //     }
  //   };

  //   this.map = this.googleMaps.create('map_canvas', mapOptions);

  // }

}
