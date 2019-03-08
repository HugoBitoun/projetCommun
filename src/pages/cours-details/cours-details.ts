import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Cours} from "../../assets/utils/Cours";
import {User} from "../../assets/utils/User";
import {CoursProvider} from "../../providers/cours/cours";
import {Messages} from "../../assets/utils/Messages";
import {UserProvider} from "../../providers/user/user";
import {Keyboard} from '@ionic-native/keyboard/ngx';

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
    providers: [Keyboard],
})
export class CoursDetailsPage {

    cours: Cours;
    seg: String;
    user: User;
    listMessages: Messages[] = new Array<Messages>();
    listUsers: User[] = new Array<User>();

    constructor(public navCtrl: NavController, public navParams: NavParams, public coursProvider: CoursProvider, public userProvider: UserProvider, public keyboard: Keyboard) {
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
                this.listMessages.sort((n1, n2) => {
                    if (n1.date > n2.date) {
                        return -1;
                    }

                    if (n1.date < n2.date) {
                        return 1;
                    }

                    return 0;
                });
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

    getMessageColor(user: User): string {
        if (user.roles.admin != undefined && user.roles.admin) {
            return "bg-danger";
        }
        if (user.roles.prof != undefined && user.roles.prof) {
            return "bg-warning";
        }
        if (user.roles.student != undefined && user.roles.student) {
            return "bg-info";
        }
        return "bg-primary";
    }

    getMessageIcon(user:User):string{
        if (user.roles.admin != undefined && user.roles.admin) {
            return "ribbon";
        }
        if (user.roles.prof != undefined && user.roles.prof) {
            return "book";
        }
        if (user.roles.student != undefined && user.roles.student) {
            return "school";
        }
        return "logo-snapchat";
    }

    convertDate(date: firebase.firestore.Timestamp): string {
        return date.toDate().toLocaleDateString();
    }

    getUser(id) {
        return this.listUsers.find(x => x.uid == id);
    }

    createMessage() {
        this.keyboard.show();
    }
}
