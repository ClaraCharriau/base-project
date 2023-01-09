import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct, CartService } from 'src/app/service/cart/cart.service';
import { ProductsService } from 'src/app/service/products/products.service';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
  styleUrls: ['./cart-product-card.component.css']
})
export class CartProductCardComponent {

  @Input() cartProduct!: CartProduct;
  @Input() index!: number;
  @Output() updateCart = new EventEmitter();

  constructor(public cartService: CartService, public product: ProductsService) { }

  removeProduct() {
    this.cartService.removeProduct(this.index);
    this.updateCart.emit();
  
  }


  
}

