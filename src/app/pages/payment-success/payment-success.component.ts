import { Component } from '@angular/core';
import { CartProduct, CartService } from 'src/app/service/cart/cart.service';
import { PaymentFormService } from 'src/app/service/payment-form/payment-form.service';
import { ProductsService } from 'src/app/service/products/products.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent {

  cart: CartProduct[] = [];

  constructor(public paymentService: PaymentFormService, public cartService: CartService, public product: ProductsService) {}

  ngOnInit() {
    this.paymentService.getClientInfos();
    this.getCart();
    this.cartService.getCartTotal();
    this.cartService.getProductQuantity();
  }

  getCart() {
    this.cart = this.cartService.getCart();
  }

}
