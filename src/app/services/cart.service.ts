import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';
import "rxjs/add/observable/of";
import 'rxjs/add/operator/map';

import { Product } from '../models/product';

@Injectable()
export class CartService {

  private subject: Subject<Product[]> = new Subject<Product[]>();
  private products: Product[];

  constructor(private http: Http, private localStorageService: LocalStorageService) { }

  getProducts(): Observable<Product[]> {

    let cachedProducts = JSON.parse(localStorage.getItem('products'));

    this.http.get("http://localhost:4200/assets/data/products.json").subscribe((response: Response) => {
      this.products = response.json();
      this.localStorageService.addItem('products', this.products);
      this.subject.next(this.products);
      console.log(this.products);
    });

    return this.subject.asObservable();
  }

  deleteProduct(productId) {
    this.products = this.products.filter(item => item.id != productId);
    this.localStorageService.addItem('products', this.products);
    this.subject.next(this.products);
  }

  addProduct(product){
    this.products.push(product);
    this.subject.next(this.products);
  }

  /**
   * Save products to LocaleStorage
   */
  private saveProductsLocalStorage() {
    this.localStorageService.addItem('productsCart', this.products);
  }

}
