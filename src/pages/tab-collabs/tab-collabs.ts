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

  listAsso : Association[] = new Array<Association>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private assoProvider : AssociationsProvider, private userProvider : UserProvider) {
    console.log("salut");
    this.update();
  }

  public getAssociationPage(association : Association){
    console.log(association.id);
    this.navParams.data.push(AssociationDetailMessagePage, {association : association})
  }



  public update(){
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabCollabsPage');
  }

}
