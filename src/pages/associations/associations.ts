import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {AssociationsProvider} from "../../providers/associations/associations";
import {UserProvider} from "../../providers/user/user";
import {Association} from "../../assets/utils/Association";
import {User} from "../../../www/assets/utils/User";
import {DetailAssoPage} from "../detail-asso/detail-asso";

/**
 * Generated class for the AssociationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-associations',
  templateUrl: 'associations.html',
    providers : [
        AssociationsProvider
    ],

})
export class AssociationsPage {

  listAssociations : Association[] = Array<Association>();
  userAssociation : string[] = Array<string>();
  subscriber : boolean = false;
  user: User;

  constructor(public navCtrl: NavController, public userProvider : UserProvider, public associationProvider : AssociationsProvider,
   public popoverController : PopoverController){
    this.userProvider.getUser().subscribe( data => {
     this.user = data;
     console.log(data); 
    });

  }

ionViewDidLoad() {
    console.log('ionViewDidLoad AssociationsPage');
  }

  ionViewWillLoad() {
      this.associationProvider.getAssociations().subscribe( data => {
          this.listAssociations = data;
          this.isSuscriber();
      });

  }

  subscribe(association : Association){
        
    if (association.isSubscriber==true){
        association.isSubscriber = false;
        this.userProvider.Unsubscribe(association);
    } else {
        this.userProvider.Subscribe(association);
        association.isSubscriber = true;
    }
  }

   isSuscriber() {


      this.userProvider.getUser().subscribe( user => {


          this.listAssociations.forEach(
              association => {
                  console.log(association.id);
                  if (user.associations.find(x => x == association.id)){
                      association.isSubscriber = true;
                  } else {
                      association.isSubscriber = false;
                  }
                  console.log(association.isSubscriber);
              }
          );
      });
  }

    public getAssociationPage(association : Association){
        this.navCtrl.push(DetailAssoPage, {association : association})
    }




}
