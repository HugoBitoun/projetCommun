import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AddAssoPage} from "../add-asso/add-asso";
import {UserProvider} from "../../providers/user/user";
import {AssociationsProvider} from "../../providers/associations/associations";
import {Association} from "../../assets/utils/Association";
import {AssociationDetailMessagePage} from "../association-detail-message/association-detail-message";
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

    private myAssociationsCreate: Association[];
    private userCanCreateNbAsso : number;

    constructor(private navCtrl: NavController, private navParams: NavParams,
                private userProvider: UserProvider,
                private associationProvider: AssociationsProvider,
                private alertCtrl : AlertController,
                private loadingCtrl : LoadingController) {
        this.update()
    }

    /**
     *@description load the associations that the current user has created
     * @return void
     */
    public update():void{
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
                        this.myAssociationsCreate = associations;

                    }
                );
                loader.dismiss();
            });
    }

    /**
     * @description get the page Add Asso
     * @return void
     */
    private addAsso():void{
        this.navCtrl.push(AddAssoPage, {parentPage : this});
    }

    /**
     * @description Get the detail page asso for the selected one
     * @param association
     * @return void
     */
    private getAssociationPage(association : Association): void{
        this.navParams.data.push(AssociationDetailMessagePage, {association : association})
    }

    /**
     * @description delete an association with his id from the database
     * @param id String
     * @return void
     */
    private deleteAsso(id): void{
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

    /**
     * @return void
     * @description get the page ModifyPage and pass association
     * @param association
     */
    private modifyAsso(association :Association): void{
        this.navCtrl.push(ModifyAssoPage, {association : association, parentPage : this});
    }

}
