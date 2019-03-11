import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Association} from "../../assets/utils/Association";
import {DetailAssoPage} from "../detail-asso/detail-asso";
import {MessagePage} from "../message/message";
import {MyAssociationsPage} from "../my-associations/my-associations";

/**
 * Generated class for the AssociationDetailMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-association-detail-message',
  templateUrl: 'association-detail-message.html',
})
export class AssociationDetailMessagePage {

  association : Association;
  tab1 = DetailAssoPage;
  tab2 = MessagePage;
  navParamTabs : any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.association = navParams.get('association');
    this.navParamTabs = navParams;
  }

  ionViewDidEnter() {
  }


}
