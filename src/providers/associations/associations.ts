import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

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

  public getAssociations(){
    return this.firestore.collection<any>('associations/').valueChanges();
  }
}
