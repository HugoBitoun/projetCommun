import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Association} from "../../assets/utils/Association";
import "rxjs-compat/add/operator/map";
import {Observable} from "rxjs";
import * as firebase from "firebase";
import {Messages} from "../../assets/utils/Messages";

/*
  Generated class for the AssociationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AssociationsProvider {


  constructor(public http: HttpClient, public firestore : AngularFirestore) {
  }


    /**
     * @description Get all the associations from the database
     * @return Observable<Association[]>
     */
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

    /**
     * @description get an Association by Id from the database
     * @param id String
     * @return Observable<Association>
     */
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

    /**
     * @return void
     * @param association Association
     * @description take an association in param and add it to the database
     */
  public addAsso(association : Association) : void{
    const ref = this.firestore.collection('associations');
    ref.add({
          Name : association.Name,
          Description : association.Description,
          idAdminAsso : association.idAdminAsso,
          messages : [],
          picLink : association.picLink,
          collabs : association.collabs
        }
    )
  }

    /**
     * @description remove one association according to the id in param
     * @param id
     * @return void
     */
  public removeAsso(id) : void{
      const ref = firebase.firestore().collection('associations/').doc(id);
      ref.delete();
  }

    /**
     * @description get a list of association that a single user has created
     * @return Promise<Association[]>
     * @param id string
     */
  public getAssoCreatedByUser(id): Promise<Association[]>{
    const ref = firebase.firestore().collection('associations');
    return ref.where('idAdminAsso', '==', id).get().then(
        data => {
            if (data.docs == undefined){
                return [];
            }
          return data.docs.map( association => {
                const asso = association.data() as Association;
                asso.id = association.id;
              return asso;
          })
        }
    );
  }


    /**
     * @description get all the messages from an association according to the id of the association
     * @return Promise<Messages[]>
     * @param id string
     */
  public getMessageAsso(id): Promise<Messages[]>{
      const ref = firebase.firestore().collection('associations');
      return ref.doc(id).get().then( data => {
          return data.get('messages') as Messages[];
      })
  }

    /**
     * @description add a message into the database
     * @return void
     * @param values messages
     */
  public addMessageAsso(values) : void{

      const ref = firebase.firestore().collection('associations').doc(values.idAsso);
      ref.update({
          messages : firebase.firestore.FieldValue.arrayUnion({
              message : values.message,
              idUser : values.idUser,
              date : new Date()
          })
      })
  }

    /**
     * @description remove one message that is exactly the same as passed in the params
     * @param values
     * @return void
     */
  public removeMessage(values): void{
      const ref = firebase.firestore().collection('associations').doc(values.idAsso);
      ref.update({
          messages : firebase.firestore.FieldValue.arrayRemove({
              message : values.message,
              idUser : values.idUser,
              date : values.date
          })
      })
  }

    /**
     * @description Modify one association according to the association.id passed in params
     * @param association
     * @return void
     */
  public modifyAsso(association : Association) : void{
      const ref = firebase.firestore().collection('associations').doc(association.id);
      ref.update({
          Name : association.Name,
          Description : association.Description,
          picLink : association.picLink,
          collabs : association.collabs
      })


  }

    /**
     * @description return true if a user appears in any associations as a collab
     * @param id
     * @return void
     */
  public isCollab(id) : Promise<boolean> {
      const ref = firebase.firestore().collection('associations/').where('collabs' , 'array-contains', `${id}`);
      return ref.get().then( data => {
          if (data.empty){
              return false;
          } else {
              return true;
          }
      })

  }

    /**
     * @description return true if the user is a collaborator of the association
     * @param idUser string
     * @param idAsso string
     * @return Promise<boolean>
     */
  public isCollabToAsso(idUser, idAsso): Promise<boolean>{
      const ref = firebase.firestore().collection('associations').doc(`${idAsso}`);

      return ref.get().then( data => {
          if (data.get('collabs') == undefined || data.get('collabs').length == 0){
              return false;
          } else {
              if (data.get('collabs').find(x => x == idUser)){
                  return true;
              } else {
                  return false;
              }

          }

      })
  }

    /**
     * @description return all the id of the collabs of one association
     * @param idAsso
     * @return Promise<string[]>
     */
  public getCollab(idAsso): Promise<string[]>{
      const ref = firebase.firestore().collection('associations/').doc(`${idAsso}`);
      return ref.get().then( data => {
          return data.get('collabs') as string[];
      })

  }

    /**
     * @description return all the associations where the user is a collab
     * @param id string
     * @return Promise<Association[]>
     */
    public getAssoCollab(id) : Promise<Association[]> {
        const ref = firebase.firestore().collection('associations/').where('collabs' , 'array-contains', `${id}`);
        return ref.get().then( data => {
            return data.docs.map( association => {
                let asso =  association.data() as Association;
                asso.id = association.id;
                return asso;
            })
        })

    }
}
