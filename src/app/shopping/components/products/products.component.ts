import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../../shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

products:Product[]=[];
category;
filteredProducts:Product[]=[];
cart$:Observable<ShoppingCart>;
subs:Subscription;
  constructor(private route:ActivatedRoute,
              private productService:ProductService,
            private cartService:ShoppingCartService) { 
   

   
  
        }

async ngOnInit() {
      this.cart$ = await this.cartService.getCart();
      this.populateProducts();

  }
 private populateProducts(){

  this.productService.getAll().switchMap(products=>{
    this.filteredProducts=this.products=products
    return this.route.queryParamMap;
  })
    .subscribe(params=>{
      this.category=params.get('category'); 
       this.applyFilter();
    })

 }
  private applyFilter(){
    this.filteredProducts=(this.category)?this.products.filter(p=> p.category==this.category) :this.products;
  }

}
