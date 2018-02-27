import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  constructor(private auth: AuthService) { 
    
    
  }
  logOut(){
       this.auth.logOut();
  }

}
