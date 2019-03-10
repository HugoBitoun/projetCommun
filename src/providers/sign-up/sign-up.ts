import { Injectable } from '@angular/core';
import { User } from '../../assets/utils/User';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import firebase from 'firebase';

/*
  Generated class for the SignUpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignUpProvider {

  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {

    this.user$ = this.afAuth.authState.switchMap(user => {
      if (user) {
        return this.db.doc<User>(`/users/${user.uid}`).valueChanges();

      } else {
        return Observable.of(null);
      }
    })
  }

  public register(user: User): any {
    console.log(user); 
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(value => {      
      this.updateUserData(value.user, user);
    })
      .catch(err => {
        throw new Error('Cet email est déjà utilisé par un autre utilisateur');
      });
  }

  public updateUserData(userAuth, user: User) {
    const userRef: AngularFirestoreDocument<any> = this.db.doc(`/users/${userAuth.uid}`);
    var regex1 = RegExp('@etu.univ-paris1.fr*');
    if (regex1.test(userAuth.email)) {
      const data: User = {
        uid: userAuth.uid,
        email: userAuth.email,
        name: user.name,
        lastName: user.lastName,
        roles: {
          student: true,
          admin: false,
          isAdminAsso : false,
          prof:false,
        },
        canCreateNbAsso : 0,
        associations: []
      };
      return userRef.set(data, { merge: true });
    } else {
      const data: User = {
        uid: userAuth.uid,
        email: userAuth.email,
        name: user.name,
        lastName: user.lastName,
        roles: {          
          student: true,
          admin: false,
          prof:true,
        },
        associations: []
      };
      console.log(data);
      return userRef.set(data, { merge: true });
    }


  }


}
