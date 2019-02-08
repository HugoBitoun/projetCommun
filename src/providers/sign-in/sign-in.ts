import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from "../auth/authService";


/*
  Generated class for the SignInProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignInProvider {

    userList : any;

    constructor(public http: HttpClient, public db : AngularFirestore, public afs :AngularFireAuth, public authServ : AuthService) {
        console.log('Hello SignInProvider Provider');
    }
}
