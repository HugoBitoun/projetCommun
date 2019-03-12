import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
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

  private listMessage : any = new Array();
  private isAdminOfAsso : boolean;
  private idUser : string;
  private association : Association;
  private isAdmin : boolean;
  private isCollab : boolean = false;
  private listUsers : User[] = new Array<User>();

  constructor(private navCtrl: NavController, private navParams: NavParams,
              private userProvider : UserProvider,
              private alertCtrl : AlertController,
              private associationProvider : AssociationsProvider,
              private loadingCtrl : LoadingController) {
    this.association = this.navParams.get('association');
    this.update();
  }

  /**
   * @description update the data and load them
   * @return void
   */
  private update() :void{
    let loader = this.loadingCtrl.create({
      content: "Patientez un peu !"
    });
    loader.present();
    this.listMessage = [];
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

  /**
   * @return void
   * @description sort the list of message from the newest one to the older
   */
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

  /**
   * @description Ionic function that load idUser, isAdmin, isAdminAsso, isCollab
   */
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
            if ( data != undefined && data.find(x => x == user.uid)){
              this.isCollab = true;
            }
          });
        }
    )
  }


  /**
   * @description this function will give the color of the message according to the user roles that wrote the message
   * @param user
   */
  private getMessageColor(user: User): string {
    if (user != undefined) {
      if (user.roles.admin != undefined && user.roles.admin) {
        return "bg-danger";
      }
      return "bg-primary";
    }
  }

  /**
   * @description this function will give the icon of the message according to the user roles that wrote the message
   * @param user
   */
  private getMessageIcon(user: User): string {
    if (user != undefined) {
      if (user.roles.admin != undefined && user.roles.admin) {
        return "ribbon";
      }
      return "logo-snapchat";
    }
  }

  /**
   * @description this function will covert the timestamp format to a writable one
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


  /**
   * @description add a message to the association
   */
  private addMessage():void{
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


  /**
   * @return void
   * @description send a message to adding it to the base
   * @param text Message to send (string)
   */
  private sendMessage(text): void{
    let values = {
      message : text,
      idUser: this.idUser,
      idAsso : this.association.id
    };

    this.associationProvider.addMessageAsso(values);
  }

  /**
   * @description remove one message from the association
   * @param message Message
   * @return void
   */
  private removeMessage(message):void{
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
