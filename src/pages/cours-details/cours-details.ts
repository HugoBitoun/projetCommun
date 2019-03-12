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

    private cours: Cours;
    private seg: String;
    private user: User;
    private listMessages: Messages[] = new Array<Messages>();
    private listUsers: User[] = new Array<User>();
    private loader: Loading;
    private isRemove: boolean;

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
    }

    ionViewWillLoad() {
        this.loader = this.loadingCtrl.create({
            content: "Patientez un peu !"
        });
        this.loader.setDuration(500);
        this.loader.present();
        this.getMessages();
    }

    /**
     * @description get the messages of the cours that the user subscribed and store then in the array this.listMessages
     */
    getMessages() {
        this.listMessages = new Array<Messages>();
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
                this.getAllUsers();
            });
            //this.loader.dismissAll();
        });
    }

    /**
     *@description get all the users to have their information in the view and store them in the this.listUsers
     */
    getAllUsers() {
        this.userProvider.getAllUsers().subscribe(data => {
            this.listUsers = new Array<User>();
            this.listUsers = data;
            //this.update();
        });
    }

    /**
     * @description function used to refresh the page when the user pull down the screen and reload the page
     * @param refresher Refresher
     */
    async doRefresh(refresher: Refresher) {
        this.ionViewWillLoad();
        refresher.cancel();  // Works
    }

    /**
     * @description Launch the removeMode that let the admin remove the messages wanted
     */
    removeMode() {
        this.isRemove = !this.isRemove;
    }

    /**
     * @description Get the color for the view in function of the mode (RemoveMode of not)
     * @return color string
     */
    getColorNav(): string {
        if (this.isRemove) {
            return "bg-danger";
        } else {
            return "bg-white";
        }
    }

    /**
     * @description Get the color of the messsage titles and Background in function of user role
     * @param user User
     * @return color string
     */
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

    /**
     * @description get the icon in function of the user role
     * @param user User
     * @return logo string
     */
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

    /**
     * @description this function will covert the timestamp format to a writable one
     * @param date timestamp
     * @return date string
     */
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

    /**
     *@description get User in function of the id  for the view
     * @param id string
     * @return user User
     */
    getUser(id: string): User {
        if (this.listUsers.find(x => x.uid == id) != undefined)
            return this.listUsers.find(x => x.uid == id);
    }

    /**
     * @description In removeMode the admin can click on messages and remove then by this function
     * @param message Message
     */
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

    /**
     * @description this function open the modal page to write a message and on modal page dismiss refresh the page
     */
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
    private cours: Cours;
    private user: User;
    private selectedCours: Cours;
    private inputMessage: string;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        public userProvider: UserProvider,
        public coursProvider: CoursProvider,
    ) {
        this.cours = this.params.get("cours");
        this.user = this.params.get("user");
    }

    /**
     * @description this function is call when the validButton is clicked and add the message in firebase with the coursProvider
     */
    valider() {
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

    /**
     * @description Dismiss the modal page and return to the cour-detail-Page
     */
    dismiss() {
        this.viewCtrl.dismiss();
    }
}
