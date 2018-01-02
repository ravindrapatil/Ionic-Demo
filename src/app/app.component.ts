import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Login } from '../pages/login/login';
import { ContactPage } from '../pages/contact/contact';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ListComponent } from '../pages/list-component/list-component';
import { UserData } from '../providers/user-data';
import { Register } from '../pages/register/register';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  @ViewChild(Nav) nav: Nav;

  appPages: PageInterface[] = [
    
  ];

  loggedInPages: PageInterface[] = [
    { title: 'About', name: 'AboutPage', component: TabsPage, tabComponent: AboutPage, index: 1, icon: 'calendar' },
    { title: 'Contact', name: 'ContactPage', component: TabsPage, tabComponent: ContactPage, index: 2, icon: 'contacts' },
    { title: 'List', name: 'ListComponent', component: TabsPage, tabComponent: ListComponent, index: 3, icon: 'calendar' },
    { title: 'Logout', name: 'TabsPage', component: TabsPage, icon: 'log-out', logsOut: true }
  ];

  loggedOutPages: PageInterface[] = [
    { title: 'Login', name: 'Login', component: Login, icon: 'log-in' },
    { title: 'Register', name: 'Register', component: Register, icon: 'contacts' }
  ];

  constructor(public platform: Platform, statusBar: StatusBar, public splashScreen: SplashScreen, 
    public storage: Storage, public userData: UserData, public menu: MenuController,
    public events: Events) {
    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault();
    //   splashScreen.hide();

    //   // decide which menu items should be hidden by current login status stored in local storage
    //   this.userData.hasLoggedIn().then(hasloggedIn => {
    //     this.enableMenu(hasloggedIn === true);
    //   })
    //   this.enableMenu(true);
    //   this.listenToLoginEvents();
    // });

    this.storage.get('hasLoggedIn').then(hasLoggedIn => {
      if(hasLoggedIn) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = Login;
      }
      this.platformReady();
    });

    // decide which menu items should be hidden by current login status stored in local storage
    this.userData.hasLoggedIn().then((hasloggedIn) => {
      setTimeout(() => {
        this.enableMenu(hasloggedIn === true);
      }, 200);
    })
    this.enableMenu(true);
    this.listenToLoginEvents();
  };

  openPage(page: PageInterface) {
    // let params = {};

    if(page.index) {
      this.nav.setRoot(page.component, { tabIndex: page.index });
    } else {
      this.nav.setRoot(page.component).catch(() => {
        console.log("Didn't set nav root");
      });
    }

    // if (this.nav.getActiveChildNavs().length && page.index != undefined) {
    //   this.nav.getActiveChildNavs()[0].select(page.index);
    // } else {
    //   // Set the root of the nav with params if it's a tab index
    //   this.nav.setRoot(page.name, params).catch((err: any) => {
    //     console.log(`Didn't set nav root: ${err}`);
    //   });
    // }

    if(page.logsOut === true) {
      setTimeout(() => {
        this.userData.logout();
      }, 500);
      this.nav.setRoot(Login);
    }
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  };

  enableMenu(loggedIn: boolean) {
    setTimeout(() => {
      this.menu.enable(loggedIn, 'loggedInMenu');
      this.menu.enable(!loggedIn, 'loggedOutMenu');
    }, 200)
  };

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  };

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];
    if(childNav) {
      if(childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary'
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  };

  openTutorial() {
    this.nav.push(Register);
  };

}
