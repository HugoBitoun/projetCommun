import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../../assets/utils/User';
import { ParameterCountProvider } from '../../providers/parameter-count/parameter-count';

/**
 * Generated class for the ParameterCountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parameter-count',
  templateUrl: 'parameter-count.html',
})
export class ParameterCountPage {
  
  validations_form: FormGroup;
  user = {} as User;  
  name: String;
  lastName: String;
  email: String;

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
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, private parameterCountProvider: ParameterCountProvider,
     public formBuilder: FormBuilder) {

    this.parameterCountProvider.getUser().subscribe( data => {
      this.name = data.name;   
      this.lastName = data.lastName;
      this.email = data.email;
    });
  
    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('([a-zA-Z]+$)')])),
      lastName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('([a-zA-Z]+$)')]))
      });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParameterCountPage');
  }

  modify(user: User) {
     
    if (this.validations_form.valid) {
        this.parameterCountProvider.modify(user).then(value => {                          
          this.toastCtrl.create({
            message: 'Votre nom et prénom ont été bien modfiés',
            duration: 2000
          }).present();                    
        })
        .catch(err => {
          this.toastCtrl.create({
            message: err.message,
            duration: 2000
          }).present();            
        });
    }    
  }



}
