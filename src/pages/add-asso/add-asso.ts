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

  private association : Association = new Association();
  private idAdminAsso : string;
  private validations_form : FormGroup;
  private user : User;
  public listCollabs : any = [];
  public collabs : string[] = new Array<string>();

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

    /**
     * @return void
     * @description initialize the listCollabs for each users with values that contains a user and a field checked that is a boolean
     */
  private initializeListCollabs() : void{
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

    /**
     * @description Just open the modalPageCollabo
     */
  private  openModalCollabo() : void{

      let modal = this.modalCtrl.create(ModalContentPageCollaborateur, {parentPage : this, listCollabs : this.listCollabs, userId : this.user.uid});
      modal.present();
  }


    /**
     * @param: no params
     * @return: void
     */
  private buttonAddAsso() : void{
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


    /**
     * @description this function change the state of field checked in listCollabs that is passed in params
     * @param id of the user that is going to be add
     */
    private addCollabo(id) : void{
       if (this.navParams.get('listCollabs').find(x => x.user.uid == id).checked == true){
           this.navParams.get('listCollabs').find(x => x.user.uid == id).checked = false;
       } else {
           this.navParams.get('listCollabs').find(x => x.user.uid == id).checked = true;
       }
    }

    /**
     * @return void
     * @description Close the modal page
     */
    private dismiss() : void{
        this.viewCtrl.dismiss();
    }

    /**
     * @return void
     * @description checked if for each user in the listCollabs is true if  it is then the function add the user to a collabs list present in the parent page then dismiss
     */
    private valider() : void{
        this.navParams.get('parentPage').collabs = [];
        this.navParams.get('listCollabs').forEach( values => {
            if (values.checked==true){
                this.navParams.get('parentPage').collabs.push(values.user.uid);
            }
        });

        //this.navParams.get('parentPage').listCollabs = [];
        this.dismiss();
    }

}

