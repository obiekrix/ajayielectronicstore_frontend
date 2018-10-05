import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { ProductModel } from '../../model/product-model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  products: ProductModel[];
  // filteredProducts: ProductModel[]; No longer needed since we've not using HTML 5 table but angular material
  subscription: Subscription;
  displayedColumns: string[] = ['category', 'brand', 'description', 'features', 'costPrice', 'sellingPrice', 'id'];//the order here defines column rendering order
  dataSource;

  constructor(private productService: ProductService) {
    this.getAll();
  }

  getAll() {
    this.subscription = this.productService.getAll()
      .subscribe(
        response => {
          // this.filteredProducts = this.products = response.json();No longer needed since we've not using HTML 5 table but angular material
          this.products = response.json();

          this.dataSource = new MatTableDataSource<ProductModel>(this.products);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }  

  // No longer needed since we've not using HTML 5 table but angular material
  // filter(query: string) {
  //   this.filteredProducts = (query) ? this.products.filter(
  //     product => product["category"]["name"].toLowerCase().includes(query.toLowerCase()) ||
  //       product["brand"]["name"].toLowerCase().includes(query.toLowerCase()) ||
  //       product["description"].toLowerCase().includes(query.toLowerCase()) ||
  //       product["features"].toLowerCase().includes(query.toLowerCase()) ||
  //       product["costPrice"].toString().includes(query) ||
  //       product["sellingPrice"].toString().includes(query) ||
  //       product["remainingQuantity"].toString().includes(query)
  //   ) : this.products;
  // }

}
