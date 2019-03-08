import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from "../../assets/utils/User";
import {Observable} from "rxjs";
import * as firebase from "firebase";
import DocumentData = firebase.firestore.DocumentData;
import {Association} from "../../assets/utils/Association";
import {Cours} from "../../assets/utils/Cours";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

    userId: string;

    constructor(public http: HttpClient, public firestore: AngularFirestore, public afAuth: AngularFireAuth) {

        this.userId = this.afAuth.auth.currentUser.uid;
    }

    public getUserAux(): Observable<User> {

        return this.firestore.doc<User>(`users/${this.userId}`).valueChanges();
    }

    public getUser(): Observable<User> {
        this.userId = this.afAuth.auth.currentUser.uid;
        const listAsso = this.firestore.collection<User>(`users`).doc(`${this.userId}`);
        return listAsso.valueChanges().map(a => {
            return a as User;
        })
    }

    public Subscribe(association: Association) {
        const userRef = firebase.firestore().collection(`users`).doc(`${this.userId}`);
        userRef.update({associations: firebase.firestore.FieldValue.arrayUnion(association.id)});
    }

    public Unsubscribe(association: Association) {
        const userRef = firebase.firestore().collection(`users`).doc(`${this.userId}`);
        userRef.update({associations: firebase.firestore.FieldValue.arrayRemove(association.id)});
    }

    public subscribeCours(cours: Cours) {
        const userRef = firebase.firestore().collection(`users`).doc(`${this.userId}`);
        userRef.update({cours: firebase.firestore.FieldValue.arrayUnion(cours.id)});
    }

    public unsubscribeCours(cours: Cours) {
        const userRef = firebase.firestore().collection(`users`).doc(`${this.userId}`);
        userRef.update({cours: firebase.firestore.FieldValue.arrayRemove(cours.id)});
    }

    public getAllUsers(): Observable<User[]> {
        const listUsers = this.firestore.collection<User>('users');
        return listUsers.snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data() as User;
                data.uid = a.payload.doc.id;
                return data;
            })
        })
        //return this.firestore.collection<any>('associations/').valueChanges();
    }
}
