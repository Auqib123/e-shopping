import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import 'rxjs/add/operator/take'; 
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  id;
  cateories$
  imgUrl;
  title;
  price;
  category;
  product:Product;
  constructor(private router:Router,

              private activatedRoute:ActivatedRoute,
              private categoryService:CategoryService,
              private productService:ProductService
  ) {
    this.cateories$=categoryService.getAll();
    this.id =this.activatedRoute.snapshot.paramMap.get("id");
    if(this.id) this.productService.get(this.id).take(1).subscribe(product=>{
      console.log("I got it",product.title);
      this.product=product});
  
  }

  ngOnInit() {
  }


saveProduct(product){
  if (this.id) this.productService.update(this.id,product);
  else this.productService.create(product);
this.router.navigate(["/admin/products"]);
  
}
deleteProduct(){
  if(!confirm("are you sure you want to delete")){}
  this.productService.delelte(this.id);
  this.router.navigate(["/admin/products"]);
}

}
