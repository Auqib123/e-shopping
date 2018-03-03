import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
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

subscription:Subscription;
  constructor(private route:ActivatedRoute,private productService:ProductService) { 
   

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
    
  }

}
