import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../assets/utils/User';
import { SignUpProvider } from '../../providers/sign-up/sign-up';





/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({

  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  
  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private signUpProvider : SignUpProvider) {

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

 async doRegister(user: User){

    try{
      const result = this.signUpProvider.register(user);

      this.navCtrl.setRoot(HomePage);
      console.log(result);
    }
    catch(e){
      console.error(e);
    }

  }

}  
