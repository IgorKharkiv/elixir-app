import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { LocalStorageService } from './local-storage.service'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class CartService {

  products : any[];
  httpData: any;
  data: {};
  productList: any[];

  constructor( public http:Http, private localStorageService : LocalStorageService ) {
    this.products = [ 1 ];

    this.httpData = new Promise(resolve => {
      this.http.get('assets/data/products.json').map((res:Response) => res.json()).subscribe((data) => {
        resolve( data );
      });
    }).then((data) => {
      console.log("what is in the data ", data);
      this.data = data;
      this.productList = this.data['products'];

      if( this.data && this.productList ){
        this.localStorageService.addItem( 'cartProducts', JSON.stringify( this.productList ))
      }

    });

  }


  getProducts(){

    return this.localStorageService.getItem('cartProducts') || [];

  }


}
