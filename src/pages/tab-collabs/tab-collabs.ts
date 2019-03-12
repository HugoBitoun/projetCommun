import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Association} from "../../assets/utils/Association";
import {AssociationsProvider} from "../../providers/associations/associations";
import {UserProvider} from "../../providers/user/user";
import {AssociationDetailMessagePage} from "../association-detail-message/association-detail-message";

/**
 * Generated class for the TabCollabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-collabs',
  templateUrl: 'tab-collabs.html',
})
export class TabCollabsPage {

  private listAsso : Association[] = new Array<Association>();

  constructor(private navCtrl: NavController, private navParams: NavParams, private assoProvider : AssociationsProvider, private userProvider : UserProvider) {
    this.update();
  }

  /**
   * @description get the association detail page
   * @return void
   * @param association
   */
  private getAssociationPage(association : Association): void{
    this.navParams.data.push(AssociationDetailMessagePage, {association : association})
  }


  /**
   * @description update or load the associations where the user is collaborator
   * @return void
   */
  private update() : void{
    this.listAsso = [];
    this.userProvider.getUser().subscribe( data => {
      this.assoProvider.getAssoCollab(data.uid).then( data => {
        data.forEach( association => {
          if (data != undefined){
            if (!this.listAsso.find(x => x.id == association.id)){
              this.listAsso.push(association);}
          }
        })
      })
    });


  }


}
