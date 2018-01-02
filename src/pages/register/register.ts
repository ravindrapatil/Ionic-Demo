import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/users';
import { Login } from '../login/login';
// $IMPORTSTATEMENT

/**
 * Generated class for the Register page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  errMsg: any;
  newUser: any;
  userInfo2: any;
  userInfo: any;
  user = {} as User;
  register: FormGroup;
  registred: boolean = false;
  regFailedMsg: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder,
    public afAuth: AngularFireAuth, private toast: ToastController) {
    this.register = this.fb.group({
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
    console.log('ionViewDidLoad Register');
  }

  async registration() {
    try {
      console.log(this.register.value);
      this.newUser = this.register.value;
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.newUser.email, this.newUser.password);
      console.log(result);
      if(result){
        this.registred = true;
        this.toast.create({
          message : `Successfully created the new account`,
          duration: 3000
        }).present();
      } else {
        this.registred = false;
      }
    }
    catch(err) {
      console.log(err.code);
      if(err.code === "auth/email-already-in-use") {
        this.regFailedMsg = true;
        this.errMsg = err.message;
      }
    }
  }

  moveToLogin() {
    this.navCtrl.push(Login);
  }

}
