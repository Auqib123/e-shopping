import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afAuth:AngularFireAuth) { 
    
    this.user$=afAuth.authState;
  }

  login(){
  
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  
  }

  logOut(){
  
    this.afAuth.auth.signOut();
  
  }

}
