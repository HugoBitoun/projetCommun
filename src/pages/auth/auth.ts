import { Component } from '@angular/core';
import {IonicPage, List, NavController, NavParams} from 'ionic-angular';
import {SignUpPage} from "../sign-up/sign-up";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../providers/auth/authService";
import {HomePage} from "../home/home";


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
        AuthService
    ]
})
export class AuthPage {

 loginForm : FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, public fb : FormBuilder, public aServ : AuthService) {

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

      this.aServ.oAuthLogin(credentials).then(
          success =>{
              this.navCtrl.setRoot(HomePage);
          },
          err => {
              console.log("ne marche pas");
          }
      );


  }

  signUp(){
    this.navCtrl.push(SignUpPage);
  }

}
