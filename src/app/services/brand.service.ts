import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  endPoint = "http://localhost:9091/brandapi";

  constructor(private http: Http) {
  }

  getBrands() {
    return this.http.get(this.endPoint + "/brands");
  }
}
