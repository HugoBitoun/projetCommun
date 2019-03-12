import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {AssociationsProvider} from "../../providers/associations/associations";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Association} from "../../assets/utils/Association";
import {User} from "../../assets/utils/User";

/**
 * Generated class for the AddAssoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-asso',
  templateUrl: 'add-asso.html',
})
export class AddAssoPage {

  association : Association = new Association();
  idAdminAsso : string;
  validations_form : FormGroup;
  user : User;
  listCollabs : any = [];
  collabs : string[] = new Array<string>();

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userProvider: UserProvider,
              public associationProvider : AssociationsProvider,
              public formBuilder : FormBuilder,
              public modalCtrl : ModalController){

      this.initializeListCollabs();
      this.userProvider.getUser().subscribe(
          data => {
            this.user = data;
            this.idAdminAsso = data.uid;
          }
      );

      this.validations_form = this.formBuilder.group({
          Name : new FormControl(),
          Description : new FormControl(),
          picLink : new FormControl()
      })
  }

  initializeListCollabs(){
      this.userProvider.getAllUsers().subscribe( data => {
              data.forEach( user => {
                  console.log(this.listCollabs);
                  let values = {
                      user : user,
                      checked: false
                  };
                  this.listCollabs.push(values);
              })
          }
      )
  }

  openModalCollabo(){

      let modal = this.modalCtrl.create(ModalContentPageCollaborateur, {parentPage : this, listCollabs : this.listCollabs, userId : this.user.uid});
      modal.present();
  }

  ionViewDidLoad() {
  }

  public buttonAddAsso(){
    this.association.idAdminAsso = this.idAdminAsso;
    this.association.collabs = this.collabs;
    this.associationProvider.addAsso(this.association);
    this.userProvider.removeOneToNbAsso(this.user.canCreateNbAsso);

    this.navParams.get("parentPage").update();
    this.navCtrl.pop();
  }



}

@Component({
    selector: 'page-add-asso',
    templateUrl: 'modalCollaborateur.html',
})
export class ModalContentPageCollaborateur {



    constructor( private viewCtrl : ViewController, private navParams : NavParams){
    }



    addCollabo(id){
       if (this.navParams.get('listCollabs').find(x => x.user.uid == id).checked == true){
           this.navParams.get('listCollabs').find(x => x.user.uid == id).checked = false;
       } else {
           this.navParams.get('listCollabs').find(x => x.user.uid == id).checked = true;
       }
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }

    valider(){
        this.navParams.get('parentPage').collabs = [];
        this.navParams.get('listCollabs').forEach( values => {
            if (values.checked==true){
                this.navParams.get('parentPage').collabs.push(values.user.uid);
            }
        });

        this.navParams.get('parentPage').listCollabs = [];
        this.dismiss();
    }

}

