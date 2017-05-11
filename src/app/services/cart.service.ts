import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  products : any[];

  constructor() {
    this.products = [ 1 ];
  }

  getProducts(){

    return this.products.length;

  }


}
