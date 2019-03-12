import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabAssociationPage} from "../tab-association/tab-association";
import {TabAssociationCreatedPage} from "../tab-association-created/tab-association-created";
import {UserProvider} from "../../providers/user/user";
import {TabCollabsPage} from "../tab-collabs/tab-collabs";
import {AssociationsProvider} from "../../providers/associations/associations";

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

  private isAssociationCreator : boolean;
  private idUser : string;
  private userIsCollab : boolean = false;

  private tab1;
  private tab2;
  private tab3;


  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private userProvider : UserProvider,
              private assoProvider : AssociationsProvider) {

    this.isCollab();
    this.userProvider.getUser().subscribe( user => {
      if (user.roles.isAdminAsso == true){
        this.isAssociationCreator = true;
        this.idUser = user.uid;
      } else {
        this.isAssociationCreator = false;
        this.idUser = user.uid;
      }


    });
    this.tab1 = TabAssociationPage;
    this.tab2 = TabAssociationCreatedPage;
    this.tab3 = TabCollabsPage;
  }



  /**
   * @description if the current user is a collaborator of an association then the tab collaborator will be present
   * @return void
   */
  private isCollab() : void {
    this.userProvider.getUser().subscribe( data => {
      this.assoProvider.isCollab(data.uid).then( data => {
        if (data){
          this.userIsCollab = true;
        }
      })
    })
  }

}

