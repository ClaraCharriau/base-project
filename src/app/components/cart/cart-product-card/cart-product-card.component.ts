import { Component, Input } from '@angular/core';
import { CartProduct, CartService } from 'src/app/service/cart/cart.service';
import { ProductsService } from 'src/app/service/products/products.service';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrls: ['./cart-product-card.component.css']
})
export class CartProductCardComponent {

  @Input() cartProduct!: CartProduct;

  constructor(public cartService: CartService, public product: ProductsService) {}

}
