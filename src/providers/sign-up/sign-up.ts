import { Injectable } from '@angular/core';
import { User } from '../../assets/utils/User';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the SignUpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignUpProvider {

  constructor(private afAuth: AngularFireAuth,private db : AngularFirestore ) {
    
  }

  public register(user: User){
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
  }

  public oAuthLogin(user: User){
    return this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);        
}

}
