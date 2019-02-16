import { Injectable } from '@angular/core';
import { User } from '../../assets/utils/User';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the SignUpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignUpProvider {
  
  constructor(private afAuth: AngularFireAuth) {
  }

  public register(user: User): any {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(value => { })
      .catch(err => {
        throw new Error('Cet email est déjà utilisé par un autre utilisateur');
      });
  }

}
