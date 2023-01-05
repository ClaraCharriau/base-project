import { Component, Input } from '@angular/core';
import { CartProduct, CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrls: ['./cart-product-card.component.css']
})
export class CartProductCardComponent {

  constructor(public cartService: CartService) {}

}
