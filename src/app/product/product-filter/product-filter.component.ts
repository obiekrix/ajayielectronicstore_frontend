import { Component, OnInit, Input } from '@angular/core';
import { CategoryModel } from '../../model/category-model';
import { CategoryService } from '../../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories: CategoryModel[];
  @Input('subscription') subscription;
  @Input('category') category;

  constructor(private categoryService: CategoryService) {
    this.getAllCategories();
  }

  getAllCategories() {
    this.subscription = this.categoryService.getAll()
      .subscribe(
        response => {
          this.categories = response.json();
        }
      );
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
