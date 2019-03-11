import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {AssociationsProvider} from "../../providers/associations/associations";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Association} from "../../assets/utils/Association";
import {User} from "../../assets/utils/User";

/**
 * Generated class for the AddAssoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-asso',
  templateUrl: 'add-asso.html',
})
export class AddAssoPage {

  association : Association = new Association();
  idAdminAsso : string;
  validations_form : FormGroup;
  user : User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userProvider: UserProvider,
              public associationProvider : AssociationsProvider,
              public formBuilder : FormBuilder){

      this.userProvider.getUser().subscribe(
          data => {
            this.user = data;
            this.idAdminAsso = data.uid;
          }
      );

      this.validations_form = this.formBuilder.group({
          Name : new FormControl(),
          Description : new FormControl(),
          picLink : new FormControl()
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAssoPage');
  }

  public buttonAddAsso(){
    this.association.idAdminAsso = this.idAdminAsso;
    this.associationProvider.addAsso(this.association);
    this.userProvider.removeOneToNbAsso(this.user.canCreateNbAsso);

    this.navParams.get("parentPage").update();
    this.navCtrl.pop();
  }



}
