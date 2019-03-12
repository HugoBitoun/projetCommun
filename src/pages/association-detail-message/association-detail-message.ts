import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Association} from "../../assets/utils/Association";
import {DetailAssoPage} from "../detail-asso/detail-asso";
import {MessagePage} from "../message/message";
import {MyAssociationsPage} from "../my-associations/my-associations";

/**
 * @description Tab Ionic Page Parent class of DetailAssoPage and MessagePage
 */
@IonicPage()
@Component({
  selector: 'page-association-detail-message',
  templateUrl: 'association-detail-message.html',
})
export class AssociationDetailMessagePage {

  private association : Association;
  private tab1 = DetailAssoPage;
  private tab2 = MessagePage;
  private navParamTabs : any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.association = navParams.get('association');
    this.navParamTabs = navParams;
  }



}
