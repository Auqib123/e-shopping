import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user: firebase.User;

  constructor(private afauth:AngularFireAuth) { 
    afauth.authState.subscribe(user=>this.user=user);
    
  }

  ngOnInit() {
  }
  logOut(){
    this.afauth.auth.signOut();

  }

}
