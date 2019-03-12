import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Association} from "../../../www/assets/utils/Association";


/**
 * @description show the different elements of an association to the users
 */
@IonicPage()
@Component({
  selector: 'page-detail-asso',
  templateUrl: 'detail-asso.html',
})
export class DetailAssoPage {

  private association : Association;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.association = navParams.get('association');
  }



}
