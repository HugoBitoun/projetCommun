import { Injectable } from '@angular/core';
import { User } from '../../assets/utils/User';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

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
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(value => {
      this.updateUserData(value.user);
    })
      .catch(err => {
        throw new Error('Cet email est déjà utilisé par un autre utilisateur');
      });
  }

  public updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.db.doc(`/users/${user.uid}`);
    var regex1 = RegExp('@etu.univ-paris1.fr*');
    if (regex1.test(user.email)) {
      const data: User = {
        uid: user.uid,
        email: user.email,
        //        name: user.name,
        //      lastName: user.lastName,

        roles: {

          student: true
        },
        associations: []
      };
      return userRef.set(data, { merge: true });
    } else {
      const data: User = {
        uid: user.uid,
        email: user.email,
        //        name: user.name,
        //      lastName: user.lastName,

        roles: {

          student: false
        },
        associations: []
      };
      return userRef.set(data, { merge: true });
    }


  }


}
