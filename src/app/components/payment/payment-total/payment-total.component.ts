import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-payment-total',
  templateUrl: './payment-total.component.html',
  styleUrls: ['./payment-total.component.css']
})
export class PaymentTotalComponent {

  constructor(public cartService: CartService) { }

  getCartTotal() {
    this.cartService.getCartTotal();
  }

}
