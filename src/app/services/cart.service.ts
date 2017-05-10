import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  products : any[];

  constructor() {
    this.products = [ 1, 2, 3, 4, 5, 6, 7 ];
  }

  getProducts(){

    return this.products.length;

  }


}
