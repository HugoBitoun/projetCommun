import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from "../../assets/utils/User";
import {Observable} from "rxjs";
import * as firebase from "firebase";
import DocumentData = firebase.firestore.DocumentData;
import {Association} from "../../assets/utils/Association";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  userId : string;

  constructor(public http: HttpClient, public firestore : AngularFirestore, public afAuth : AngularFireAuth) {

    this.userId = this.afAuth.auth.currentUser.uid;
  }

  public getUserAux(): Observable<User>{
    return this.firestore.doc<User>(`users/${this.userId}`).valueChanges();
  }

  public getUser(): Observable<User> {
    const listAsso = this.firestore.collection<User>(`users`).doc(`${this.userId}`);
    return listAsso.valueChanges().map( a=> {
      return a as User;
    })
  }

  public Subscribe(association : Association){
    const userRef = firebase.firestore().collection(`users`).doc(`${this.userId}`);
    userRef.update( {associations : firebase.firestore.FieldValue.arrayUnion(association.id)});
  }

  public Unsubscribe(association : Association){
    const userRef = firebase.firestore().collection(`users`).doc(`${this.userId}`);
    userRef.update( {associations : firebase.firestore.FieldValue.arrayRemove(association.id)});
  }
}
