import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent implements OnInit {

  productsCart: Product[] = [];


  constructor(private localStorageService: LocalStorageService, private cartService: CartService) { }

  ngOnInit() {
    setTimeout(() => {
      this.cartService.getProducts().subscribe(productsCart => {
        this.productsCart = productsCart;
      });
    }, 10);


  }

}
