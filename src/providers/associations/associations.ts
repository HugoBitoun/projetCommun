import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Association} from "../../assets/utils/Association";
import "rxjs-compat/add/operator/map";
import {Observable} from "rxjs";

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
    //return this.firestore.collection<any>('associations/').valueChanges();
  }
}
