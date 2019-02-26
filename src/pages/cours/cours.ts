import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {CoursProvider} from "../../providers/cours/cours";
import {Cours} from "../../assets/utils/Cours";
import {UserProvider} from "../../providers/user/user";
import {HomePage} from "../home/home";

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

    listCours: Cours[] = Array<Cours>();
    listCoursSubscribed: Cours[] = Array<Cours>();

    constructor(public navCtrl: NavController, public navParams: NavParams, public coursProvider: CoursProvider,
                public userProvider: UserProvider, public modalCtrl: ModalController) {


    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CoursPage');
    }

    ionViewWillLoad() {
        this.listCours=new  Array<Cours>();
        this.listCoursSubscribed= new Array<Cours>();
        this.coursProvider.getCours().subscribe(data => {
            this.listCours = data;
            this.isSuscriber();
        });
    }


    isSuscriber() {
        this.userProvider.getUser().subscribe(user => {
            if (user.cours != undefined)
                this.listCours.forEach(
                    cour => {
                        console.log("coucou " + user.cours + " " + cour.id);
                        if (user.cours.find(x => x == cour.id)) {
                            cour.isSubscriber = true;
                            this.listCoursSubscribed.push(cour);
                            console.log(this.listCoursSubscribed);
                        } else {
                            console.log("BIIIITE")

                            cour.isSubscriber = false;
                        }
                        //console.log(cours);
                        //console.log("a verifier : " + user.cours);
                        //console.log("a verifier : " + this.listCoursSubscribed);
                    }
                );
        });

    }

    openModal(liste) {
        console.log("openModal()")
        let modal = this.modalCtrl.create(ModalContentPage, {list: liste});
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
    listCours: Cours[] = Array<Cours>();
    listCoursUnsubscribed: Cours[] = Array<Cours>();
    listCoursSubscribed: Cours[] = Array<Cours>();
    selectedCours: Cours = new Cours();

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController, public coursProvider: CoursProvider,
        public userProvider: UserProvider
    ) {
        this.listCours = this.params.get("list");
        console.log(this.listCours);
    }

    ionViewWillLoad() {
        this.coursProvider.getCours().subscribe(data => {
            this.listCours = data;
            this.isSuscriber();
        });

    }

    isSuscriber() {
        this.userProvider.getUser().subscribe(user => {
            if (user.cours != undefined)
                this.listCours.forEach(
                    cours => {
                        console.log(cours.id);
                        if (user.cours.find(x => x == cours.id)) {
                            cours.isSubscriber = true;
                            this.listCoursSubscribed.push(cours);
                        } else {
                            cours.isSubscriber = false;
                            this.listCoursUnsubscribed.push(cours);
                        }
                        console.log(user.cours);
                        console.log("cours sub " + this.listCoursSubscribed);
                        console.log("cours unsub " + this.listCoursUnsubscribed);
                    }
                );
        });
    }

    select(cours) {
        this.selectedCours = cours;
        console.log(cours);
    }

    dismiss() {
        this.userProvider.unsubscribeCours(this.listCoursSubscribed.pop());
        this.listCoursSubscribed.push(this.selectedCours);
        this.userProvider.subscribeCours(this.selectedCours);
        this.viewCtrl.dismiss();
    }
}


