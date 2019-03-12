import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Association} from "../../../www/assets/utils/Association";
import {UserProvider} from "../../providers/user/user";
import {User} from "../../assets/utils/User";


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
  private collabs : User[] = new Array();


  constructor(public navCtrl: NavController, public navParams: NavParams,private userProvider : UserProvider) {
    this.association = navParams.get('association');
    this.update();
  }

  private update(){
    this.collabs = [];
    this.association.collabs.forEach( idUser => {
      this.userProvider.getUserByIdAux(idUser).then( data => {
        this.collabs.push(data);
      })
    })
  }

}
