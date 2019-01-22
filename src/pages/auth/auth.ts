import { Component } from '@angular/core';
import {IonicPage, List, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {SignInPage} from "../sign-in/sign-in";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthProvider} from "../../providers/auth/auth";


/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
    providers : [
        AuthProvider
    ]
})
export class AuthPage {

 loginForm : FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, public fb : FormBuilder, public authProvider : AuthProvider) {

    this.loginForm = this.fb.group({
        email: ['', Validators.compose([Validators.required,Validators.email])],
        password: ['',Validators.compose([Validators.required])]
    })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');

  }

  doConnection(){

      let data = this.loginForm.value;

      if(!data.email){
          return;
      }

      let credentials = {
          email : data.email,
          password: data.password
      };


      if ( this.authProvider.doRegister(credentials)){
          this.navCtrl.setRoot(HomePage);
      } else {

      }
  }

  signIn(){
    this.navCtrl.push(SignInPage);
  }

}
