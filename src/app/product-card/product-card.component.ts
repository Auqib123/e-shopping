import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input('product') product; 
@Input("show-actions") showActions=true;

@Input('shopping-cart') shoppingCart:ShoppingCart;
constructor(private cartServices:ShoppingCartService) { }

  ngOnInit() {
  }

    addToCart(){

      this.cartServices.addToCart(this.product);
   
    }
}
