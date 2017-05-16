import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from '../../services/local-storage.service';
import { CartService } from '../../services/cart.service';
import { Product, ExtendedProduct } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsCart: Array<ExtendedProduct> = [];

  constructor(private cartService: CartService, private localStorageService: LocalStorageService) { }

  ngOnInit() {

    this.cartService.getProducts().subscribe(productsCart => {
      let products = productsCart;
      console.log(products);
      this.productsCart = products.map(item => {
        let p = new ExtendedProduct();
        p = Object.assign({ total: item.quantity * item.price}, item);
        return p;
      });
    });
  }

  deleteProduct(product, $event){
    this.cartService.deleteProduct(product);
  }

  addProduct(product, $event){
    this.cartService.addProduct(product);
  }

}
