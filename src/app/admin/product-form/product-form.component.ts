import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { BrandService } from '../../services/brand.service';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../model/product-model';
import { CategoryModel } from '../../model/category-model';
import { BrandModel } from '../../model/brand-model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories;
  brands;
  status;
  productModel;
  id;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private productService: ProductService
  ) { 
    //properly initialize the product model to avoid null reference when doing two way binging in the component html form
    this.productModel = new ProductModel(new CategoryModel, new BrandModel);
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.productService.get(this.id)
        .subscribe(
          p => {
            this.productModel = p.json();
            console.log(this.productModel);
          }
        );
    }
  }

  ngOnInit() {
    this.categoryService.getAll()
      .subscribe(
        response => {
          this.categories = response.json();
        }
      );

    this.brandService.getBrands()
      .subscribe(
        response => {
          this.brands = response.json();
        }
      );
  }

  save(product) {
    if (this.id) {
      this.productService.update(this.id, product)
        .subscribe(response => {
          this.status = response.status;
        });
    } else {
      this.productService.create(product)
        .subscribe(response => {
          this.status = response.status;
        });
    }

    this.router.navigate(['/admin/products']);
  }
}
