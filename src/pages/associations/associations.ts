import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {AssociationsProvider} from "../../providers/associations/associations";

/**
 * Generated class for the AssociationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-associations',
  templateUrl: 'associations.html',
    providers : [
        AssociationsProvider
    ]
})
export class AssociationsPage {

  listAssociations : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public associationProvider : AssociationsProvider) {
   associationProvider.getAssociations().subscribe(
       data => {
         this.listAssociations = data;
       }
   );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssociationsPage');
  }




}
