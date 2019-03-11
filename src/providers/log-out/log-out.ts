import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

/*
  Generated class for the LogOutProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LogOutProvider {
  private authState: Observable<firebase.User>;
  private currentUser: firebase.User=null;

  constructor(public http: HttpClient, private afAuth: AngularFireAuth) {
    this.authState = this.afAuth.authState;
    this.authState.subscribe(user=>{
      if(user){
        this.currentUser=user;
      }else{
        this.currentUser=null;
      }
    });
  }

  getAuthState():any{
    return this.authState;
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  

}
