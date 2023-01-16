import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.css']
})
export class CartCounterComponent {

  @Input() cartProduct!: CartProduct;
  @Output() updateCart = new EventEmitter();

  increase() {
    // this.cartService.removeProduct(this.index);
    this.updateCart.emit();
  }

  decrease() {
    // écrire les fonctions increase et decrease dans service cart
    this.updateCart.emit();
  }

}
