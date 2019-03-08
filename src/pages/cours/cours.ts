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

    listCours: Cours[] = new Array<Cours>();
    loader: Loading;
    hasCours: Boolean;
    user: User;

    constructor(public navCtrl: NavController, public navParams: NavParams, public coursProvider: CoursProvider,
                public userProvider: UserProvider, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CoursPage');

    }

    ionViewWillLoad() {
        this.loader = this.loadingCtrl.create({
            content: "Patientez un peu !"
        });
        this.loader.present();
        this.getCours();
    }

    getCours() {
        this.coursProvider.getCours().subscribe(cours => {
            this.listCours = cours;
            this.getSubCours();
        });
    }


    getSubCours() {
        this.userProvider.getUser().subscribe(user => {
            this.hasCours = false;
            this.user = user;
            console.log(user.roles.prof);
            this.listCours.forEach(
                cours => {
                    console.log(user.cours);
                    if (user.cours.find(x => x == cours.id)) {
                        cours.isSubscriber = true;
                        this.hasCours = true;
                    } else {
                        cours.isSubscriber = false;
                    }
                    console.log(cours + " : " + cours.isSubscriber);
                }
            );
            this.loader.dismissAll();
        });
    }

    getCoursDetailPage(cours: Cours) {
        console.log(cours.name);
        this.navCtrl.push(CoursDetailsPage, {cours: cours, user: this.user});
    }

    openModal() {
        console.log("openModal() " + this.listCours);
        console.log("user " + this.user.roles.prof);
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
    listCours: Cours[] = new Array<Cours>();
    user: User;
    selectedCours: Cours;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        public userProvider: UserProvider
    ) {
        this.listCours = this.params.get("list");
        this.user = this.params.get("user");
        console.log("openedModal() " + this.listCours + " " + this.user.roles.prof);
    }

    ionViewWillLoad() {

    }

    select(cours) {
        this.selectedCours = cours;
    }

    unsubscribeCours(cours: Cours) {
        this.userProvider.unsubscribeCours(cours);
        cours.isSubscriber = true;
    }

    subscribeCours(cours: Cours) {
        this.userProvider.subscribeCours(cours);
        cours.isSubscriber = true;
    }

    dismiss() {
        if (this.selectedCours != undefined) {
            this.listCours.forEach(cours => {
                this.unsubscribeCours(cours);
            });
            this.subscribeCours(this.selectedCours);

        } else if (this.user.roles.prof) {
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


