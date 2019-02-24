import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
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

    listCours: Cours[] = Array<Cours>();
    listCoursSubscribed: Cours[] = Array<Cours>();

    constructor(public navCtrl: NavController, public navParams: NavParams, public coursProvider: CoursProvider,
                public userProvider: UserProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CoursPage');
    }

    ionViewWillLoad() {
        this.coursProvider.getCours().subscribe(data => {
            this.listCours = data;
            this.isSuscriber();
        });
    }


    isSuscriber() {
        this.userProvider.getUser().subscribe(user => {


            this.listCours.forEach(
                cours => {
                    console.log(cours.id);
                    if (user.cours.find(x => x == cours.id)) {
                        cours.isSubscriber = true;
                        this.listCoursSubscribed[this.listCoursSubscribed.length - 1];
                    } else {
                        cours.isSubscriber = false;
                    }
                    console.log(cours.isSubscriber);
                }
            );
        });
    }

}
