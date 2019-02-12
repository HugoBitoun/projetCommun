import {User} from "../../assets/utils/User";
import {AngularFireAuth} from "angularfire2/auth";
import {Injectable} from "@angular/core";
import "rxjs-compat/add/operator/switchMap";
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreDocument} from "angularfire2/firestore";
import "rxjs-compat/add/observable/of";

@Injectable()
export class AuthService {
    static oAuthLogin(credentials: { email: any; password: any; }): any {
        throw new Error("Method not implemented.");
    }
    user$ : Observable<User>;

    constructor( private afAuth: AngularFireAuth, private db : AngularFirestore ) {

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
                this.updateUserData(credential.user);
            })
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
            },
            associations : []
        };
        return userRef.set(data,{merge:true});
    }


}