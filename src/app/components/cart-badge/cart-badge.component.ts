import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent implements OnInit {

  productCount : number;

  constructor( private _cartBageService : CartService ) { }

  ngOnInit() {

    this.productCount = this._cartBageService.getProducts();

  }

}
