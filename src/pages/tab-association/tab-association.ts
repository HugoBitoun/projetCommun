import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {Association} from "../../../www/assets/utils/Association";
import {AssociationsProvider} from "../../providers/associations/associations";
import {DetailAssoPage} from "../detail-asso/detail-asso";
import {AssociationDetailMessagePage} from "../association-detail-message/association-detail-message";

/**
 * Generated class for the TabAssociationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-association',
  templateUrl: 'tab-association.html',
})
export class TabAssociationPage {

  listAssociations : Association[] = Array<Association>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider : UserProvider, public associationProvider : AssociationsProvider) {

    this.userProvider.getUser().subscribe(
        data => {
            data.associations.forEach(
                id => {
                  this.associationProvider.getAssociationsById(id).then( data => {
                      this.listAssociations.push(data);
                  });
                });
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabAssociationPage');
  }

    public getAssociationPage(association : Association){
      console.log(association.id);
        this.navParams.data.push(AssociationDetailMessagePage, {association : association})
    }
}
