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

    private listAssociations : Association[] = Array<Association>();

    constructor(private navCtrl: NavController,
                private navParams: NavParams,
                private userProvider : UserProvider,
                private associationProvider : AssociationsProvider,
                private loadingCtrl : LoadingController) {
        this.update();
    }

    /**
     * @description get the associations where the user is subscriber then load it into a list
     * @return void
     */
    private update() : void{
        let loader = this.loadingCtrl.create({
            content: "Patientez un peu !"
        });
        loader.present();
        this.listAssociations = [];
        this.userProvider.getUser().subscribe(
            data => {
                if (data != undefined){
                    data.associations.forEach(
                        id => {
                            this.associationProvider.getAssociationsById(id).subscribe( data => {
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

    /**
     * @description unsubscribe the user of an association in dataBase
     * @param association
     * @return void
     */
    private unsuscribe(association : Association): void{
        this.userProvider.Unsubscribe(association);
        this.update();
    }

    /**
     * @description get the asscociation detail page and pass the association
     * @param association
     * @return void
     */
    private getAssociationPage(association : Association): void{
        this.navParams.data.push(AssociationDetailMessagePage, {association : association})
    }
}
