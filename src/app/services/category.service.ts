import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  endPoint = "http://localhost:9091/categoryapi";

  constructor(private http: Http) {
  }

  getAll() {
    return this.http.get(this.endPoint + "/categories");
  }
}
