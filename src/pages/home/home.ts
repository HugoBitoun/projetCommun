import {Component} from '@angular/core';
import {Loading, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {CoursProvider} from "../../providers/cours/cours";
import {UserProvider} from "../../providers/user/user";
import {Cours} from "../../assets/utils/Cours";
import {User} from "../../assets/utils/User";
import {Messages} from "../../assets/utils/Messages";
import {AssociationsProvider} from "../../providers/associations/associations";
import {CoursDetailsPage} from "../cours-details/cours-details";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    private listCours: Cours[] = new Array<Cours>();
    private loader: Loading;
    private hasCours: Boolean;
    private user: User;
    private listUsers: User[] = new Array<User>();
    private listMessages: Messages[] = new Array<Messages>();
    private listMessagesAsso: any[] = new Array();
    private seg: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public coursProvider: CoursProvider,
                public userProvider: UserProvider, public modalCtrl: ModalController, public loadingCtrl: LoadingController,
                public assoProvider: AssociationsProvider) {
        this.loader = this.loadingCtrl.create({
            content: "Patientez un peu !"
        });
        this.loader.setDuration(1000);
        this.seg = 'Cours';
    }

    /**
     * @description when the view will load this ionic function will load the data
     */
    ionViewWillLoad() {
        this.loader.present();
        this.getAllCours();
        this.getMessagesAssoSub();
    }

    /**
     * @return void
     * @description get the messages by association that the user has subscribe, and sort them by their dates and add to a list a values
     * that contains the message with the user that wrote the message, the color, the date, the icon, the name of the association
     */
    private getMessagesAssoSub(): void {
        this.userProvider.getUser().subscribe(userData => {
                userData.associations.forEach(idAsso => {
                    this.assoProvider.getAssociationsById(idAsso).subscribe(association => {
                        association.messages.forEach(message => {
                            this.userProvider.getUserByIdAux(message.idUser).then(userMessage => {
                                let values = {
                                    message: message,
                                    user: userMessage,
                                    color: this.getMessageColor(userMessage),
                                    icon: this.getMessageIcon(userMessage),
                                    date: this.convertDate(message.date),
                                    nameAsso: association.Name
                                };
                                this.listMessagesAsso.push(values);
                                this.sortList(this.listMessagesAsso);
                            })
                        })
                    })
                })
            }
        )
    }

    /**
     * @description get all the cours that exists and then call a function that get the cours the user subscribed
     */
    getAllCours() {

        this.coursProvider.getCours().subscribe(cours => {
            this.listCours = cours;
            this.getSubCours();
        });
    }

    /**
     * @description Navigation to the coursDetailsPage with parameters (current cours clicked and current user)
     * @param cours Cours
     */
    getCoursDetailPage(cours: Cours) {
        this.navCtrl.push(CoursDetailsPage, {cours: cours, user: this.user});
    }

    getCours(intitule:string):Cours{
        return this.listCours.find(x=>x.name==intitule);
    }

    /**
     * @description get the cours the user subscribed and store then in the this.listMessages array
     */
    getSubCours() {
        this.userProvider.getUser().subscribe(user => {
            this.hasCours = false;
            this.user = user;
            this.listCours.forEach(
                cours => {
                    if (user.cours != undefined)
                        if (user.cours.find(x => x == cours.id)) {
                            cours.isSubscriber = true;
                            this.hasCours = true;
                            this.coursProvider.getMessagesCours(cours.id).then(data => {
                                data.map(data => {
                                    data.intitule = cours.name;
                                    this.listMessages.push(data);
                                    this.sortList(this.listMessages);
                                });
                            });
                        } else {
                            cours.isSubscriber = false;
                        }
                }
            );
            this.getAllUser();
        });
    }

    /**
     * @description get all the users to have the informations about them
     */
    getAllUser() {
        this.userProvider.getAllUsers().subscribe(data => {
            this.listUsers = data;
        });
    }

    /**
     * @description this function will sort a list of message in function of their dates, the most recently is going to be the first into the list
     * @param liste Liste of Messages or Object with date field
     */
    private sortList(liste): void {
        liste.sort((n1, n2) => {
            if (n1.date > n2.date) {
                return -1;
            }

            if (n1.date < n2.date) {
                return 1;
            }
            return 0;
        });
    }

    /**
     * @description this function will give the color of the message according to the user roles that wrote the message
     * @param user User
     */
    private getMessageColor(user: User): string {
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

        }
        return "bg-primary";
    }

    /**
     * @description this function will give the icon of the message according to the user roles that wrote the message
     * @param user User
     */
    private getMessageIcon(user: User): string {
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

        }
        return "logo-snapchat";
    }
    /**
     * @description this function get the user for the view
     * @param id string
     */
    getUser(id: string) {
        if (this.listUsers != undefined)
            return this.listUsers.find(x => x.uid == id);
    }

    /**
     * @description this function will convert the timestamp format to a writable one
     * @param date timestamp
     */
    private convertDate(date: firebase.firestore.Timestamp): string {
        return date.toDate().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "2-digit",
            year: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }
}
