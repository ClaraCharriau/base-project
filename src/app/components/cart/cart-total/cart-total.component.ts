import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';
import { ProductsService } from 'src/app/service/products/products.service';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent {


constructor(public cartService: CartService, public product: ProductsService) { }

getCartTotal() {
    this.cartService.getCartTotal();
  }

}
