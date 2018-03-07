import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable()
export class OrderService {

  constructor(private db:AngularFireDatabase, private cartService:ShoppingCartService) { }
async placeOrder(order){
let result =await this.db.list('/orders').push(order);
this.cartService.clearCart();

return result;
}
}
