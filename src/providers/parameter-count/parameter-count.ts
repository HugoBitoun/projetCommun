import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../assets/utils/User';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*
  Generated class for the ParameterCountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParameterCountProvider {

  private authState: Observable<firebase.User>
  private currentUser: firebase.User=null;
  private userId : String;

  constructor(public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen, public http: HttpClient, private afAuth: AngularFireAuth,
    private db: AngularFirestore) {
    this.initializeApp();
    this.authState = this.afAuth.authState;
    this.authState.subscribe(user=>{
      if(user){
        this.currentUser=user;
      }else{
        this.currentUser=null;
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //firebase.initializeApp(environment.firebase);
      this.splashScreen.hide();
    });
  }

  getAuthState():any{
    return this.authState;
  }

  modify(user:User): any {
    const userRef: AngularFirestoreDocument<any> = this.db.doc(`/users/${this.currentUser.uid}`);    
    return userRef.set(user, { merge: true });
  }

  public getUser(): Observable<User> {
    this.userId = this.afAuth.auth.currentUser.uid;
    const listAsso = this.db.collection<User>(`users`).doc(`${this.userId}`);
    return listAsso.valueChanges().map( a=> {
      return a as User;
    })
  }

}
