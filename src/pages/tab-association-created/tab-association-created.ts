import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddAssoPage} from "../add-asso/add-asso";
import {UserProvider} from "../../providers/user/user";
import {AssociationsProvider} from "../../providers/associations/associations";
import {Association} from "../../assets/utils/Association";
import {updateTemplate} from "@ionic/app-scripts/dist/template";

/**
 * Generated class for the TabAssociationCreatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-association-created',
  templateUrl: 'tab-association-created.html',
})
export class TabAssociationCreatedPage {

  myAssociationsCreate: Association[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userProvider: UserProvider,
              public associationProvider: AssociationsProvider) {
    this.update()
  }

  update(){

      this.userProvider.getUser().subscribe(
          data => {
              this.associationProvider.getAssoCreatedByUser(data.uid).then(
                  data => {
                      console.log(data);
                      this.myAssociationsCreate = data;
                  }
              )
          }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabAssociationCreatedPage');
  }



  addAsso(){
    this.navCtrl.push(AddAssoPage, {parentPage : this});
  }

}
