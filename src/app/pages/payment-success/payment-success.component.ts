import { Component } from '@angular/core';
import { CartProduct, CartService } from 'src/app/service/cart/cart.service';
import { PaymentFormService } from 'src/app/service/payment-form/payment-form.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent {

  constructor(public paymentService: PaymentFormService, public cartService: CartService) {}

  ngOnInit() {
    this.paymentService.getClientInfos();
    this.cartService.getCartTotal();
    this.cartService.getProductQuantity();
    this.cartService.getCart();
  }

}
