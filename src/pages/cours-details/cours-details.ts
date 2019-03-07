import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Cours} from "../../assets/utils/Cours";

/**
 * Generated class for the CoursDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cours-details',
    templateUrl: 'cours-details.html',
})
export class CoursDetailsPage {

    cours: Cours;
    seg:String;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.cours = navParams.get('cours');
        this.seg='Description';
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CoursDetailsPage');
    }

}
