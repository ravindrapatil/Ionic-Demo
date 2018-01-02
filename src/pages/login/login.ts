import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/users';
import { Register } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';

// $IMPORTSTATEMENT

/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  errMsg: any;
  userInfo: any;
  user = {} as User;
  login: FormGroup;
  loginFailedMsg = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder,
  public afAuth: AngularFireAuth, public userData: UserData, public loadingCtrl: LoadingController) {
    this.login = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ])]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  signIn() {
    let loader = this.loadingCtrl.create({
      content: ""
    });  
    loader.present();
    this.userInfo = this.login.value;
    this.afAuth.auth.signInWithEmailAndPassword(this.userInfo.email, this.userInfo.password)
      .then(firebaseUser => {
        this.userData.login(this.userInfo.email);
        loader.dismiss();
        this.navCtrl.setRoot(TabsPage);
      })
      .catch(err => {
        if(err.code == "auth/user-not-found" || err.code == "auth/wrong-password") {
          this.loginFailedMsg = true;
          this.errMsg = err.message;
          loader.dismiss();
        }
      })
  }

  register() {
    this.navCtrl.push(Register);
  }

}
