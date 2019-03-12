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

  /**
   * @description send a verification email to the user who just sign up
   * @return Promise<void>
   */
  public sendVerificationMail(): Promise<void> {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {

    }).catch(err=> {
      throw Error('échec lors de la transmission de mail de confirmation');
    });
  }

  /**
   * @description add a user to the database then send email then update table users in database
   * @return any
   * @param user
   */
  public register(user: User): any {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(value => { 
      this.sendVerificationMail(); 
      this.updateUserData(value.user, user);
    })
      .catch(err => {
        throw new Error('Cet email est déjà utilisé par un autre utilisateur');
      });
  }

  /**
   * @description update the data into user table in function of if it's a prof or student
   * @param userAuth
   * @param user User
   * @return Promise<void>
   */
  public updateUserData(userAuth, user: User) : Promise<void> {
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
          prof: false,
          admin: false,
          isAdminAsso : false,
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
      return userRef.set(data, { merge: true });
    }
  }

}
