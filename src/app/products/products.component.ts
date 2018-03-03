import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnDestroy{
products:Product[];
filteredProducts:Product[];
categories$
subscription:Subscription;
  constructor(private productService:ProductService,private categoryService:CategoryService) { 

   this.subscription= this.productService.getAll().subscribe(product=>this.filteredProducts=this.products=product)
     this.categories$=this.categoryService.getAll();
  }

  showFilter(category:string){
    this.filteredProducts=this.products;    
    this.filteredProducts=(category)?this.filteredProducts.filter(p=> p.category.toLowerCase().includes(category.toLowerCase())) :this.products;
  
  }



  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
