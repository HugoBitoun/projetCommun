import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Cours} from "../../assets/utils/Cours";
import * as firebase from "firebase";
import {Messages} from "../../assets/utils/Messages";
import {FirebaseError} from "firebase";


/*
  Generated class for the CoursProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoursProvider {

    constructor(public http: HttpClient, public firestore: AngularFirestore) {
        console.log('Hello CoursProvider Provider');
    }

    public getCours(): Observable<Cours[]> {
        const listCours = this.firestore.collection<Cours>('cours');
        return listCours.snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data() as Cours;
                data.id = a.payload.doc.id;
                return data;
            })
        })
        //return this.firestore.collection<any>('associations/').valueChanges();
    }

    public getCoursById(id: string): Promise<Cours> {
        console.log(id);
        return firebase.firestore().collection('cours/').doc(id).get().then(
            data => {
                return data.data() as Cours;
            })
    }

    public getMessagesCours(id): Promise<Messages[]> {
        const ref = firebase.firestore().collection('cours');
        return ref.doc(id).get().then(data => {
            return data.get('messages') as Messages[];
        })
    }

    public addMessageCours(values) {
        const ref = firebase.firestore().collection('cours').doc(values.idCours);
        ref.update({
            messages: firebase.firestore.FieldValue.arrayUnion({
                message: values.message,
                idUser: values.idUser,
                date: new Date(),
            })
        })
    }

    public removeMessageCours(values) {
        const ref = firebase.firestore().collection('cours').doc(values.idCours);
        ref.update({
            messages: firebase.firestore.FieldValue.arrayRemove({
                message: values.message,
                idUser: values.idUser,
                date:  values.date,
            })
        })
    }
}
