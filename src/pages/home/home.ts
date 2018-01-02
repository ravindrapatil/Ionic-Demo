import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
// import { Login } from '../login/login';
import { UserData } from '../../providers/user-data';
import { IonicComponents } from '../ionic-components/ionic-components';
import { Googlemapsdirections } from '../googlemapsdirections/googlemapsdirections';
import { Camerapage } from '../camerapage/camerapage';
import { SpeakersList } from '../speakers-list/speakers-list';
import { Reorderpage } from '../reorderpage/reorderpage';
import { ImageGallery } from '../image-gallery/image-gallery';
import { Callandsms } from '../callandsms/callandsms';
import { Instagram } from '../instagram/instagram';
import { Instagram2 } from '../instagram2/instagram2';
import { Weather } from '../weather/weather';
import { Sharing } from '../sharing/sharing';
import { FcmPage } from '../fcm-page/fcm-page';
import { FCM } from '@ionic-native/fcm';
import { NativegoogleMap } from '../nativegoogle-map/nativegoogle-map';
import { Fmr } from '../fmr/fmr';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, 
    public userData: UserData, private platform: Platform, public fcm: FCM) {
      // private toast: ToastController, 
  }

  ngAfterViewInit() {
    this.getusername();
  }

  ionViewWillLoad() {
    // this.firebaseMessage();
    // this.platformReady();
  }

  // firebaseMessage() {
  //   this.fcm.getToken ().then(token => {
  //     console.log(token);
  //   });
  // }

  // platformReady() {
  //   this.platform.ready().then(() => {
  //     this.fcm.onNotification().subscribe(data => {
  //       if(data.wasTapped) {
  //         console.log('Received in background');
  //         alert('Received in background - Ravindra from home');
  //       } else {
  //         console.log('Received in foreground');
  //         alert('Received in foreground - Ravindra from home');
  //       }
  //     })
  //   })
  // }

  getusername() {
    this.userData.getUsername().then(username => {
      this.username = username;
    })
  }

  gotoComponents() {
    this.navCtrl.push(IonicComponents);
  }

  gotoGoogleMaps() {
    this.navCtrl.push(Googlemapsdirections);
  }

  gotoCameraPage() {
    this.navCtrl.push(Camerapage);
  }

  gotospeakersPage() {
    this.navCtrl.push(SpeakersList);
  }

  gotoreorderPage() {
    this.navCtrl.push(Reorderpage);
  }

  gotoGallery() {
    this.navCtrl.push(ImageGallery);
  }
  
  gotoCallAndSms() {
    this.navCtrl.push(Callandsms);
  }
  
  gotoInstagram() {
    this.navCtrl.push(Instagram);
  }

  gotoInstagramNew() {
    this.navCtrl.push(Instagram2);
  }
  
  gotoWeatherApp() {
    this.navCtrl.push(Weather);
  }

  gotoSocialSharing() {
    this.navCtrl.push(Sharing);
  }

  gotopushNotificon() {
    this.navCtrl.push(FcmPage);
  }

  gotoFMR() {
    this.navCtrl.push(Fmr);
  }
  
  // ionViewWillLoad() {
  //   this.afAuth.authState.subscribe(data => {
  //     if(data && data.email && data.uid) {
  //       this.toast.create({
  //         message : `Welcome to MyApp, ${data.email}`,
  //         duration: 3000
  //       }).present();
  //     } else {
  //       this.navCtrl.push(Login);
  //       this.toast.create({
  //         message : `Could not find authentication details`,
  //         duration: 3000
  //       }).present();
  //     }
      
  //   })
  // }

}
