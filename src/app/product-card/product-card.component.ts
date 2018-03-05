import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input('product') product; 
@Input("show-actions") showActions=true;

@Input('shopping-cart') shoppingCart;
constructor(private cartServices:ShoppingCartService) { }

  ngOnInit() {
  }

    addToCart(){

      this.cartServices.addToCart(this.product);
   
    }
    removeFromCart(){
      this.cartServices.removeFromCart(this.product);
    }

    getQuantity(){
      if(!this.shoppingCart)return 0;
      let item=this.shoppingCart.items[this.product.$key];
      return item ? item.quantity : 0;
    }

}
