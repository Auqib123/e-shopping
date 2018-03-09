import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
products:Product[];
subscription:Subscription;
filteredProducts:any[];
  constructor(private productService:ProductService) {
    this.subscription=this.productService.getAll().subscribe(product=>this.filteredProducts=this.products=product);
   }

  ngOnInit() {
  }
  filter(searchQuery:string){
    this.filteredProducts=(searchQuery)?this.products.filter(p=>p.title.toLowerCase().includes(searchQuery.toLowerCase())):this.products;
  }
ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
