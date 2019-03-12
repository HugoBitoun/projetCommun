import {Component} from '@angular/core';
import {
    AlertController,
    IonicPage, Loading,
    LoadingController,
    NavController
} from 'ionic-angular';
import {AssociationsProvider} from "../../providers/associations/associations";
import {UserProvider} from "../../providers/user/user";
import {Association} from "../../assets/utils/Association";
import {AssociationDetailMessagePage} from "../association-detail-message/association-detail-message";
import {ModifyAssoPage} from "../modify-asso/modify-asso";
import {User} from "../../assets/utils/User";

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
    providers: [
        AssociationsProvider
    ],

})
export class AssociationsPage {

    private listAssociations : Association[] = Array<Association>();
    private user: User;
    private loader : Loading;

    constructor(private navCtrl: NavController,
                private userProvider : UserProvider,
                private associationProvider : AssociationsProvider,
                private alertCtrl : AlertController,
                private loadingCtrl : LoadingController) {
        this.loader = this.loadingCtrl.create({
            content: "Patientez un peu !"
        });

        this.userProvider.getUser().subscribe(data => {
            this.user = data;
        });
    }

    /**
     * @description ionic function call before the view load and load/update the data
     */
    ionViewWillLoad() {
        this.update();
    }

    /**
     * @return void
     * @description function that get all the associations to show to the user
     */
    private update() : void{

        this.loader.present();
        this.associationProvider.getAssociations().subscribe( data => {
            this.listAssociations = data;
            this.isSuscriber();
        });
    }

    /**
     * @description create an alert to ask user if he want to delete the association and delete it if the answer is Yes
     * @param association (Association)
     * @return void
     */
    private deleteAsso(association : Association): void{

        let alert = this.alertCtrl.create({
            title : 'Voulez vous vraiment supprimer' + association.Name + ' ?',
            buttons: [
                {
                    text: 'OUI',
                    handler: () => {
                        this.associationProvider.removeAsso(association.id);
                        this.userProvider.removeAssoUsers(association.id);
                        this.userProvider.addOneToNbAssoAdmin(association.idAdminAsso);
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
     * @description allow the user to subscribe or unsubscribe to association
     * @param association
     * @return void
     */
    private subscribe(association : Association) : void
    {

        if (association.isSubscriber == true) {
            association.isSubscriber = false;
            this.userProvider.Unsubscribe(association);
        } else {
            this.userProvider.Subscribe(association);
            association.isSubscriber = true;
        }
    }

    /**
     * @description get the association detail page with the association in param
     * @param association
     * @return void
     */
    private getAssociationPage(association : Association): void{
        this.navCtrl.push(AssociationDetailMessagePage, {association : association})
    }


    /**
     * @description check and initialize the optionnal field isSubscriber in association to true if he's a subscriber
     * @return void
     */
    private isSuscriber() :void {
        this.userProvider.getUser().subscribe(user => {
            this.listAssociations.forEach(
                association => {
                    if (user.associations.find(x => x == association.id)) {
                        association.isSubscriber = true;
                    } else {
                        association.isSubscriber = false;
                    }
                }
            );
            this.loader.dismiss();
        });
    }

    /**
     * @description push the page ModifyAssoPage
     * @param association
     * @return void
     */
    private modifyAsso(association : Association) : void{
        this.navCtrl.push(ModifyAssoPage, {association : association, parentPage : this});
    }


}
