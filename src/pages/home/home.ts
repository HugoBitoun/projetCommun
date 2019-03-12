import {Component} from '@angular/core';
import {Loading, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {CoursProvider} from "../../providers/cours/cours";
import {UserProvider} from "../../providers/user/user";
import {Cours} from "../../assets/utils/Cours";
import {User} from "../../assets/utils/User";
import {Messages} from "../../assets/utils/Messages";
import {AssociationsProvider} from "../../providers/associations/associations";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    listCours: Cours[] = new Array<Cours>();
    loader: Loading;
    hasCours: Boolean;
    user: User;
    listUsers: User[] = new Array<User>();
    listMessages: Messages[] = new Array<Messages>();
    listMessagesAsso: any[] = new Array();
    seg : string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public coursProvider: CoursProvider,
                public userProvider: UserProvider, public modalCtrl: ModalController, public loadingCtrl: LoadingController,
                public assoProvider : AssociationsProvider) {
        this.loader = this.loadingCtrl.create({
            content: "Patientez un peu !"
        });
        this.loader.setDuration(1000);
        this.seg = 'Cours';
    }

    ionViewWillLoad() {
        this.loader.present();
        this.getCours();
        this.getMessagesAssoSub();
        console.log(this.listMessagesAsso);
    }

    getMessagesAssoSub(){
        this.userProvider.getUser().subscribe( userData => {
            userData.associations.forEach( idAsso => {
                this.assoProvider.getMessageAsso(idAsso).then( messages => {
                    messages.forEach( message => {
                        this.userProvider.getUserByIdAux(message.idUser).then( userMessage => {
                            let values = {
                                message : message,
                                user : userMessage,
                                color : this.getMessageColor(userMessage),
                                icon : this.getMessageIcon(userMessage),
                                date : this.convertDate(message.date)
                            };
                            console.log(values);
                            this.listMessagesAsso.push(values);
                            this.sortList(this.listMessagesAsso);
                        })
                    })
                })
            })
            }
        )
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
                    console.log(cours + " : " + cours.isSubscriber);
                }
            );
            this.getAllUser();
        });
    }

    getAllUser() {
        this.userProvider.getAllUsers().subscribe(data => {
            this.listUsers = data;
        });
    }

    sortList(liste){
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

        }
        return "bg-primary";
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

        }
        return "logo-snapchat";
    }

    getUserName(id) {
        // console.log("coucou " + id);
        if (this.listUsers != undefined)
            return this.listUsers.find(x => x.uid == id).name;
    }

    getUserLastName(id) {
        if (this.listUsers != undefined)
            return this.listUsers.find(x => x.uid == id).lastName;
    }

    getUser(id) {
        if (this.listUsers != undefined)
            return this.listUsers.find(x => x.uid == id);
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
}
