import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Cours} from "../../assets/utils/Cours";


/*
  Generated class for the CoursProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoursProvider {

  constructor(public http: HttpClient,  public firestore : AngularFirestore) {
    console.log('Hello CoursProvider Provider');
  }
    public getCours(): Observable<Cours[]>{
        const listCours = this.firestore.collection<Cours>('cours');
        return listCours.snapshotChanges().map(actions => {
            return actions.map( a => {
                const data = a.payload.doc.data() as Cours;
                data.id = a.payload.doc.id;
                return data;
            })
        })
        //return this.firestore.collection<any>('associations/').valueChanges();
    }

}
