import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endPoint = "http://localhost:9091/stockapi";

  constructor(private http: Http) { }

  create(product) {
    console.log(product)
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(this.endPoint + "/add", JSON.stringify(product), { headers: headers });
  }

  update(productId, product) {
    console.log(product)
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.put(this.endPoint + "/update/" + productId, JSON.stringify(product), { headers: headers });
  }

  getAll() {
    return this.http.get(this.endPoint + "/stocks");
  }
  
  get(productId){
    return this.http.get(this.endPoint + "/stock/" + productId);
  }
}
