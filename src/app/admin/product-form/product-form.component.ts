import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  cateories$

  constructor(categoryService:CategoryService) {
    this.cateories$=categoryService.getCategories();
   }

  ngOnInit() {
  }

}
