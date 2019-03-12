import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from "../../assets/utils/User";
import {Observable} from "rxjs";
import * as firebase from "firebase";
import {Association} from "../../assets/utils/Association";
import {Cours} from "../../assets/utils/Cours";
import DocumentReference = firebase.firestore.DocumentReference;

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


    /**
     * @description get the current user that is connected
     * @return Observable<User>
     */
    public getUser(): Observable<User> {
        this.userId = this.afAuth.auth.currentUser.uid;
        const listAsso = this.firestore.collection<User>(`users`).doc(`${this.userId}`);
        return listAsso.valueChanges().map(a => {
            return a as User;
        })
    }

    /**
     * @description add the id of an association to the user.associations list to make it subscribe
     * @param association Association
     * @return void
     */
    public Subscribe(association: Association): void {
        const userRef = firebase.firestore().collection(`users`).doc(`${this.userId}`);
        userRef.update({associations: firebase.firestore.FieldValue.arrayUnion(association.id)});
    }

    /**
     * @description remove the id of an association to the user.associations list to make it unsubscribe
     * @param association Association
     * @constructor
     */
    public Unsubscribe(association: Association) {
        const userRef = firebase.firestore().collection(`users`).doc(`${this.userId}`);
        userRef.update({associations: firebase.firestore.FieldValue.arrayRemove(association.id)});
    }

    /**
     * @description add the id of a cours to the user.cours list to make it subscribe
     * @param cours Cours
     * @return void
     */
    public subscribeCours(cours: Cours) : void {
        const userRef = firebase.firestore().collection(`users`).doc(`${this.userId}`);
        userRef.update({cours: firebase.firestore.FieldValue.arrayUnion(cours.id)});
    }

    /**
     * @description remove the id of a cours to the user.cours list to make it unsubscribe
     * @param cours Cours
     * @return void
     */
    public unsubscribeCours(cours: Cours): void {
        const userRef = firebase.firestore().collection(`users`).doc(`${this.userId}`);
        userRef.update({cours: firebase.firestore.FieldValue.arrayRemove(cours.id)});
    }

    /**
     * @description get all the user in the database
     * @return Observable<User[]>
     */
    public getAllUsers(): Observable<User[]> {
        const listUsers = this.firestore.collection<User>('users');
        return listUsers.snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data() as User;
                data.uid = a.payload.doc.id;
                return data;
            })
        })
    }


    /**
     * @description go to the document user according to the id in param into the database
     * @param id string
     * @return DocumentReference
     */
    public getUserById(id): DocumentReference{
        return firebase.firestore().collection('users').doc(id);
    }

    /**
     * @description get the data of one user according to the id
     * @param id string
     * @return Promise<User>
     */
    public getUserByIdAux(id) : Promise<User>{
        const ref = firebase.firestore().collection('users').doc(id);
        return ref.get().then( data => {
            return data.data() as User;
        })
    }

    /**
     * @description Add one to the nb association a user can create into the database if the admin delete one of his associations
     * @param idUser string
     * @return void
     */
    public addOneToNbAssoAdmin(idUser): void{
        let nbAsso;
        this.getUserById(idUser).get().then( data => {
            nbAsso = data.get('canCreateNbAsso');
            this.getUserById(idUser).update({
                canCreateNbAsso : nbAsso+1
            })
        })
    }

    /**
     * @description removes for all the users an associations according to the id
     * @param id string (id of the association to remove)
     * @return void
     */
    public removeAssoUsers(id): void{
        const ref = firebase.firestore().collection('users').where('associations', 'array-contains',id);
        ref.get().then( data => {
            data.docs.map( user => {
                firebase.firestore().collection('users').doc(user.id).update({
                    associations : firebase.firestore.FieldValue.arrayRemove(id)
                })
            })
        })
    }

    /**
     * @description remove one to the nb Asso a user can create
     * @return void
     * @param nbAsso number
     */
    public removeOneToNbAsso(nbAsso): void{
        const ref = firebase.firestore().collection('users').doc(`${this.userId}`);
        ref.update({
            canCreateNbAsso : nbAsso-1
        })
    }

    /**
     * @description add one to the nb Asso a user can create
     * @return void
     * @param nbAsso number
     */
    public addOneToNbAsso(nbAsso):void{
        const ref = firebase.firestore().collection('users').doc(`${this.userId}`);
        ref.update({
            canCreateNbAsso : nbAsso+1
        })
    }

    /**
     * @description modify the data of one user
     * @return any
     * @param user User
     */
    public modify(user:User): any {
        const ref = firebase.firestore().collection('users/').doc( `${this.userId}`);
        return ref.set( user, {merge : true});
    }
}



