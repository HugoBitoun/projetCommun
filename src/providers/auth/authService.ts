import {User} from "../../assets/utils/User";
import {AngularFireAuth} from "angularfire2/auth";
import {Injectable, NgZone} from "@angular/core";
import "rxjs-compat/add/operator/switchMap";
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreDocument} from "angularfire2/firestore";
import "rxjs-compat/add/observable/of";


@Injectable()
export class AuthService {
    
    user$ : Observable<User>;  

    constructor( private afAuth: AngularFireAuth, private db : AngularFirestore, private ngZone: NgZone ) {
        this.user$ = this.afAuth.authState.switchMap(user => {
            if (user){
                return this.db.doc<User>(`/users/${user.uid}`).valueChanges();
            } else {
                return Observable.of(null);
            }
        })
    }

    public oAuthLogin(values){
        return this.afAuth.auth.signInWithEmailAndPassword(values.email,values.password)
            .then((credential)=> {                                                
                if (credential.user.emailVerified !== true && credential.user.email !== 'admin@admin.fr') {                                        
                    throw new Error('Merci de valider votre adresse email. Veuillez vérifier votre boîte de réception');
                }                                
            })
            .catch(err => {
                if(err.message == 'Merci de valider votre adresse email. Veuillez vérifier votre boîte de réception' ){
                    throw new Error(err.message); 
                }
                throw new Error('Email universitaire ou mot de passe incorrect !');
              });
    }

    public signOut(){
        this.afAuth.auth.signOut();
    }

    public updateUserData(user){
        const userRef: AngularFirestoreDocument<any> = this.db.doc(`/users/${user.uid}`);
        console.log(user.uid);
        const data : User = {
            uid : user.uid,
            email: user.email,
            roles : {
                student: true
            }            
        };
        return userRef.set(data,{merge:true});
    }


}