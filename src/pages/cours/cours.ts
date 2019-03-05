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
    listCoursSubscribed: Cours[] = new Array<Cours>();
    listCoursUnsubscribed: Cours[] = new Array<Cours>();
    loader: Loading;

    constructor(public navCtrl: NavController, public navParams: NavParams, public coursProvider: CoursProvider,
                public userProvider: UserProvider, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CoursPage');

    }

    ionViewWillLoad() {

        //this.loader.present();
        // this.initCours();
        //this.loader.dismissAll();
        this.init2();
    }


    initCours() {
        this.userProvider.getUser().subscribe(user => {
            if (user.cours != undefined) {
                user.cours.forEach(id => {
                    this.coursProvider.getCoursById(id).then(
                        cours => {
                            this.listCoursSubscribed.push(cours);
                        }
                    )
                })
            }
        });
    }

    init2() {
        this.coursProvider.getCours().subscribe(cours => {
            this.listCours = cours;
            this.regSub();
        });
    }

    regSub() {
        this.userProvider.getUser().subscribe(user => {
            this.listCours.forEach(
                cours => {
                    console.log(user.cours);
                    if (user.cours.find(x => x == cours.id)) {
                        cours.isSubscriber = true;
                    } else {
                        cours.isSubscriber = false;
                    }
                    console.log(cours.isSubscriber);
                }
            );
        });
    }

    openModal() {
        console.log("openModal() " + this.listCours);
        let modal = this.modalCtrl.create(ModalContentPage, {
            list: this.listCours,
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
    selectedCours: Cours = new Cours();

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController, public coursProvider: CoursProvider,
        public userProvider: UserProvider
    ) {
        this.listCours = this.params.get("list");
        console.log("openedModal() " + this.listCours);
    }

    ionViewWillLoad() {

    }

    select(cours) {
        this.selectedCours = cours;
        console.log(cours);

    }

    unsubscribeCours() {
        let coursUnsub = this.listCours.find(x => x.isSubscriber == true);
        coursUnsub.isSubscriber = false;
        this.userProvider.unsubscribeCours(coursUnsub);
    }

    subscribeCours(cours) {
        cours.isSubscriber = true;
        this.userProvider.subscribeCours(cours);
    }

    dismiss() {
        let selectedCours = this.selectedCours;
        this.unsubscribeCours();
        this.subscribeCours(selectedCours);
        this.viewCtrl.dismiss();
    }
}


