import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy{

products:Product[]=[];
category;
filteredProducts:Product[]=[];
cart:any;
subs:Subscription;
  constructor(private route:ActivatedRoute,
              private productService:ProductService,
            private cartService:ShoppingCartService) { 
   

    this.productService.getAll().switchMap(products=>{
     this.filteredProducts=this.products=products
     return this.route.queryParamMap;
  })
    .subscribe(params=>{
      this.category=params.get('category'); 
      this.filteredProducts=(this.category)?this.products.filter(p=> p.category==this.category) :this.products;
    })

  
        }

       async ngOnInit() {
   this.subs =      (await this.cartService.getCart()).subscribe(cart=>this.cart=cart);
        }
    ngOnDestroy(){
    
    this.subs.unsubscribe();
  }

}
