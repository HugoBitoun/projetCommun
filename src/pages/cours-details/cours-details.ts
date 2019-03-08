import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Cours} from "../../assets/utils/Cours";
import {User} from "../../assets/utils/User";
import {CoursProvider} from "../../providers/cours/cours";
import {Messages} from "../../assets/utils/Messages";
import {listener} from "@angular/core/src/render3/instructions";
import {UserProvider} from "../../providers/user/user";
import Timestamp = firebase.firestore.Timestamp;

/**
 * Generated class for the CoursDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cours-details',
    templateUrl: 'cours-details.html',
})
export class CoursDetailsPage {

    cours: Cours;
    seg: String;
    user: User;
    listMessages: Messages[] = new Array<Messages>();
    listUsers: User[] = new Array<User>();

    constructor(public navCtrl: NavController, public navParams: NavParams, public coursProvider: CoursProvider, public userProvider: UserProvider) {
        this.cours = navParams.get('cours');
        this.user = navParams.get('user');
        this.seg = 'Description';
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CoursDetailsPage');
    }

    ionViewWillLoad() {
        this.getMessages();
    }

    getMessages() {
        this.coursProvider.getMessagesCours(this.cours.id).then(data => {
            data.map(data => {
                this.listMessages.push(data);
                this.getMessagesUser();
            });
        });
    }

    getMessagesUser() {
        this.userProvider.getAllUsers().subscribe(data => {
            this.listUsers = data;
            //this.update();
        });
    }

    /*update() {
        this.listMessages.forEach(message => {
            this.listUsers.forEach(user => {
                if (user.uid == message.idUser) {
                    message.isShowable = true;
                    console.log(message.isShowable);
                } else {
                    message.isShowable = false;
                }
            });
        });
    }*/
    convertDate(date: Timestamp): string {
        return date.toDate().toLocaleDateString();
    }

    getUser(id) {
        return this.listUsers.find(x => x.uid == id);
    }
}
