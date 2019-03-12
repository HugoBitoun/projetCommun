import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/firestore";
import {Cours} from "../../assets/utils/Cours";
import * as firebase from "firebase";
import {Messages} from "../../assets/utils/Messages";


/*
  Generated class for the CoursProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoursProvider {

    constructor(public http: HttpClient, public firestore: AngularFirestore) {
    }

    /**
     * @description Get the cours from firebase
     * @return cours Observable<Cours[]>
     */
    public getCours(): Observable<Cours[]> {
        const listCours = this.firestore.collection<Cours>('cours');
        return listCours.snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data() as Cours;
                data.id = a.payload.doc.id;
                return data;
            })
        })
    }

    /**
     * @description Get a cours by id from firebase
     * @param id String
     * @return Promise<Cours>
     */
    public getCoursById(id: string): Promise<Cours> {
        return firebase.firestore().collection('cours/').doc(id).get().then(
            data => {
                return data.data() as Cours;
            })
    }

    /**
     * @description Get messages from cours from firebase
     * @param id String
     * @return cours Promise<Messages[]>
     */
    public getMessagesCours(id: string): Promise<Messages[]> {
        const ref = firebase.firestore().collection('cours');
        return ref.doc(id).get().then(data => {
            return data.get('messages') as Messages[];
        })
    }

    /**
     * @description Add messages in the cours on firebase
     * @param values any
     */
    public addMessageCours(values: any) {
        const ref = firebase.firestore().collection('cours').doc(values.idCours);
        ref.update({
            messages: firebase.firestore.FieldValue.arrayUnion({
                message: values.message,
                idUser: values.idUser,
                date: new Date(),
            })
        })
    }

    /**
     * @description Remove message from cours on firebase
     * @param values any
     */
    public removeMessageCours(values: any) {
        const ref = firebase.firestore().collection('cours').doc(values.idCours);
        ref.update({
            messages: firebase.firestore.FieldValue.arrayRemove({
                message: values.message,
                idUser: values.idUser,
                date: values.date,
            })
        })
    }
}
