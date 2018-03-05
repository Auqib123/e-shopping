import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})

export class BsNavbarComponent implements OnInit  {
 
  appUser:AppUser;
  isCollepsed:boolean;
  cart$:Observable<ShoppingCart>
  constructor(private auth: AuthService,
              private cartService:ShoppingCartService) { 
    
    
  }
  async ngOnInit() {
    
   this.auth.appUser$.subscribe(appUser=>this.appUser=appUser);
   this.cart$=await this.cartService.getCart();
  }
 
  myData(){
    this.isCollepsed=!this.isCollepsed;
  }

  logOut(){
       this.auth.logOut();
  }

}
