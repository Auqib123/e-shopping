import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user$: Observable<firebase.User>;

  constructor(private afauth:AngularFireAuth) { 
    this.user$=afauth.authState;
    
  }

  ngOnInit() {
  }
  logOut(){
    this.afauth.auth.signOut();

  }

}
