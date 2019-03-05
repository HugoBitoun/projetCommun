import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabAssociationPage} from "../tab-association/tab-association";
import {TabAssociationCreatedPage} from "../tab-association-created/tab-association-created";
import {User} from "../../../www/assets/utils/User";
import {UserProvider} from "../../providers/user/user";
import {el} from "@angular/platform-browser/testing/src/browser_util";

/**
 * Generated class for the MyAssociationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-associations',
  templateUrl: 'my-associations.html',
})
export class MyAssociationsPage {

  isAssociationCreator : boolean;

  tab1;
  tab2;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider : UserProvider) {
    this.userProvider.getUser().subscribe( user => {
      if (user.roles.isAdminAsso == true){
        this.isAssociationCreator = true;
      } else {
        this.isAssociationCreator = false;
      }
    });
    this.tab1 = TabAssociationPage;
   this.tab2 = TabAssociationCreatedPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAssociationsPage');

  }

}

