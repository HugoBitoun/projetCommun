import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {Association} from "../../../www/assets/utils/Association";
import {AssociationsProvider} from "../../providers/associations/associations";
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userProvider : UserProvider,
              public associationProvider : AssociationsProvider,
              public loadingCtrl : LoadingController) {
    this.update();
  }

  update(){
      let loader = this.loadingCtrl.create({
          content: "Patientez un peu !"
      });
      loader.present();
      this.listAssociations = [];
      this.userProvider.getUser().subscribe(
          data => {
              console.log(data);
              if (data != undefined){
              data.associations.forEach(
                  id => {
                      this.associationProvider.getAssociationsById(id).subscribe( data => {
                          console.log(this.listAssociations);
                          if (data != undefined){
                              if (!this.listAssociations.find(x => x.id == data.id))
                              {this.listAssociations.push(data);}
                          }
                      })
                  })
              }
              loader.dismiss();
          });
  }

  unsuscribe(association : Association){
      this.userProvider.Unsubscribe(association);
      this.update();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabAssociationPage');
  }

    public getAssociationPage(association : Association){
      console.log(association.id);
        this.navParams.data.push(AssociationDetailMessagePage, {association : association})
    }
}
