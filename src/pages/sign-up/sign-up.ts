import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../assets/utils/User';
import { SignUpProvider } from '../../providers/sign-up/sign-up';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';


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
      { type: 'required', message: 'Votre prénom est obligatoire.' },
      { type: 'minlength', message: 'Votre prénom doit comporter au moins 2 caractères.' },
      { type: 'pattern', message: 'Votre prénom doit contenir que des lettres!' }
    ],
    'lastName': [
      { type: 'required', message: 'Votre nom est obligatoire.' },
      { type: 'minlength', message: 'Votre nom doit comporter au moins 2 caractères.' },
      { type: 'pattern', message: 'Votre nom doit contenir que des lettres!' }
    ],
    'email': [
      { type: 'required', message: 'Votre email est obligatoire.' },
      { type: 'pattern', message: 'Enterez un email valide, Merci!' }
    ],
    'password': [
      { type: 'required', message: 'Votre mot de passe est obligatoire.' },
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
    public toastCtrl: ToastController, private signUpProvider: SignUpProvider, public formBuilder: FormBuilder, public afa: AngularFireAuth) {

    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('([a-zA-Z]+$)')])),
      lastName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('([a-zA-Z]+$)')])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('(^[a-zA-Z0-9_.+-]+@etu.univ-paris1.fr+$)|(^[a-zA-Z0-9_.+-]+@univ-paris1.fr+$)')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      confirm_password: new FormControl('', Validators.compose([Validators.required]))

    }, {
        validator: this.matchingPasswords('password', 'confirm_password')
      });

  }
  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {

    return (group: FormGroup): { [key: string]: any } => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: false
        };
      }
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  doRegister(user: User) {
    if (this.validations_form.valid) {
        this.signUpProvider.register(user).then(value => {
          this.toastCtrl.create({
            message: 'Votre compte a été crée avec succès',
            duration: 6000
          }).present();          
          this.navCtrl.setRoot(HomePage);                
        })
        .catch(err => {
          this.toastCtrl.create({
            message: err.message,
            duration: 6000
          }).present();            
        });
    }    
  }
}  