import {Component} from '@angular/core';
import {
    IonicPage, Loading,
    LoadingController,
    ModalController,
    NavController,
    NavParams,
    Platform,
    ViewController
} from 'ionic-angular';
import {CoursProvider} from "../../providers/cours/cours";
import {Cours} from "../../assets/utils/Cours";
import {UserProvider} from "../../providers/user/user";
import {CoursDetailsPage} from "../cours-details/cours-details";
import {User} from "../../assets/utils/User";


/**
 * Generated class for the CoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cours',
    templateUrl: 'cours.html',
})
export class CoursPage {
    private listCoursSub: Cours[] = new Array<Cours>();
    private listCours: Cours[] = new Array<Cours>();
    private loader: Loading;
    private hasCours: Boolean;
    private user: User;

    constructor(public navCtrl: NavController, public navParams: NavParams, public coursProvider: CoursProvider,
                public userProvider: UserProvider, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {

    }

    ionViewDidLoad() {
    }

    ionViewWillLoad() {
        this.loader = this.loadingCtrl.create({
            content: "Patientez un peu !"
        });
        this.loader.present();
        this.getCours();
    }

    /**
     * @description Get all the cours available to be subscribed and store them int the this.listCours
     */
    getCours() {
        this.listCours = new Array<Cours>();
        this.coursProvider.getCours().subscribe(cours => {
            this.listCours = cours;
            this.getSubCours();
        });
    }

    /**
     * @description Get the subscribed vours from the listCours and change the isSubsribed boolean of cours to true
     */
    getSubCours() {
        this.listCoursSub = new Array<Cours>();
        this.userProvider.getUser().subscribe(user => {
            this.hasCours = false;
            this.user = user;
            this.listCours.forEach(
                cours => {
                    if (user.cours != undefined)
                        if (user.cours.find(x => x == cours.id)) {
                            cours.isSubscriber = true;
                            this.hasCours = true;
                            this.listCoursSub.push(cours);
                        } else {
                            cours.isSubscriber = false;
                        }
                }
            );
        });
        this.loader.dismissAll();
    }

    /**
     * @description Navigation to the coursDetailsPage with parameters (current cours clicked and current user)
     * @param cours Cours
     */
    getCoursDetailPage(cours: Cours) {
        this.navCtrl.push(CoursDetailsPage, {cours: cours, user: this.user});
    }

    /**
     * @description Open modal page with parameters listCours and current user. On modal page dismiss reload this page
     */
    openModal() {
        let modal = this.modalCtrl.create(ModalContentPage, {
            list: this.listCours, user: this.user
        });
        modal.onDidDismiss(() => {
            this.ionViewWillLoad();
        });
        modal.present();
    }
}

@Component({
    selector: 'page-cours',
    templateUrl: 'modal.html',
})
export class ModalContentPage {
    private listCours: Cours[] = new Array<Cours>();
    private user: User;
    private selectedCours: Cours;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        public userProvider: UserProvider
    ) {
        this.listCours = this.params.get("list");
        this.user = this.params.get("user");
    }

    ionViewWillLoad() {

    }

    /**
     * @description Select the cours clicked when the user is a prof store it in the this.selectedCours
     * @param cours Cours
     */
    select(cours) {
        this.selectedCours = cours;
    }

    /**
     * @description Unsubsribe to the cours in parameter with the userProvider
     * @param cours Cours
     */
    unsubscribeCours(cours: Cours) {
        this.userProvider.unsubscribeCours(cours);
        cours.isSubscriber = true;
    }

    /**
     * @description Current user Subscribe to the cours in parameter with the userProvider
     * @param cours Cours
     */
    subscribeCours(cours: Cours) {
        this.userProvider.subscribeCours(cours);
        cours.isSubscriber = true;
    }

    /**
     * @description Dismiss the modal page and call subscribe and unsubscribe to the chosen cours with the provider and then dismiss the modalPage
     */
    dismiss() {
        if (this.selectedCours != undefined) {
            this.listCours.forEach(cours => {
                this.unsubscribeCours(cours);
            });
            this.subscribeCours(this.selectedCours);

        } else if (!this.user.roles.prof) {
            this.listCours.forEach(cours => {
                if (cours.isSubscriber) {
                    this.subscribeCours(cours);
                } else {
                    this.unsubscribeCours(cours);
                }
            });
        }

        this.viewCtrl.dismiss();
    }
}


