import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Messages} from "../../assets/utils/Messages";
import {UserProvider} from "../../providers/user/user";
import {AssociationsProvider} from "../../providers/associations/associations";

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userProvider : UserProvider,
              public alertCtrl : AlertController,
              public associationProvider : AssociationsProvider) {
    this.update();


  }

  update() {
    this.listMessage = [];
    console.log(this.navParams.get('association').id);
    this.associationProvider.getMessageAsso(this.navParams.get('association').id).then(
        data => {
          data.map( data => {
            this.listMessage.push(data);
          })
        }
    )
  }

  ionViewDidLoad() {
    this.userProvider.getUser().subscribe(
        user => {
          this.idUser = user.uid;
          if (user.uid == this.navParams.get('association').idAdminAsso){
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
      idAsso : this.navParams.get('association').id
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
              idAsso : this.navParams.get('association').id
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
