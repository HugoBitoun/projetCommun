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

  private association : Association;
  private validations_form : FormGroup;
  public listCollabs : any = new Array();
  public user : User;
  public collabs : string[] = new Array<string>();


  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private formBuilder : FormBuilder,
              private associationProvider : AssociationsProvider,
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

  /**
   * @description modify the association into the base
   * @return void Void
   */
  private modifyAsso(): void{
    this.association.collabs = this.collabs;
    this.associationProvider.modifyAsso(this.association);
    this.navParams.get('parentPage').update();
    this.navCtrl.pop();
  }


  /**
   * @description get the user
   * @return void
   */
  private initialize(): void{
    this.userProvider.getUser().subscribe(
        data => {
          this.user = data;
        }
    );
  }

  /**
   * @description initialize the listCollabs with values for each user, values.user (the user), values.checked(depending on if the user was already a collaborator)
   * @return void
   */
  private initializeListCollabs(): void{
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


  /**
   * @description open the modal page to modify the collaborators list
   * @return void
   */
  private openModalCollabo(): void{
    console.log(this.listCollabs);
    let modal = this.modalCtrl.create(ModalContentPageCollaborateur, {parentPage : this, listCollabs : this.listCollabs, userId : this.user.uid});
    modal.present();
  }

}
