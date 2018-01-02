import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule, Jsonp } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
// import firebase from 'firebase';
import * as firebase from 'firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabaseModule } from "angularfire2/database-deprecated"
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import {FCM, NotificationData} from "@ionic-native/fcm";
// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   GoogleMapOptions,
//   CameraPosition,
//   MarkerOptions,
//   Marker
//  } from '@ionic-native/google-maps';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Login } from '../pages/login/login';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { Register } from '../pages/register/register';
import { UserData } from '../providers/user-data';
import { ListComponent } from '../pages/list-component/list-component';
import { Restcountries } from '../providers/restcountries';
import { IonicComponents } from '../pages/ionic-components/ionic-components';
import { Googlemapsdirections } from '../pages/googlemapsdirections/googlemapsdirections';
import { Camerapage } from '../pages/camerapage/camerapage';
import { SpeakersList } from '../pages/speakers-list/speakers-list';
import { Speakerdetails } from '../pages/speakerdetails/speakerdetails';
import { SortPipe } from '../pipes/sort-pipe';
import { Reorderpage } from '../pages/reorderpage/reorderpage';
import { ImageGallery } from '../pages/image-gallery/image-gallery';
import { Callandsms } from '../pages/callandsms/callandsms';
import { Instagram } from '../pages/instagram/instagram';
import { ImageProvider } from '../providers/image-provider';
import { Instagram2 } from '../pages/instagram2/instagram2';
import { Weather } from '../pages/weather/weather';
import { WeatherProviders } from '../providers/weather-providers';
import { WeatherSettings } from '../pages/weather-settings/weather-settings';
import { Sharing } from '../pages/sharing/sharing';
import { FcmPage } from '../pages/fcm-page/fcm-page';
import { NativegoogleMap } from '../pages/nativegoogle-map/nativegoogle-map';
import { Fmr } from '../pages/fmr/fmr';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    Register,
    ListComponent,
    IonicComponents,
    Googlemapsdirections,
    Camerapage,
    SpeakersList,
    Speakerdetails,
    SortPipe,
    Reorderpage,
    ImageGallery,
    Callandsms,
    Instagram,
    Instagram2,
    Weather,
    WeatherSettings,
    Sharing,
    FcmPage,
    NativegoogleMap,
    Fmr
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    HttpModule,
    IonicImageViewerModule,
    AngularFireDatabaseModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    Register,
    ListComponent,
    IonicComponents,
    Googlemapsdirections,
    Camerapage,
    SpeakersList,
    Speakerdetails,
    Reorderpage,
    ImageGallery,
    Callandsms,
    Instagram,
    Instagram2,
    Weather,
    WeatherSettings,
    Sharing,
    FcmPage,
    NativegoogleMap,
    Fmr
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserData,
    Restcountries,
    Camera,
    CallNumber,
    SMS,
    ImageProvider,
    WeatherProviders,
    SocialSharing,
    FCM
    // GoogleMaps
  ]
})
export class AppModule {}
