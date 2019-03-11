import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Messages} from "../../assets/utils/Messages";
import {UserProvider} from "../../providers/user/user";
import {AssociationsProvider} from "../../providers/associations/associations";
import {Association} from "../../assets/utils/Association";

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

  listMessage : Messages[] = new Array<Messages>();
  isAdminOfAsso : boolean;
  idUser : string;
  association : Association;
  isAdmin : boolean;

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
          data.map( data => {
            this.listMessage.push(data);
          });
          loader.dismiss();
        }
    )
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
        }
    )
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
