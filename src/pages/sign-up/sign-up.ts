import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../assets/utils/User';
import { SignUpProvider } from '../../providers/sign-up/sign-up';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from '../../assets/utils/password.validator';

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
  validations_form: FormGroup;


  user = {} as User;

  validation_messages = {
    'name': [
      { type: 'required', message: 'Votre nom est obligatoire.' }
    ],
    'lastName': [
      { type: 'required', message: 'Votre prénom est obligatoire.' }
    ],
    'email': [
      { type: 'required', message: 'Votre email est obligatoire.' },
      { type: 'pattern', message: 'Enterez un email valide, Merci!' }
    ],
    'password': [
      { type: 'required', message: 'Votre prénom est obligatoire.' },
      { type: 'minlength', message: 'Le mot de passe doit comporter au moins 5 caractères.' },
      { type: 'pattern', message: 'Votre mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirmer le mot de passe est requis' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Les mots de passes sont déffirents attention!' }
    ],
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, private signUpProvider: SignUpProvider, public formBuilder: FormBuilder) {

    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@etu.univ-paris1.fr+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.required)
      
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  doRegister(user: User) {    
      this.signUpProvider.oAuthLogin(user).then(
        success => {
          this.toastCtrl.create({
            message: 'Ce compte existe déjà',
            duration: 10000
          }).present();
        },
        err => {
          this.doRegisterAux(user);
        }
      );    
  }

  doRegisterAux(user) {
    try {
      const result = this.signUpProvider.register(user);      
      this.toastCtrl.create({
        message: 'Votre compte a été créé',
        duration: 10000
      }).present();
      this.navCtrl.setRoot(HomePage);
      console.log(result);
    }
    catch (e) {      
      this.navCtrl.setRoot(SignUpPage);
    }
  }


}  