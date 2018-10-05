import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../model/product-model';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { CategoryModel } from '../model/category-model';
import { ActivatedRoute } from '@angular/router';
import { BrandModel } from '../model/brand-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  filteredProducts: ProductModel[];
  products: ProductModel[] = [];
  category: string;
  subscription: Subscription;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.getAllProducts();
  }

  getAllProducts() {
    this.subscription = this.productService.getAll()
      .subscribe(
        response => {
          this.products = response.json();

          this.route.queryParamMap
            .subscribe(params => {
              this.category = params.get('category');

              this.filteredProducts = (this.category) ?
                this.products.filter(product => product.category.id.toString() === this.category) : this.products;
            }
            );
        }
      );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
