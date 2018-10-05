import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../model/product-model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: ProductModel
  @Input('show-actions') showActions = true;
  @Input('show-cost-price') showCostPrice = true;

  constructor() { }

  ngOnInit() {
  }

}
