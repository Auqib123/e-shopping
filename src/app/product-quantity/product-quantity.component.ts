import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {

  @Input('product') product;   
  @Input('shopping-cart') shoppingCart:ShoppingCart;
  constructor(private cartServices:ShoppingCartService) { }
  
    ngOnInit() {
    }

      addToCart(){
  
        this.cartServices.addToCart(this.product);
     
      }
      removeFromCart(){
        this.cartServices.removeFromCart(this.product);
      }
      
}
