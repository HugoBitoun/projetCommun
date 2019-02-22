import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Association} from "../../../www/assets/utils/Association";

/**
 * Generated class for the DetailAssoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-asso',
  templateUrl: 'detail-asso.html',
})
export class DetailAssoPage {

  association : Association;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.association = navParams.get('association');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailAssoPage');
  }

}
