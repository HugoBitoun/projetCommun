import {Component} from '@angular/core';
import {
    IonicPage,
    Loading,
    LoadingController, ModalController,
    NavController,
    NavParams,
    Platform,
    Refresher,
    ViewController
} from 'ionic-angular';
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
    loader: Loading;
    isRemove: boolean;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public coursProvider: CoursProvider, public loadingCtrl: LoadingController, public userProvider: UserProvider, public keyboard: Keyboard) {
        this.cours = navParams.get('cours');
        this.user = navParams.get('user');
        if (navParams.get('refresh')) {
            this.seg = 'Messages';
        } else {
            this.seg = 'Description';
        }
        this.isRemove = false;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CoursDetailsPage');
    }

    ionViewWillLoad() {
        this.loader = this.loadingCtrl.create({
            content: "Patientez un peu !"
        });
        this.loader.setDuration(500);
        this.loader.present();
        this.getMessages();
    }

    getMessages() {
        this.listMessages = new Array<Messages>();
        this.coursProvider.getMessagesCours(this.cours.id).then(data => {
            data.map(data => {
                console.log(data)
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
            //this.loader.dismissAll();
        });
    }

    getMessagesUser(event?) {
        this.userProvider.getAllUsers().subscribe(data => {
            this.listUsers = new Array<User>();
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
    async doRefresh(refresher: Refresher) {
        this.ionViewWillLoad();
        refresher.cancel();  // Works
    }

    removeMode() {
        this.isRemove = !this.isRemove;
    }

    getColorNav(): string {
        if (this.isRemove) {
            return "bg-danger";
        } else {
            return "bg-white";
        }
    }

    getMessageColor(user: User): string {
        if (user != undefined) {
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
    }

    getMessageIcon(user: User): string {
        if (user != undefined) {
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
    }

    convertDate(date: firebase.firestore.Timestamp): string {
        return date.toDate().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "2-digit",
            year: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }

    getUser(id) {
        if (this.listUsers.find(x => x.uid == id) != undefined)
            return this.listUsers.find(x => x.uid == id);
    }

    /* getUserName(id) {
        // console.log("coucou " + id);
         return this.listUsers.find(x => x.uid == id).name;
     }

     getUserLastName(id){
         return this.listUsers.find(x => x.uid == id).lastName;
     }*/

    removeMessage(message: Messages) {
        if (this.isRemove) {
            let values = {
                message: message.message,
                idUser: message.idUser,
                idCours: this.cours.id,
                date: message.date,
            };
            this.coursProvider.removeMessageCours(values);
            this.ionViewWillLoad();
        }
    }

    openModal() {

        let modal = this.modalCtrl.create(ModalContentPageMessage, {
            cours: this.cours, user: this.user
        });
        modal.onDidDismiss(() => {
            this.ionViewWillLoad();
        });
        modal.present();
    }
}

@Component({
    selector: 'page-cours-details',
    templateUrl: 'modal2.html',
})
export class ModalContentPageMessage {
    cours: Cours;
    user: User;
    selectedCours: Cours;
    inputMessage: string;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        public userProvider: UserProvider,
        public coursProvider: CoursProvider,
    ) {
        this.cours = this.params.get("cours");
        this.user = this.params.get("user");
        console.log("openedModal() " + this.cours.name + " " + this.user.roles.prof);
    }

    valider() {
        // console.log("cul " + this.inputMessage);
        if (this.inputMessage != undefined && this.inputMessage.length > 5 && this.inputMessage.length < 1000) {
            let values = {
                message: this.inputMessage,
                idUser: this.user.uid,
                idCours: this.cours.id,
            };
            this.coursProvider.addMessageCours(values);
            this.dismiss();
        }
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
