import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Association} from "../../assets/utils/Association";
import "rxjs-compat/add/operator/map";
import {Observable} from "rxjs";
import * as firebase from "firebase";
import {Messages} from "../../assets/utils/Messages";
import {Time} from "@angular/common";

/*
  Generated class for the AssociationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AssociationsProvider {


  constructor(public http: HttpClient, public firestore : AngularFirestore) {
    console.log('Hello AssociationsProvider Provider');
  }

  public getAssociations(): Observable<Association[]>{
    const listAsso = this.firestore.collection<Association>('associations');
    return listAsso.snapshotChanges().map(actions => {
      return actions.map( a => {
        const data = a.payload.doc.data() as Association;
        data.id = a.payload.doc.id;
        return data;
      })
    })
  }


    public getAssociationsById(id): Observable<Association>{
      const listAsso = this.firestore.collection<Association>(`associations/`).doc(id);
        return listAsso.snapshotChanges().map( actions => {
            if(actions.payload.exists) {
                const data = actions.payload.data() as Association;
                data.id = actions.payload.id;
                return data;
            }
        })
    }


  public addAsso(association : Association){
    const ref = this.firestore.collection('associations');
    ref.add({
          Name : association.Name,
          Description : association.Description,
          idAdminAsso : association.idAdminAsso,
          messages : []
        }
    )
  }

  public removeAsso(id){
      const ref = firebase.firestore().collection('associations/').doc(id);
      ref.delete();
  }

  public getAssoCreatedByUser(id): Promise<Association[]>{
    const ref = firebase.firestore().collection('associations');
    return ref.where('idAdminAsso', '==', id).get().then(
        data => {
          return data.docs.map( association => {
                const asso = association.data() as Association;
                asso.id = association.id;
              return asso;
          })
        }
    );
  }


  public getMessageAsso(id): Promise<Messages[]>{
      const ref = firebase.firestore().collection('associations');
      return ref.doc(id).get().then( data => {
          return data.get('messages') as Messages[];
      })
  }

  public addMessageAsso(values){

      const ref = firebase.firestore().collection('associations').doc(values.idAsso);
      ref.update({
          messages : firebase.firestore.FieldValue.arrayUnion({
              message : values.message,
              idUser : values.idUser
          })
      })
  }

  public removeMessage(values){
      const ref = firebase.firestore().collection('associations').doc(values.idAsso);
      ref.update({
          messages : firebase.firestore.FieldValue.arrayRemove({
              message : values.message,
              idUser : values.idUser
          })
      })
  }

  public modifyAsso(association : Association){
      const ref = firebase.firestore().collection('associations').doc(association.id);
      ref.update({
          Name : association.Name,
          Description : association.Description
      })


  }
}
