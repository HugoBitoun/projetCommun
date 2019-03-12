import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Association} from "../../assets/utils/Association";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AssociationsProvider} from "../../providers/associations/associations";
import {ModalContentPageCollaborateur} from "../add-asso/add-asso";
import {UserProvider} from "../../providers/user/user";
import {User} from "../../assets/utils/User";

/**
 * Generated class for the ModifyAssoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-asso',
  templateUrl: 'modify-asso.html',
})
export class ModifyAssoPage {

  association : Association;
  validations_form : FormGroup;
  listCollabs : any = new Array();
  user : User;
  collabs : string[] = new Array<string>();


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder : FormBuilder,
              public associationProvider : AssociationsProvider,
              private modalCtrl : ModalController,
              private userProvider : UserProvider) {
    this.initialize();
    this.initializeListCollabs();

    this.association = this.navParams.get('association');
    this.validations_form = this.formBuilder.group({
        Name : new FormControl(),
        Description : new FormControl(),
        picLink : new FormControl()
    })
  }

  modifyAsso(){
    this.association.collabs = this.collabs;
    this.associationProvider.modifyAsso(this.association);
    this.navParams.get('parentPage').update();
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
  }

  initialize(){
    this.userProvider.getUser().subscribe(
        data => {
          this.user = data;
        }
    );
  }

  initializeListCollabs(){
    this.listCollabs = [];
    this.userProvider.getAllUsers().subscribe( data => {
          data.forEach( user => {

            this.associationProvider.isCollabToAsso(user.uid, this.association.id).then( isCollab => {
              let values = {
                user : user,
                checked: isCollab
              };

              if (isCollab == undefined || isCollab == null){
                values.checked = false;
              }
              this.listCollabs.push(values);
            })
          })
        }
    )
  }


  openModalCollabo(){
    let modal = this.modalCtrl.create(ModalContentPageCollaborateur, {parentPage : this, listCollabs : this.listCollabs, userId : this.user.uid});
    modal.present();
  }

}
