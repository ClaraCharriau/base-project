import { Component, Input } from '@angular/core';
import { CartProduct } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.css']
})
export class CartCounterComponent {

  @Input() cartProduct!: CartProduct;

}
