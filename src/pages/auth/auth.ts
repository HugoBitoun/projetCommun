import { Component, NgZone } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {SignUpPage} from "../sign-up/sign-up";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
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

  validations_form: FormGroup;
  

  validation_messages = {
    'email': [
      { type: 'required', message: 'Votre email est obligatoire.' },
      { type: 'pattern', message: 'Entrez un email valide, Merci!' }
    ],
    'password': [
      { type: 'required', message: 'Votre mot de passe est obligatoire.' },
    ]    
  }



  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder : FormBuilder,
            public toastCtrl : ToastController, public aServ : AuthService, public ngZone : NgZone) {

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('(^[a-zA-Z0-9_.+-]+@etu.univ-paris1.fr+$)|(^[a-zA-Z0-9_.+-]+@univ-paris1.fr+$)|(^[a-zA-Z0-9_.+-]+@admin.fr+$)')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }

  doConnection(){
      let data = this.validations_form.value;
      if(!data.email){
          return;
      }
      let credentials = {
          email : data.email,
          password: data.password
      };
      this.aServ.oAuthLogin(credentials).then(
          success =>{
            
            this.ngZone.run(() => {
              this.navCtrl.setRoot(HomePage);                                                                                                          
            });
            this.toastCtrl.create({
              message: 'Bienvenue',
              duration: 2000
            }).present();          
          },
          err => {
                        
            this.toastCtrl.create({
              message: err.message,
              duration: 2000
            }).present();                                
          }
      );
  }

  signUp(){
    this.navCtrl.push(SignUpPage);
  }

}
