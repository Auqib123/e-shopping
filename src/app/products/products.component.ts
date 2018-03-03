import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnDestroy{
products:Product[]=[];
category;
filteredProducts:Product[]=[];
categories$
subscription:Subscription;
subs:Subscription;
  constructor(private route:ActivatedRoute,private productService:ProductService,private categoryService:CategoryService) { 
    this.categories$=this.categoryService.getAll();

   this.subscription= this.productService.getAll().switchMap(products=>{
     this.filteredProducts=this.products=products
     return this.route.queryParamMap;
  })
    .subscribe(params=>{
      this.category=params.get('category'); 
      this.filteredProducts=(this.category)?this.products.filter(p=> p.category==this.category) :this.products;
    })

  
        }

  showFilter(category:string){
 
  
  }



  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.subs.unsubscribe();
  }

}
