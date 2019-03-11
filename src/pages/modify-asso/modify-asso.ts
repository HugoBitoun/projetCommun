import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Association} from "../../assets/utils/Association";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AssociationsProvider} from "../../providers/associations/associations";

/**
 * Generated class for the ModifyAssoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-asso',
  templateUrl: 'modify-asso.html',
})
export class ModifyAssoPage {

  association : Association;
  validations_form : FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder : FormBuilder,
              public associationProvider : AssociationsProvider) {
    this.association = this.navParams.get('association');
    this.validations_form = this.formBuilder.group({
        Name : new FormControl(),
        Description : new FormControl(),
        picLink : new FormControl()
    })
  }

  modifyAsso(){
    this.associationProvider.modifyAsso(this.association);
    this.navParams.get('parentPage').update();
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyAssoPage');
  }

}
