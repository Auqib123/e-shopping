import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit,OnDestroy {
  @Input("cart") cart:ShoppingCart;
  shopping={}
  shipping={}
  userId:string;
  userSubscription:Subscription;

  constructor(private route:Router, 
    private authService:AuthService,
    private orderService:OrderService) { }

  ngOnInit() {
    this.userSubscription=this.authService.user$.subscribe(user=>this.userId=user.uid);
  }

  async placeOrder() {
    let order =new Order(this.userId, this.shopping, this.cart);
    let result= await this.orderService.placeOrder(order);
    this.route.navigate(['/order-success',result.key]); 
  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
 
  }


}
