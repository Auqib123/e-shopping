import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  cateories$
imgUrl;
title;
price;
category;
  constructor(private router:Router,
              private categoryService:CategoryService,
              private productService:ProductService
  ) {
    this.cateories$=categoryService.getCategories();
   
  
  }

  ngOnInit() {
  


  }
  saveForm(product){
this.productService.create(product);
this.router.navigate(["/admin/products"]);
  }

}
