import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AddAssoPage} from "../add-asso/add-asso";
import {UserProvider} from "../../providers/user/user";
import {AssociationsProvider} from "../../providers/associations/associations";
import {Association} from "../../assets/utils/Association";
import {AssociationDetailMessagePage} from "../association-detail-message/association-detail-message";
import {User} from "../../assets/utils/User";
import {ModifyAssoPage} from "../modify-asso/modify-asso";

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
  userCanCreateNbAsso : number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userProvider: UserProvider,
              public associationProvider: AssociationsProvider,
              public alertCtrl : AlertController,
              public loadingCtrl : LoadingController) {
    this.update()
  }

  update(){
      let loader = this.loadingCtrl.create({
          content: "Patientez un peu !"
      });
      loader.present();
      this.myAssociationsCreate = [];
      this.userProvider.getUser().subscribe(
          data => {
              this.userCanCreateNbAsso = data.canCreateNbAsso;
              this.associationProvider.getAssoCreatedByUser(data.uid).then(
                  associations => {
                      console.log(associations);
                      this.myAssociationsCreate = associations;

                  }
              );
              loader.dismiss();
          });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabAssociationCreatedPage');
  }



  addAsso(){
    this.navCtrl.push(AddAssoPage, {parentPage : this});
  }

    public getAssociationPage(association : Association){
        console.log(association.id);
        this.navParams.data.push(AssociationDetailMessagePage, {association : association})
    }

    deleteAsso(id){
        let alert = this.alertCtrl.create({
            title : 'Voulez vous vraiment supprimer l\'association ?',
            buttons: [
                {
                    text: 'OUI',
                    handler: () => {
                        this.associationProvider.removeAsso(id);
                        this.userProvider.removeAssoUsers(id);
                        this.userProvider.addOneToNbAsso(this.userCanCreateNbAsso);
                        this.update();
                    }
                }
                ,{
                    text : 'NON'
                }
            ]
        });

        alert.present();



    }

    modifyAsso(association :Association){
      this.navCtrl.push(ModifyAssoPage, {association : association, parentPage : this});
    }

}
