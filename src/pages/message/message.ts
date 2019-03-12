import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Messages} from "../../assets/utils/Messages";
import {UserProvider} from "../../providers/user/user";
import {AssociationsProvider} from "../../providers/associations/associations";
import {Association} from "../../assets/utils/Association";
import {User} from "../../assets/utils/User";

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  listMessage : any = new Array();
  isAdminOfAsso : boolean;
  idUser : string;
  association : Association;
  isAdmin : boolean;
  isCollab : boolean = false;
  listUsers : User[] = new Array<User>();

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userProvider : UserProvider,
              public alertCtrl : AlertController,
              public associationProvider : AssociationsProvider,
              public loadingCtrl : LoadingController) {
    this.association = this.navParams.get('association');
    this.update();


  }

  update() {
    let loader = this.loadingCtrl.create({
      content: "Patientez un peu !"
    });
    loader.present();
    this.listMessage = [];
    console.log(this.association.id);
    this.associationProvider.getMessageAsso(this.association.id).then(
        data => {
          data.map( message => {
            this.userProvider.getUserByIdAux(message.idUser).then( dataUser => {

              let values = {
                message : message,
                user : dataUser,
                date : this.convertDate(message.date),
                color : this.getMessageColor(dataUser),
                icon : this.getMessageIcon(dataUser)
              };
              this.listMessage.push(values);
              this.sortMessages();
            });
          });
          loader.dismiss();
        }
    )
  }

  sortMessages(){
    this.listMessage.sort((n1, n2) => {
      if (n1.date > n2.date) {
        return -1;
      }

      if (n1.date < n2.date) {
        return 1;
      }

      return 0;
    });
  }

  ionViewDidLoad() {
    this.userProvider.getUser().subscribe(
        user => {
          this.idUser = user.uid;
          this.isAdmin = user.roles.admin;
          if (user.uid == this.association.idAdminAsso){
            this.isAdminOfAsso = true;
          } else {
            this.isAdminOfAsso = false;
          }
          this.associationProvider.getCollab(this.association.id).then( data => {
            if (data.find(x => x == user.uid)){
              this.isCollab = true;
            }
          });
        }
    )
  }


  getMessageColor(user: User): string {
    if (user != undefined) {
      if (user.roles.admin != undefined && user.roles.admin) {
        return "bg-danger";
      }
      if (this.isCollab != undefined && this.isCollab) {
        return "bg-danger";
      }
      return "bg-primary";
    }
  }

  getMessageIcon(user: User): string {
    if (user != undefined) {
      if (user.roles.admin != undefined && user.roles.admin) {
        return "ribbon";
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


  addMessage(){
    console.log("coucou");

    const alert = this.alertCtrl.create({
      title : 'Nouveau message' ,
      inputs: [
        {
          name : 'message',
          type : 'text',
          placeholder : 'Votre message'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log("cancel");
          }
        }, {
          text: 'Ok',
          handler: data => {
            this.sendMessage(data.message);
            this.update();
          }
        }
      ]
    });

    alert.present();


  }


  sendMessage(text){
    let values = {
      message : text,
      idUser: this.idUser,
      idAsso : this.association.id
    };

    this.associationProvider.addMessageAsso(values);
  }

  removeMessage(message){
    let alert = this.alertCtrl.create({
      title : 'Voulez vous vraiment supprimer le message ?',
      buttons: [
        {
          text: 'OUI',
          handler: () => {
            let values = {
              message : message.message,
              idUser: message.idUser,
              date : message.date,
              idAsso : this.association.id
            };
            this.associationProvider.removeMessage(values);
            this.update();
          }
        }
          ,{
          text : 'NON'
        }
      ]
    });

    alert.present();

  }
}
