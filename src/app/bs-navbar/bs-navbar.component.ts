import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})

export class BsNavbarComponent implements OnInit  {
 
  appUser:AppUser;
  isCollepsed:boolean;
shoppingCartItemCount:number;
  constructor(private auth: AuthService,
              private cartService:ShoppingCartService) { 
    
    
  }
  async ngOnInit() {
    
   this.auth.appUser$.subscribe(appUser=>this.appUser=appUser);
   let cart$=await this.cartService.getCart();
    cart$.subscribe(cart=>{
      this.shoppingCartItemCount=0;
        for(let productId in cart.items)
          this.shoppingCartItemCount+=cart.items[productId].quantity;
        
    });
  }
 
  myData(){
    this.isCollepsed=!this.isCollepsed;
  }

  logOut(){
       this.auth.logOut();
  }

}
